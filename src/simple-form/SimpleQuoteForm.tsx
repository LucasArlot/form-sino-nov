import type { FC, ChangeEvent } from 'react';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useSimpleForm } from './context/useSimpleForm';
// SimpleFormData type is used via useSimpleForm hook
import SimpleServicesSection from './SimpleServicesSection';
import SimpleContactSection from './SimpleContactSection';
import SimpleFooterSection from './SimpleFooterSection';
import SimpleStepNavigation from './SimpleStepNavigation';
import SimpleStepProgress from './SimpleStepProgress';
import SimpleAutocomplete, { createCountryOptions, createCityOptions } from './SimpleAutocomplete';
import SimpleCargoCalculations from './SimpleCargoCalculations';
import SimpleSocialProofWidget from './SimpleSocialProofWidget';
import SimpleSourcingSection from './SimpleSourcingSection';
import SimpleWarehousingSection from './SimpleWarehousingSection';
import SimpleDropshippingSection from './SimpleDropshippingSection';
import SimpleQcSection from './SimpleQcSection';
import SimpleChinaVisitSection from './SimpleChinaVisitSection';
import SimpleOtherSection from './SimpleOtherSection';
import SimpleConfirmationSection from './SimpleConfirmationSection';
import {
  validateEmail,
  validatePhone,
  validateRequired,
  validateCountry,
  validateDestCity,
  validateWeight,
  validateStepFields,
  isStepComplete,
  type ValidationResult,
} from './utils/validation';
import { getSessionId, saveFormDraft, loadFormDraft } from './utils/sessionStorage';
import {
  initFormTracking,
  trackStepChange,
  trackFieldError,
  trackFieldCompleted,
  trackFormSubmission,
  trackFormAbandonment,
} from './utils/analytics';

/**
 * SimpleQuoteForm v2 – Standalone simple form
 *
 * Completely independent from the legacy QuoteForm:
 * - Uses SimpleFormProvider context
 * - No i18n dependency (uses fallback strings directly)
 * - CSS scoping through .sino-simple-form* classes
 */
const SimpleQuoteForm: FC = () => {
  const { formData, setFormData, handleInputChange } = useSimpleForm();

  const [goodsValueUnknown, setGoodsValueUnknown] = useState(false);
  const [dimensionsUnknown, setDimensionsUnknown] = useState(false);
  const [unitsUnknown, setUnitsUnknown] = useState(false);
  const [showDestinationDetails, setShowDestinationDetails] = useState(true);
  const [showOriginDetails, setShowOriginDetails] = useState(true);
  const [showAdvancedDetails, setShowAdvancedDetails] = useState(true);
  const [showSourcingAdvanced, setShowSourcingAdvanced] = useState(true);
  const [showWarehousingAdvanced, setShowWarehousingAdvanced] = useState(true);
  const [showDropshippingAdvanced, setShowDropshippingAdvanced] = useState(true);
  const [showQcAdvanced, setShowQcAdvanced] = useState(true);
  const [showChinaVisitLogistics, setShowChinaVisitLogistics] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [fieldTouched, setFieldTouched] = useState<Record<string, boolean>>({});
  const [isQuickQuote, setIsQuickQuote] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [lastSelectedCountry, setLastSelectedCountry] = useState<string>('');
  const [lastSelectedCity, setLastSelectedCity] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoize country and city options
  const countryOptions = useMemo(() => createCountryOptions(), []);
  const cityOptions = useMemo(() => createCityOptions(formData.country), [formData.country]);

  const countryRef = useRef<HTMLInputElement | null>(null);
  const destCityRef = useRef<HTMLInputElement | null>(null);
  const totalWeightRef = useRef<HTMLInputElement | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  const scrollToFirstError = useCallback((): void => {
    const targets: Array<HTMLInputElement | null> = [
      firstNameRef.current,
      emailRef.current,
      phoneRef.current,
      countryRef.current,
      destCityRef.current,
      totalWeightRef.current,
    ];

    const node = targets.find((el) => el !== null);
    if (!node) return;

    node.scrollIntoView({ block: 'center', behavior: 'smooth' });
    node.focus();
  }, []);

  const isFilled = useCallback(
    (value: string | undefined | null): boolean =>
      typeof value === 'string' && value.trim().length > 0,
    []
  );

  // Simple translation function - just returns the fallback (no i18n)
  const t = useCallback((_key: string, fallback: string): string => fallback, []);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      handleInputChange(event);
      // Clear error when user starts typing (but only if field is not touched yet)
      // If field is already touched, keep the error until validation runs
      const fieldName = event.target.name;
      if (fieldErrors[fieldName] && !fieldTouched[fieldName]) {
        setFieldErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return newErrors;
        });
      }

      // Update last selected values when user types (for autocomplete fields)
      if (fieldName === 'country') {
        setLastSelectedCountry(event.target.value);
      } else if (fieldName === 'destCity') {
        setLastSelectedCity(event.target.value);
      }
    },
    [handleInputChange, fieldErrors, fieldTouched]
  );

  // Calculate orderedSteps and currentStepId early (needed for onBlur callback)
  const shippingSelectedEarly =
    formData.servicesRequested?.shipping === undefined ? true : formData.servicesRequested.shipping;

  type StepId =
    | 'services'
    | 'shippingRoute'
    | 'shippingCargo'
    | 'sourcing'
    | 'warehousing'
    | 'dropshipping'
    | 'qc'
    | 'chinaVisit'
    | 'other'
    | 'contact';

  // Fonction pour obtenir toutes les étapes dans l'ordre - recalculée à chaque changement de services
  const orderedSteps = useMemo((): StepId[] => {
    const steps: StepId[] = ['services'];

    const servicesRequested = formData.servicesRequested || {};

    // Ajouter les services sélectionnés dans l'ordre
    if (servicesRequested.sourcing) steps.push('sourcing');
    if (servicesRequested.warehousing) steps.push('warehousing');
    if (servicesRequested.dropshipping) steps.push('dropshipping');
    if (servicesRequested.qc) steps.push('qc');
    if (servicesRequested.chinaVisits) steps.push('chinaVisit');

    // Shipping - 2 étapes : Route (destination + pickup) et Cargo
    if (shippingSelectedEarly) {
      steps.push('shippingRoute');
      steps.push('shippingCargo');
    }

    // "Other project" en dernier (avant contact) - permet de décrire des besoins spéciaux
    if (servicesRequested.other) steps.push('other');

    // Contact en dernier
    steps.push('contact');

    return steps;
  }, [formData.servicesRequested, shippingSelectedEarly]);

  const totalSteps = useMemo(() => orderedSteps.length, [orderedSteps]);
  const currentStepId = orderedSteps[currentStepIndex] || 'services';

  // Validate field on blur (memoized to prevent unnecessary re-renders)
  const onBlur = useCallback(
    (fieldName: string, value: string | undefined | null): void => {
      // Don't validate if value is empty and field hasn't been touched yet
      if (!value || (typeof value === 'string' && value.trim().length === 0)) {
        // Only mark as touched, don't show error for empty fields on first blur
        setFieldTouched((prev) => ({ ...prev, [fieldName]: true }));
        return;
      }

      setFieldTouched((prev) => ({ ...prev, [fieldName]: true }));

      let result: ValidationResult = { valid: true };

      switch (fieldName) {
        case 'email':
          result = validateEmail(value as string);
          break;
        case 'phone':
          result = validatePhone(value as string);
          break;
        case 'firstName':
          result = validateRequired(value as string, 'First name');
          break;
        case 'country':
          result = validateCountry(value as string);
          break;
        case 'destCity':
          result = validateDestCity(value as string);
          break;
        case 'totalWeight':
          result = validateWeight(value);
          break;
        default:
          // No validation for other fields
          break;
      }

      if (!result.valid && result.error) {
        setFieldErrors((prev) => ({ ...prev, [fieldName]: result.error! }));
        // Track field error
        trackFieldError(fieldName, result.error);
      } else {
        setFieldErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return newErrors;
        });
        // Track field completion
        if (value && typeof value === 'string' && value.trim().length > 0) {
          trackFieldCompleted(fieldName, currentStepId);
        }
      }
    },
    [currentStepId]
  );

  // Memoize selectedServiceLabels to avoid recalculation
  const selectedServiceLabels = useMemo((): string[] => {
    return (
      ['shipping', 'sourcing', 'dropshipping', 'warehousing', 'qc', 'chinaVisits', 'other'] as const
    )
      .filter((key) => formData.servicesRequested?.[key])
      .map((key) => {
        switch (key) {
          case 'shipping':
            return t('serviceShippingSummary', 'Shipping from China');
          case 'sourcing':
            return t('serviceSourcingSummary', 'Product sourcing');
          case 'dropshipping':
            return t('serviceDropshippingSummary', 'Dropshipping & fulfillment');
          case 'warehousing':
            return t('serviceWarehousingSummary', 'Warehousing & consolidation');
          case 'qc':
            return t('serviceQcSummary', 'Quality control & inspections');
          case 'chinaVisits':
            return t('serviceChinaVisitsSummary', 'China visits & trade fairs');
          case 'other':
            return t('serviceOtherSummary', 'Other project');
          default:
            return '';
        }
      })
      .filter(Boolean);
  }, [formData.servicesRequested, t]);

  const shippingSelected =
    formData.servicesRequested?.shipping === undefined ? true : formData.servicesRequested.shipping;

  const isLastStep = currentStepIndex === totalSteps - 1;
  const isFirstStep = currentStepIndex === 0;

  // Fonction pour passer à l'étape suivante (memoized)
  const handleNext = useCallback((): void => {
    // Valider l'étape actuelle avant de permettre la navigation
    if (!isStepComplete(currentStepId, formData as unknown as Record<string, unknown>)) {
      // Valider tous les champs de l'étape et marquer comme "touched"
      const stepErrors = validateStepFields(
        currentStepId,
        formData as unknown as Record<string, unknown>
      );

      // Mettre à jour les erreurs
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        Object.entries(stepErrors).forEach(([fieldName, result]) => {
          if (!result.valid && result.error) {
            newErrors[fieldName] = result.error;
            // Track field error
            trackFieldError(fieldName, result.error);
          } else {
            delete newErrors[fieldName];
          }
        });
        return newErrors;
      });

      // Marquer tous les champs de l'étape comme "touched"
      setFieldTouched((prev) => {
        const newTouched = { ...prev };
        Object.keys(stepErrors).forEach((fieldName) => {
          newTouched[fieldName] = true;
        });
        return newTouched;
      });

      // Scroller vers le premier champ en erreur
      setTimeout(() => {
        scrollToFirstError();
      }, 100);

      return; // Empêcher la navigation
    }

    // Si l'étape est complète, permettre la navigation avec transition
    if (currentStepIndex < totalSteps - 1) {
      const nextStepIndex = currentStepIndex + 1;
      const nextStepId = orderedSteps[nextStepIndex];

      // Track step change
      trackStepChange(currentStepId, nextStepId, nextStepIndex, totalSteps);

      // Start transition animation
      setIsTransitioning(true);

      // Wait for fade-out, then change step
      setTimeout(() => {
        setCurrentStepIndex(nextStepIndex);
        // Scroll vers le haut du formulaire
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // End transition after fade-in starts
        setTimeout(() => setIsTransitioning(false), 50);
      }, 150);
    }
  }, [currentStepId, formData, currentStepIndex, totalSteps, scrollToFirstError, orderedSteps]);

  // Fonction pour revenir à l'étape précédente (memoized)
  const handlePrevious = useCallback((): void => {
    if (currentStepIndex > 0) {
      const prevStepIndex = currentStepIndex - 1;
      const prevStepId = orderedSteps[prevStepIndex];

      // Track step change (going back)
      trackStepChange(currentStepId, prevStepId, prevStepIndex, totalSteps);

      // Start transition animation
      setIsTransitioning(true);

      // Wait for fade-out, then change step
      setTimeout(() => {
        setCurrentStepIndex(prevStepIndex);
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // End transition after fade-in starts
        setTimeout(() => setIsTransitioning(false), 50);
      }, 150);
    }
  }, [currentStepIndex, currentStepId, orderedSteps, totalSteps]);

  // Réinitialiser l'étape si les services changent
  useEffect(() => {
    // Si on est sur une étape qui n'existe plus, revenir à la dernière étape valide
    if (currentStepIndex >= totalSteps && totalSteps > 0) {
      setCurrentStepIndex(totalSteps - 1);
      return;
    }
    // Si l'étape actuelle n'existe plus dans la nouvelle liste, essayer de trouver une correspondance
    const currentId = orderedSteps[currentStepIndex];
    if (!currentId || currentId !== currentStepId) {
      // Trouver l'index de l'étape actuelle dans la nouvelle liste, ou revenir à 0
      const newIndex = orderedSteps.indexOf(currentStepId);
      if (newIndex >= 0) {
        setCurrentStepIndex(newIndex);
      } else if (currentStepIndex >= totalSteps && totalSteps > 0) {
        setCurrentStepIndex(totalSteps - 1);
      } else if (currentStepIndex > 0) {
        setCurrentStepIndex(0);
      }
    }
  }, [totalSteps, orderedSteps, currentStepId, currentStepIndex]);

  // Gérer l'état des sections avancées selon le mode Quick quote
  useEffect(() => {
    if (isQuickQuote) {
      // En mode Quick quote : fermer toutes les sections avancées
      setShowDestinationDetails(false);
      setShowOriginDetails(false);
      setShowAdvancedDetails(false);
      setShowSourcingAdvanced(false);
      setShowWarehousingAdvanced(false);
      setShowDropshippingAdvanced(false);
      setShowQcAdvanced(false);
    } else {
      // En mode normal : ouvrir toutes les sections avancées
      setShowDestinationDetails(true);
      setShowOriginDetails(true);
      setShowAdvancedDetails(true);
      setShowSourcingAdvanced(true);
      setShowWarehousingAdvanced(true);
      setShowDropshippingAdvanced(true);
      setShowQcAdvanced(true);
    }
  }, [isQuickQuote]);

  // Initialize session ID on mount and load saved draft
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const id = getSessionId();
    setSessionId(id);

    // Initialize analytics tracking
    initFormTracking(id);

    // Load saved draft for this session
    try {
      const savedDraft = loadFormDraft(id);
      if (savedDraft) {
        setFormData((prev) => ({
          ...prev,
          ...savedDraft,
        }));
      }
    } catch {
      // ignore corrupted drafts
    }
    // we only want this to run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track form abandonment on page unload
  useEffect(() => {
    if (typeof window === 'undefined' || submissionId) return;

    const handleBeforeUnload = (): void => {
      trackFormAbandonment();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [submissionId]);

  // Auto-save form data with session ID (silent save, no notification)
  useEffect(() => {
    if (typeof window === 'undefined' || !sessionId) return;

    // Debounce the save to avoid too frequent saves
    const timeoutId = setTimeout(() => {
      try {
        const payload = {
          country: formData.country,
          origin: formData.origin,
          mode: formData.mode,
          email: formData.email,
          phone: formData.phone,
          phoneCountryCode: formData.phoneCountryCode,
          customerType: formData.customerType,
          locationType: formData.locationType,
          city: formData.city,
          zipCode: formData.zipCode,
          destLocationType: formData.destLocationType,
          destCity: formData.destCity,
          destZipCode: formData.destZipCode,
          destPort: formData.destPort,
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName,
          shipperType: formData.shipperType,
          // Simple form cargo fields (direct, no loads array)
          totalWeight: formData.totalWeight,
          numberOfUnits: formData.numberOfUnits,
          dimensions: formData.dimensions,
          weightPerUnit: formData.weightPerUnit,
          goodsValue: formData.goodsValue,
          goodsCurrency: formData.goodsCurrency,
          isPersonalOrHazardous: formData.isPersonalOrHazardous,
          areGoodsReady: formData.areGoodsReady,
          goodsDescription: formData.goodsDescription,
          specialRequirements: formData.specialRequirements,
          remarks: formData.remarks,
          incoterm: formData.incoterm,
          annualVolume: formData.annualVolume,
          servicesRequested: formData.servicesRequested,
          sourcing: formData.sourcing,
          warehousing: formData.warehousing,
          dropshipping: formData.dropshipping,
          qc: formData.qc,
          chinaVisit: formData.chinaVisit,
          otherProject: formData.otherProject,
        };

        // Save with session ID (silent, no notification)
        saveFormDraft(sessionId, payload);
      } catch {
        // ignore localStorage errors
      }
    }, 2000); // Debounce: save 2 seconds after last change (silent save)

    return () => clearTimeout(timeoutId);
  }, [formData, sessionId]);

  // Show save notification only when user stops typing for a longer period
  useEffect(() => {
    if (typeof window === 'undefined' || !sessionId) return;

    // Only show notification after user has stopped interacting for 5 seconds
    const notificationTimeoutId = setTimeout(() => {
      setShowSaveNotification(true);
      setTimeout(() => {
        setShowSaveNotification(false);
      }, 2000);
    }, 5000); // Show notification 5 seconds after last change

    return () => clearTimeout(notificationTimeoutId);
  }, [formData, sessionId]);

  const updateCargoField = useCallback(
    (
      field: 'totalWeight' | 'numberOfUnits' | 'dimensions' | 'weightPerUnit',
      value: unknown
    ): void => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [setFormData]
  );

  // Handle submission success (memoized)
  const handleSubmissionSuccess = useCallback(
    (id: string): void => {
      setSubmissionId(id);

      // Track form submission
      trackFormSubmission(id, formData as Record<string, unknown>);

      // Clear localStorage draft on successful submission
      if (typeof window !== 'undefined' && sessionId) {
        try {
          const storageKey = `sinoSimpleFormDraft-${sessionId}`;
          window.localStorage.removeItem(storageKey);
          // Also clear session ID to start fresh if user starts a new request
          window.localStorage.removeItem('sinoSimpleFormSessionId');
        } catch {
          // ignore
        }
      }
    },
    [sessionId]
  );

  // Handle start new request (memoized)
  const handleStartNew = useCallback((): void => {
    setSubmissionId(null);
    setCurrentStepIndex(0);
    setSubmitError(null);
    // Optionally reset form data here if needed
    // setFormData(initialFormData);
  }, []);

  // If submission successful, show confirmation
  if (submissionId) {
    return (
      <div className="sino-simple-form">
        <SimpleConfirmationSection
          submissionId={submissionId}
          t={t}
          onStartNew={handleStartNew}
          selectedServiceLabels={selectedServiceLabels}
          formData={formData}
        />
      </div>
    );
  }

  return (
    <div className="sino-simple-form">
      {/* Main form content */}
      <main role="main" aria-label={t('formAriaLabel', 'Quote request form')}>
        {/* Save notification */}
        {showSaveNotification && (
          <div className="sino-simple-form__save-notification" role="status" aria-live="polite">
            <span className="sino-simple-form__save-notification-icon" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="sino-simple-form__save-notification-text">
              {t('saveNotification', 'Your progress is saved')}
            </span>
          </div>
        )}

        {/* Social Proof Widget - visible during form filling */}
        {!submissionId && <SimpleSocialProofWidget t={t} />}

        {/* Step content with transition */}
        <div
          className={`sino-simple-form__step-content${isTransitioning ? ' sino-simple-form__step-content--transitioning' : ''}`}
        >
          {/* Afficher seulement l'étape actuelle */}
          {currentStepId === 'services' && (
            <SimpleServicesSection
              formData={formData}
              setFormData={setFormData}
              t={t}
              stepLabel={`Step ${currentStepIndex + 1}`}
              shippingOnly={false}
              isQuickQuote={isQuickQuote}
              setIsQuickQuote={setIsQuickQuote}
            />
          )}

          {currentStepId === 'sourcing' && (
            <SimpleSourcingSection
              formData={formData}
              setFormData={setFormData}
              t={t}
              stepLabel={`Step ${currentStepIndex + 1}`}
              showSourcingAdvanced={showSourcingAdvanced}
              setShowSourcingAdvanced={setShowSourcingAdvanced}
              isQuickQuote={isQuickQuote}
            />
          )}

          {currentStepId === 'warehousing' && (
            <SimpleWarehousingSection
              formData={formData}
              setFormData={setFormData}
              t={t}
              showWarehousingAdvanced={showWarehousingAdvanced}
              setShowWarehousingAdvanced={setShowWarehousingAdvanced}
              stepLabel={`Step ${currentStepIndex + 1}`}
            />
          )}

          {currentStepId === 'dropshipping' && (
            <SimpleDropshippingSection
              formData={formData}
              setFormData={setFormData}
              t={t}
              showDropshippingAdvanced={showDropshippingAdvanced}
              setShowDropshippingAdvanced={setShowDropshippingAdvanced}
              stepLabel={`Step ${currentStepIndex + 1}`}
            />
          )}

          {currentStepId === 'qc' && (
            <SimpleQcSection
              formData={formData}
              setFormData={setFormData}
              t={t}
              showQcAdvanced={showQcAdvanced}
              setShowQcAdvanced={setShowQcAdvanced}
              stepLabel={`Step ${currentStepIndex + 1}`}
            />
          )}

          {currentStepId === 'chinaVisit' && (
            <SimpleChinaVisitSection
              formData={formData}
              setFormData={setFormData}
              t={t}
              showChinaVisitLogistics={showChinaVisitLogistics}
              setShowChinaVisitLogistics={setShowChinaVisitLogistics}
              stepLabel={`Step ${currentStepIndex + 1}`}
            />
          )}

          {currentStepId === 'other' && (
            <SimpleOtherSection
              formData={formData}
              setFormData={setFormData}
              t={t}
              stepLabel={`Step ${currentStepIndex + 1}`}
            />
          )}

          {/* Shipping from China – Step 1: Destination & mode & Pickup */}
          {currentStepId === 'shippingRoute' && shippingSelected && (
            <>
              <section className="sino-simple-form__section sino-simple-form__section--service-shipping">
                <h2 className="sino-simple-form__section-title">
                  <span className="sino-simple-form__section-step">
                    {`Step ${currentStepIndex + 1}`}
                  </span>
                  <span>{t('shippingFromChinaTitle', 'Shipping from China')}</span>
                </h2>

                <SimpleStepProgress
                  stepId="shippingRoute"
                  formData={formData}
                  currentStepIndex={currentStepIndex}
                  totalSteps={totalSteps}
                  t={t}
                />

                <h3 className="sino-simple-form__subsection-title">
                  {t('simpleStep1Title', 'Destination & mode')}
                </h3>

                <div className="sino-simple-form__fields">
                  <div
                    className={`sino-simple-form__field sino-simple-form__field--primary${
                      fieldTouched.country && fieldErrors.country
                        ? ' sino-simple-form__field--error'
                        : ''
                    }${
                      fieldTouched.country && !fieldErrors.country && isFilled(formData.country)
                        ? ' sino-simple-form__field--success'
                        : ''
                    }`}
                  >
                    <label className="sino-simple-form__label" htmlFor="country">
                      {t('destinationCountry', 'Destination country')}
                      <span className="sino-simple-form__required" aria-label="required">
                        *
                      </span>
                    </label>
                    <div className="sino-simple-form__field-wrapper">
                      <SimpleAutocomplete
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={onChange}
                        onBlur={() => {
                          // Only validate on blur if field has a value and was actually touched by user
                          if (formData.country && formData.country.trim().length > 0) {
                            onBlur('country', formData.country);
                          }
                        }}
                        onSelect={(value) => {
                          // Value is already set by onChange, but we can do additional processing here if needed
                          setFormData((prev) => ({ ...prev, country: value }));
                        }}
                        onSelectWithValidation={(value) => {
                          // Update formData immediately to ensure isValid uses the correct value
                          setFormData((prev) => ({ ...prev, country: value }));
                          // Store the selected value for isValid calculation
                          setLastSelectedCountry(value);
                          // Mark as touched immediately
                          setFieldTouched((prev) => ({ ...prev, country: true }));

                          // Validate with the selected value directly
                          const result = validateCountry(value);
                          if (!result.valid && result.error) {
                            setFieldErrors((prev) => ({ ...prev, country: result.error! }));
                          } else {
                            setFieldErrors((prev) => {
                              const newErrors = { ...prev };
                              delete newErrors.country;
                              return newErrors;
                            });
                          }
                        }}
                        placeholder={t('destinationCountryPlaceholder', 'France, USA, Canada…')}
                        options={countryOptions}
                        inputRef={countryRef}
                        error={fieldErrors.country}
                        touched={fieldTouched.country}
                        isValid={
                          !fieldErrors.country && isFilled(lastSelectedCountry || formData.country)
                        }
                        maxResults={10}
                      />
                      {fieldTouched.country && (
                        <>
                          {fieldErrors.country && (
                            <span
                              className="sino-simple-form__field-icon sino-simple-form__field-icon--error"
                              aria-hidden="true"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                                <line
                                  x1="12"
                                  y1="8"
                                  x2="12"
                                  y2="12"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                                <line
                                  x1="12"
                                  y1="16"
                                  x2="12.01"
                                  y2="16"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                          )}
                          {!fieldErrors.country && isFilled(formData.country) && (
                            <span
                              className="sino-simple-form__field-icon sino-simple-form__field-icon--success"
                              aria-hidden="true"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                                <path
                                  d="M8 12l2 2 4-4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    {fieldErrors.country && (
                      <p
                        id="country-error"
                        className="sino-simple-form__field-error"
                        role="alert"
                        aria-live="polite"
                      >
                        {fieldErrors.country}
                      </p>
                    )}
                    {fieldTouched.country && !fieldErrors.country && isFilled(formData.country) && (
                      <p
                        id="country-success"
                        className="sino-simple-form__sr-only"
                        aria-live="polite"
                      >
                        {t('fieldValid', 'Field is valid')}
                      </p>
                    )}
                  </div>

                  <div
                    className={`sino-simple-form__field sino-simple-form__field--primary${
                      fieldTouched.destCity && fieldErrors.destCity
                        ? ' sino-simple-form__field--error'
                        : ''
                    }${
                      fieldTouched.destCity && !fieldErrors.destCity && isFilled(formData.destCity)
                        ? ' sino-simple-form__field--success'
                        : ''
                    }`}
                  >
                    <label className="sino-simple-form__label" htmlFor="destCity">
                      {t('destinationCityOrPort', 'City or port')}
                      <span className="sino-simple-form__required" aria-label="required">
                        *
                      </span>
                    </label>
                    <div className="sino-simple-form__field-wrapper">
                      <SimpleAutocomplete
                        id="destCity"
                        name="destCity"
                        value={formData.destCity}
                        onChange={onChange}
                        onBlur={() => {
                          // Only validate on blur if field has a value and was actually touched by user
                          if (formData.destCity && formData.destCity.trim().length > 0) {
                            onBlur('destCity', formData.destCity);
                          }
                        }}
                        onSelectWithValidation={(value) => {
                          // Update formData immediately to ensure isValid uses the correct value
                          setFormData((prev) => ({ ...prev, destCity: value }));
                          // Store the selected value for isValid calculation
                          setLastSelectedCity(value);
                          // Mark as touched immediately
                          setFieldTouched((prev) => ({ ...prev, destCity: true }));

                          // Validate with the selected value directly
                          const result = validateDestCity(value);
                          if (!result.valid && result.error) {
                            setFieldErrors((prev) => ({ ...prev, destCity: result.error! }));
                          } else {
                            setFieldErrors((prev) => {
                              const newErrors = { ...prev };
                              delete newErrors.destCity;
                              return newErrors;
                            });
                          }
                        }}
                        placeholder={t('destinationCityPlaceholder', 'e.g. Paris, Le Havre…')}
                        options={cityOptions}
                        inputRef={destCityRef}
                        error={fieldErrors.destCity}
                        touched={fieldTouched.destCity}
                        isValid={
                          !fieldErrors.destCity && isFilled(lastSelectedCity || formData.destCity)
                        }
                        maxResults={8}
                      />
                      {fieldTouched.destCity && (
                        <>
                          {fieldErrors.destCity && (
                            <span
                              className="sino-simple-form__field-icon sino-simple-form__field-icon--error"
                              aria-hidden="true"
                              aria-label={t('fieldError', 'Error')}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                                <line
                                  x1="12"
                                  y1="8"
                                  x2="12"
                                  y2="12"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                                <line
                                  x1="12"
                                  y1="16"
                                  x2="12.01"
                                  y2="16"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                          )}
                          {!fieldErrors.destCity && isFilled(formData.destCity) && (
                            <span
                              className="sino-simple-form__field-icon sino-simple-form__field-icon--success"
                              aria-hidden="true"
                              aria-label={t('fieldValid', 'Field is valid')}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                                <path
                                  d="M8 12l2 2 4-4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    {fieldErrors.destCity && (
                      <p
                        id="destCity-error"
                        className="sino-simple-form__field-error"
                        role="alert"
                        aria-live="polite"
                      >
                        {fieldErrors.destCity}
                      </p>
                    )}
                    {fieldTouched.destCity &&
                      !fieldErrors.destCity &&
                      isFilled(formData.destCity) && (
                        <p
                          id="destCity-success"
                          className="sino-simple-form__sr-only"
                          aria-live="polite"
                        >
                          {t('fieldValid', 'Field is valid')}
                        </p>
                      )}
                  </div>
                </div>

                <div
                  className={`sino-simple-form__subsection${
                    showDestinationDetails ? ' sino-simple-form__subsection--open' : ''
                  }`}
                >
                  <button
                    type="button"
                    className="sino-simple-form__subsection-toggle"
                    onClick={() => setShowDestinationDetails((prev) => !prev)}
                    aria-expanded={showDestinationDetails}
                    aria-controls="destination-details-content"
                    aria-label={
                      showDestinationDetails
                        ? t('collapseSection', 'Collapse destination details')
                        : t('expandSection', 'Expand destination details')
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setShowDestinationDetails((prev) => !prev);
                      }
                    }}
                  >
                    <span className="sino-simple-form__subsection-label">
                      {t('destinationDetailsTitle', 'Advanced delivery details (optional)')}
                      <small>
                        {t(
                          'destinationDetailsSubtitle',
                          'Helps us refine delivery but you can skip this for now.'
                        )}
                      </small>
                    </span>
                    <span
                      className={`sino-simple-form__subsection-chevron${
                        showDestinationDetails ? ' sino-simple-form__subsection-chevron--open' : ''
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  {showDestinationDetails && (
                    <div
                      id="destination-details-content"
                      className="sino-simple-form__fields sino-simple-form__fields--rows"
                    >
                      <div className="sino-simple-form__field">
                        <label className="sino-simple-form__label">
                          {t('destinationLocationType', 'Delivery location type')}
                        </label>
                        <input
                          className="sino-simple-form__input"
                          type="text"
                          name="destLocationType"
                          value={formData.destLocationType}
                          onChange={onChange}
                          placeholder={t(
                            'destinationLocationTypePlaceholder',
                            'Port, warehouse, home address…'
                          )}
                        />
                      </div>

                      <div className="sino-simple-form__field">
                        <label className="sino-simple-form__label">
                          {t('destinationZipCode', 'ZIP / postal code')}
                        </label>
                        <input
                          className="sino-simple-form__input"
                          type="text"
                          name="destZipCode"
                          value={formData.destZipCode}
                          onChange={onChange}
                          placeholder={t('destinationZipCodePlaceholder', 'e.g. 75001')}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="sino-simple-form__fields sino-simple-form__fields--rows sino-simple-form__fields--m-top">
                  <div className="sino-simple-form__field">
                    <label className="sino-simple-form__label">
                      {t('shippingMode', 'Preferred mode')}
                    </label>
                    <div className="sino-simple-form__chips">
                      {[
                        {
                          value: 'Sea',
                          label: 'Sea',
                          tooltip: t(
                            'modeSeaHelp',
                            'Best for large volumes and lower cost when you have a few weeks.'
                          ),
                        },
                        {
                          value: 'Air',
                          label: 'Air',
                          tooltip: t(
                            'modeAirHelp',
                            'Faster than sea, ideal for smaller, time-sensitive shipments.'
                          ),
                        },
                        {
                          value: 'Railway',
                          label: 'Railway',
                          tooltip: t(
                            'modeRailHelp',
                            'Balanced option Europe–China: faster than sea, cheaper than air.'
                          ),
                        },
                        {
                          value: 'Express',
                          label: 'Express',
                          tooltip: t(
                            'modeExpressHelp',
                            'Door‑to‑door courier (DHL/UPS/FedEx) for urgent small parcels.'
                          ),
                        },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          className={`sino-simple-chip${
                            formData.mode === option.value ? ' sino-simple-chip--active' : ''
                          }`}
                          data-tooltip={option.tooltip}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              mode: prev.mode === option.value ? '' : option.value,
                            }))
                          }
                          aria-pressed={formData.mode === option.value ? 'true' : 'false'}
                          aria-label={`${option.label}${formData.mode === option.value ? ', selected' : ', not selected'}. ${option.tooltip}`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFormData((prev) => ({
                                ...prev,
                                mode: prev.mode === option.value ? '' : option.value,
                              }));
                            }
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sino-simple-form__fields sino-simple-form__fields--rows sino-simple-form__fields--m-top">
                  <div className="sino-simple-form__field">
                    <label className="sino-simple-form__label">
                      {t('incotermLabel', 'Trade terms (Incoterm)')}
                      <span className="sino-simple-form__label-hint">
                        {t('ifKnown', 'if known')}
                      </span>
                    </label>
                    <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
                      {[
                        {
                          value: 'EXW (Ex Work)',
                          label: 'EXW (Ex Work)',
                          tooltip: t(
                            'incotermEXWTooltip',
                            'Ex Works: You handle everything from the factory. We pick up at the supplier.'
                          ),
                        },
                        {
                          value: 'FOB (Free On Board)',
                          label: 'FOB (Free On Board)',
                          tooltip: t(
                            'incotermFOBTooltip',
                            'Free On Board: Supplier delivers to port, you handle shipping and destination costs.'
                          ),
                        },
                        {
                          value: 'CIF (Cost Insurance and Freight)',
                          label: 'CIF (Cost Insurance and Freight)',
                          tooltip: t(
                            'incotermCIFTooltip',
                            'Cost, Insurance & Freight: Supplier pays shipping to your port, you handle destination.'
                          ),
                        },
                        {
                          value: 'CFR (Cost & Freight)',
                          label: 'CFR (Cost & Freight)',
                          tooltip: t(
                            'incotermCFRTooltip',
                            'Cost and Freight: Supplier pays shipping to your port.'
                          ),
                        },
                        {
                          value: 'DAT (Delivery at Terminal)',
                          label: 'DAT (Delivery at Terminal)',
                          tooltip: t(
                            'incotermDATTooltip',
                            'Delivered At Terminal: Delivered at a named terminal at destination.'
                          ),
                        },
                        {
                          value: "I don't know yet",
                          label: "I don't know yet",
                          tooltip: t(
                            'incotermNotSureTooltip',
                            "No problem! We'll help you choose the best option based on your needs."
                          ),
                        },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          className={`sino-simple-chip${
                            formData.incoterm === option.value ? ' sino-simple-chip--active' : ''
                          }`}
                          data-tooltip={option.tooltip}
                          aria-pressed={formData.incoterm === option.value ? 'true' : 'false'}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              incoterm: prev.incoterm === option.value ? '' : option.value,
                            }))
                          }
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Shipping – Origin in China (substep) */}
                <h3 className="sino-simple-form__subsection-title">
                  {t('simpleStep2Title', 'Pickup in China')}
                </h3>

                <div className="sino-simple-form__fields sino-simple-form__fields--rows">
                  <div className="sino-simple-form__field sino-simple-form__field--primary">
                    <label className="sino-simple-form__label" htmlFor="city">
                      {t('originCity', 'City in China')}
                    </label>
                    <input
                      className="sino-simple-form__input"
                      type="text"
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={onChange}
                      placeholder={t('originCityPlaceholder', 'e.g. Shenzhen, Guangzhou…')}
                    />
                    <p className="sino-simple-form__help">
                      {t(
                        'originCityHelp',
                        'City is enough for now. You can skip the pickup details below if you prefer.'
                      )}
                    </p>
                  </div>

                  <div
                    className={`sino-simple-form__subsection${
                      showOriginDetails ? ' sino-simple-form__subsection--open' : ''
                    }`}
                  >
                    <button
                      type="button"
                      className="sino-simple-form__subsection-toggle"
                      onClick={() => setShowOriginDetails((prev) => !prev)}
                      aria-expanded={showOriginDetails}
                      aria-controls="origin-details-content"
                      aria-label={
                        showOriginDetails
                          ? t('collapseSection', 'Collapse origin details')
                          : t('expandSection', 'Expand origin details')
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setShowOriginDetails((prev) => !prev);
                        }
                      }}
                    >
                      <span className="sino-simple-form__subsection-label">
                        {t('originDetailsTitle', 'Advanced pickup details (optional)')}
                        <small>
                          {t(
                            'originDetailsSubtitle',
                            'Useful for door pickup but optional at this stage.'
                          )}
                        </small>
                      </span>
                      <span
                        className={`sino-simple-form__subsection-chevron${
                          showOriginDetails ? ' sino-simple-form__subsection-chevron--open' : ''
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    {showOriginDetails && (
                      <div
                        id="origin-details-content"
                        className="sino-simple-form__fields sino-simple-form__fields--rows"
                      >
                        <div className="sino-simple-form__field">
                          <label className="sino-simple-form__label">
                            {t('originLocationType', 'Pickup location type')}
                          </label>
                          <input
                            className="sino-simple-form__input"
                            type="text"
                            name="locationType"
                            value={formData.locationType}
                            onChange={onChange}
                            placeholder={t(
                              'originLocationTypePlaceholder',
                              'Factory, warehouse, port…'
                            )}
                          />
                        </div>

                        <div className="sino-simple-form__field">
                          <div className="sino-simple-form__chips">
                            <button
                              type="button"
                              className={`sino-simple-chip${
                                formData.locationType === 'unknown'
                                  ? ' sino-simple-chip--active'
                                  : ''
                              }`}
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  locationType: 'unknown',
                                }))
                              }
                              aria-pressed={formData.locationType === 'unknown' ? 'true' : 'false'}
                              aria-label={`${t('originLocationTypeUnknown', "I'm still discussing with my supplier")}${formData.locationType === 'unknown' ? ', selected' : ', not selected'}`}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  setFormData((prev) => ({
                                    ...prev,
                                    locationType: 'unknown',
                                  }));
                                }
                              }}
                            >
                              {t(
                                'originLocationTypeUnknown',
                                "I'm still discussing with my supplier"
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="sino-simple-form__field">
                          <label className="sino-simple-form__label">
                            {t('originZipCode', 'ZIP / postal code in China')}
                          </label>
                          <input
                            className="sino-simple-form__input"
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={onChange}
                            placeholder={t('originZipCodePlaceholder', 'e.g. 518000')}
                          />
                        </div>

                        <div className="sino-simple-form__field">
                          <label className="sino-simple-form__label">
                            {t('originPort', 'Port of loading')}
                            <span className="sino-simple-form__label-hint">
                              {t('ifKnown', 'if known')}
                            </span>
                          </label>
                          <input
                            className="sino-simple-form__input"
                            type="text"
                            name="origin"
                            value={formData.origin}
                            onChange={onChange}
                            placeholder={t(
                              'originPortPlaceholder',
                              'e.g. Shenzhen (Yantian), Ningbo…'
                            )}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Shipping from China – Step 2: Cargo details */}
          {currentStepId === 'shippingCargo' && shippingSelected && (
            <section className="sino-simple-form__section sino-simple-form__section--service-shipping">
              <h2 className="sino-simple-form__section-title">
                <span className="sino-simple-form__section-step">{`Step ${currentStepIndex + 1}`}</span>
                <span>{t('simpleStep3Title', 'Cargo details')}</span>
              </h2>

              <SimpleStepProgress
                stepId="shippingCargo"
                formData={formData}
                currentStepIndex={currentStepIndex}
                totalSteps={totalSteps}
                t={t}
              />

              <p className="sino-simple-form__hint">
                {t(
                  'simpleStep3Hint',
                  'A short description, an approximate weight and a rough number of cartons/pallets is enough for a first quote.'
                )}
              </p>
              <p className="sino-simple-form__hint sino-simple-form__hint--secondary">
                {t(
                  'simpleStep3ImpactHint',
                  'These 4 fields have the biggest impact on your rates: route, mode, total weight and when the goods are ready.'
                )}
              </p>

              <div className="sino-simple-form__fields sino-simple-form__fields--rows">
                <div className="sino-simple-form__field sino-simple-form__field--primary">
                  <label className="sino-simple-form__label" htmlFor="goodsDescription">
                    {t('goodsDescription', 'What are you shipping?')}
                  </label>
                  <input
                    className="sino-simple-form__input"
                    type="text"
                    name="goodsDescription"
                    id="goodsDescription"
                    value={formData.goodsDescription}
                    onChange={onChange}
                    placeholder={t(
                      'goodsDescriptionPlaceholder',
                      'e.g. electronics, furniture, clothing…'
                    )}
                  />
                </div>

                <div
                  className={`sino-simple-form__field sino-simple-form__field--primary${
                    fieldTouched.totalWeight && fieldErrors.totalWeight
                      ? ' sino-simple-form__field--error'
                      : ''
                  }${
                    fieldTouched.totalWeight &&
                    !fieldErrors.totalWeight &&
                    isFilled(formData.totalWeight)
                      ? ' sino-simple-form__field--success'
                      : ''
                  }`}
                >
                  <label className="sino-simple-form__label" htmlFor="totalWeight">
                    {t('totalWeight', 'Total Weight (kg)')}
                    <span className="sino-simple-form__required" aria-label="required">
                      *
                    </span>
                  </label>
                  <div className="sino-simple-form__field-wrapper">
                    <input
                      className={`sino-simple-form__input${
                        fieldErrors.totalWeight ? ' sino-simple-form__input--error' : ''
                      }${
                        fieldTouched.totalWeight &&
                        !fieldErrors.totalWeight &&
                        isFilled(formData.totalWeight)
                          ? ' sino-simple-form__input--success'
                          : ''
                      }`}
                      type="text"
                      id="totalWeight"
                      name="totalWeight"
                      ref={totalWeightRef}
                      value={formData.totalWeight}
                      onChange={(event) => {
                        updateCargoField('totalWeight', event.target.value);
                        // Clear error when user starts typing
                        if (fieldErrors.totalWeight) {
                          setFieldErrors((prev) => {
                            const newErrors = { ...prev };
                            delete newErrors.totalWeight;
                            return newErrors;
                          });
                        }
                      }}
                      onBlur={() => onBlur('totalWeight', formData.totalWeight)}
                      placeholder={t('totalWeightPlaceholder', 'e.g. 1 200')}
                      aria-label={t('totalWeight', 'Estimated total weight')}
                      aria-describedby={
                        fieldErrors.totalWeight
                          ? 'totalWeight-error'
                          : fieldTouched.totalWeight &&
                              !fieldErrors.totalWeight &&
                              isFilled(formData.totalWeight)
                            ? 'totalWeight-success'
                            : undefined
                      }
                      aria-invalid={fieldErrors.totalWeight ? 'true' : 'false'}
                      aria-required="true"
                    />
                    {fieldTouched.totalWeight && (
                      <>
                        {fieldErrors.totalWeight && (
                          <span
                            className="sino-simple-form__field-icon sino-simple-form__field-icon--error"
                            aria-hidden="true"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <line
                                x1="12"
                                y1="8"
                                x2="12"
                                y2="12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <line
                                x1="12"
                                y1="16"
                                x2="12.01"
                                y2="16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        )}
                        {!fieldErrors.totalWeight && isFilled(formData.totalWeight) && (
                          <span
                            className="sino-simple-form__field-icon sino-simple-form__field-icon--success"
                            aria-hidden="true"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M8 12l2 2 4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  {fieldErrors.totalWeight && (
                    <p
                      id="totalWeight-error"
                      className="sino-simple-form__field-error"
                      role="alert"
                      aria-live="polite"
                    >
                      {fieldErrors.totalWeight}
                    </p>
                  )}
                  {fieldTouched.totalWeight &&
                    !fieldErrors.totalWeight &&
                    isFilled(formData.totalWeight) && (
                      <p
                        id="totalWeight-success"
                        className="sino-simple-form__sr-only"
                        aria-live="polite"
                      >
                        {t('fieldValid', 'Field is valid')}
                      </p>
                    )}
                  <p className="sino-simple-form__help">
                    {t(
                      'totalWeightHelp',
                      'Rough estimate is OK. We refine it together before booking.'
                    )}
                  </p>
                </div>

                <div className="sino-simple-form__field">
                  <label
                    className={`sino-simple-form__label${
                      unitsUnknown ? ' sino-simple-form__label--muted' : ''
                    }`}
                    htmlFor="numberOfUnits"
                  >
                    {t('numberOfUnits', 'Number of cartons / pallets')}
                  </label>
                  <div className="sino-simple-form__field-input-group">
                    <input
                      className="sino-simple-form__input"
                      type="number"
                      min={1}
                      id="numberOfUnits"
                      value={formData.numberOfUnits}
                      onChange={(event) => {
                        setUnitsUnknown(false);
                        updateCargoField('numberOfUnits', Number(event.target.value));
                      }}
                      placeholder={t('numberOfUnitsPlaceholder', 'e.g. 10 pallets')}
                    />
                    <div className="sino-simple-form__chips">
                      <button
                        type="button"
                        className={`sino-simple-chip${unitsUnknown ? ' sino-simple-chip--active' : ''}`}
                        aria-pressed={unitsUnknown ? 'true' : 'false'}
                        onClick={() => {
                          setUnitsUnknown(true);
                          updateCargoField('numberOfUnits', 0);
                        }}
                      >
                        {t('numberOfUnitsUnknown', "I don't know the exact number yet")}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="sino-simple-form__field">
                  <label
                    className={`sino-simple-form__label${
                      goodsValueUnknown ? ' sino-simple-form__label--muted' : ''
                    }`}
                    htmlFor="goodsValue"
                  >
                    {t('goodsValue', 'Estimated cargo value')}
                  </label>
                  <div className="sino-simple-form__field-input-group">
                    <input
                      className="sino-simple-form__input"
                      type="text"
                      name="goodsValue"
                      id="goodsValue"
                      value={formData.goodsValue}
                      onChange={(event) => {
                        setGoodsValueUnknown(false);
                        onChange(event);
                      }}
                      placeholder={t('goodsValuePlaceholder', 'e.g. 25 000')}
                    />
                    <div className="sino-simple-form__chips">
                      <button
                        type="button"
                        className={`sino-simple-chip${
                          goodsValueUnknown ? ' sino-simple-chip--active' : ''
                        }`}
                        aria-pressed={goodsValueUnknown ? 'true' : 'false'}
                        onClick={() => {
                          setGoodsValueUnknown(true);
                          setFormData((prev) => ({
                            ...prev,
                            goodsValue: '',
                          }));
                        }}
                      >
                        {t('goodsValueUnknown', "I don't know the value yet")}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="sino-simple-form__field">
                  <label className="sino-simple-form__label" htmlFor="goodsCurrency">
                    {t('goodsCurrency', 'Currency')}
                  </label>
                  <input
                    className="sino-simple-form__input"
                    type="text"
                    name="goodsCurrency"
                    id="goodsCurrency"
                    value={formData.goodsCurrency}
                    onChange={onChange}
                    placeholder={t('goodsCurrencyPlaceholder', 'USD, EUR…')}
                  />
                </div>

                <div className="sino-simple-form__field sino-simple-form__field--primary">
                  <label className="sino-simple-form__label">
                    {t('areGoodsReady', 'Are the goods ready?')}
                  </label>
                  <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
                    {[
                      { value: 'yes', label: t('goodsReadyNow', 'Ready now') },
                      { value: 'no_in_1_week', label: t('goodsReady1Week', 'In ~1 week') },
                      { value: 'no_in_2_weeks', label: t('goodsReady2Weeks', 'In ~2 weeks') },
                      { value: 'no_in_1_month', label: t('goodsReady1Month', 'In ~1 month') },
                      { value: 'no_date_set', label: t('goodsReadyNoDate', 'No date set yet') },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`sino-simple-chip${
                          formData.areGoodsReady === option.value ? ' sino-simple-chip--active' : ''
                        }`}
                        aria-pressed={formData.areGoodsReady === option.value ? 'true' : 'false'}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            areGoodsReady: prev.areGoodsReady === option.value ? '' : option.value,
                          }))
                        }
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sino-simple-form__field">
                  <label className="sino-simple-form__label">
                    {t('annualVolumeLabel', 'Rough annual volume from China')}
                    <span className="sino-simple-form__label-hint">{t('ifKnown', 'if known')}</span>
                  </label>
                  <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
                    {[
                      {
                        value: '50 ~ 500',
                        label: '50 ~ 500',
                      },
                      {
                        value: '501 ~ 1000',
                        label: '501 ~ 1000',
                      },
                      {
                        value: '1001 ~ 5000',
                        label: '1001 ~ 5000',
                      },
                      {
                        value: '5001+',
                        label: '5001+',
                      },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`sino-simple-chip${
                          formData.annualVolume === option.value ? ' sino-simple-chip--active' : ''
                        }`}
                        aria-pressed={formData.annualVolume === option.value ? 'true' : 'false'}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            annualVolume: prev.annualVolume === option.value ? '' : option.value,
                          }))
                        }
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sino-simple-form__field">
                  <label className="sino-simple-form__label">
                    {t('isPersonalOrHazardous', 'Personal effects or hazardous goods?')}
                  </label>
                  <div className="sino-simple-form__chips">
                    {[
                      {
                        value: true,
                        label: t('personalOrHazardousYes', 'Yes, personal or hazardous'),
                      },
                      {
                        value: false,
                        label: t('personalOrHazardousNo', 'No, standard commercial goods'),
                      },
                    ].map((option) => (
                      <button
                        key={String(option.value)}
                        type="button"
                        className={`sino-simple-chip${
                          formData.isPersonalOrHazardous === option.value
                            ? ' sino-simple-chip--active'
                            : ''
                        }`}
                        aria-pressed={
                          formData.isPersonalOrHazardous === option.value ? 'true' : 'false'
                        }
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            isPersonalOrHazardous: option.value,
                          }))
                        }
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <p className="sino-simple-form__help">
                    {t(
                      'isPersonalOrHazardousHelp',
                      'This only helps us pick the right specialist on our side – it does not change your pricing automatically.'
                    )}
                  </p>
                </div>

                {/* Advanced cargo details (optional) */}
                <div
                  className={`sino-simple-form__subsection${
                    showAdvancedDetails ? ' sino-simple-form__subsection--open' : ''
                  }`}
                >
                  <button
                    type="button"
                    className="sino-simple-form__subsection-toggle"
                    onClick={() => setShowAdvancedDetails((prev) => !prev)}
                    aria-expanded={showAdvancedDetails}
                    aria-controls="advanced-details-content"
                    aria-label={
                      showAdvancedDetails
                        ? t('collapseSection', 'Collapse advanced cargo details')
                        : t('expandSection', 'Expand advanced cargo details')
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setShowAdvancedDetails((prev) => !prev);
                      }
                    }}
                  >
                    <span className="sino-simple-form__subsection-label">
                      {t('simpleStep4Title', 'Advanced cargo details (optional)')}
                      <small>
                        {t(
                          'simpleStep4Subtitle',
                          'Dimensions and remarks help us fine-tune the quote but are not mandatory.'
                        )}
                      </small>
                    </span>
                    <span
                      className={`sino-simple-form__subsection-chevron${
                        showAdvancedDetails ? ' sino-simple-form__subsection-chevron--open' : ''
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {showAdvancedDetails && (
                    <div
                      id="advanced-details-content"
                      className="sino-simple-form__fields sino-simple-form__fields--rows"
                    >
                      <div className="sino-simple-form__field">
                        <label
                          className={`sino-simple-form__label${
                            dimensionsUnknown ? ' sino-simple-form__label--muted' : ''
                          }`}
                        >
                          {t('dimensions', 'Approximate dimensions per unit')}
                        </label>
                        <div className="sino-simple-form__fields sino-simple-form__fields--inline">
                          <input
                            className="sino-simple-form__input"
                            type="text"
                            value={formData.dimensions.length}
                            onChange={(event) =>
                              updateCargoField('dimensions', {
                                ...formData.dimensions,
                                length: event.target.value,
                              })
                            }
                            placeholder={t('lengthPlaceholder', 'L (cm)')}
                          />
                          <input
                            className="sino-simple-form__input"
                            type="text"
                            value={formData.dimensions.width}
                            onChange={(event) =>
                              updateCargoField('dimensions', {
                                ...formData.dimensions,
                                width: event.target.value,
                              })
                            }
                            placeholder={t('widthPlaceholder', 'W (cm)')}
                          />
                          <input
                            className="sino-simple-form__input"
                            type="text"
                            value={formData.dimensions.height}
                            onChange={(event) =>
                              updateCargoField('dimensions', {
                                ...formData.dimensions,
                                height: event.target.value,
                              })
                            }
                            placeholder={t('heightPlaceholder', 'H (cm)')}
                          />
                        </div>

                        <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
                          <button
                            type="button"
                            className={`sino-simple-chip${
                              dimensionsUnknown ? ' sino-simple-chip--active' : ''
                            }`}
                            aria-pressed={dimensionsUnknown ? 'true' : 'false'}
                            onClick={() => {
                              setDimensionsUnknown(true);
                              updateCargoField('dimensions', { length: '', width: '', height: '' });
                            }}
                          >
                            {t('dimensionsUnknown', "I don't know the exact dimensions yet")}
                          </button>
                        </div>
                      </div>

                      <div className="sino-simple-form__field">
                        <label className="sino-simple-form__label">
                          {t('weightPerUnit', 'Weight per unit')}
                          <span className="sino-simple-form__label-hint">
                            {t('ifKnown', 'if known')}
                          </span>
                        </label>
                        <input
                          className="sino-simple-form__input"
                          type="text"
                          value={formData.weightPerUnit}
                          onChange={(event) => {
                            updateCargoField('weightPerUnit', event.target.value);
                          }}
                          placeholder={t('weightPerUnitPlaceholder', 'e.g. 25 kg per pallet')}
                        />
                        <p className="sino-simple-form__help">
                          {t(
                            'weightPerUnitHelp',
                            'If you know the weight per unit, we can calculate the total weight automatically.'
                          )}
                        </p>
                      </div>

                      {/* Cargo Calculations */}
                      <SimpleCargoCalculations
                        formData={formData}
                        setFormData={setFormData}
                        t={t}
                      />

                      <div className="sino-simple-form__field">
                        <label className="sino-simple-form__label">
                          {t('remarks', 'Anything we should know?')}
                        </label>
                        <input
                          className="sino-simple-form__input"
                          type="text"
                          name="remarks"
                          value={formData.remarks}
                          onChange={onChange}
                          placeholder={t(
                            'remarksPlaceholder',
                            'Fragile goods, specific deadlines, preferred routing…'
                          )}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Final step – Contact & confirmation */}
          {currentStepId === 'contact' && (
            <>
              <SimpleContactSection
                formData={formData}
                setFormData={setFormData}
                t={t}
                isFilled={isFilled}
                onChange={onChange}
                onBlur={onBlur}
                fieldErrors={fieldErrors}
                fieldTouched={fieldTouched}
                firstNameRef={firstNameRef}
                emailRef={emailRef}
                phoneRef={phoneRef}
                stepLabel={`Step ${currentStepIndex + 1}`}
                currentStepIndex={currentStepIndex}
                totalSteps={totalSteps}
              />

              {/* Simple footer CTA */}
              <SimpleFooterSection
                formData={formData}
                t={t}
                selectedServiceLabels={selectedServiceLabels}
                submitError={submitError}
                setSubmitError={setSubmitError}
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
                scrollToFirstError={scrollToFirstError}
                onSubmissionSuccess={handleSubmissionSuccess}
                setFieldErrors={setFieldErrors}
                setFieldTouched={setFieldTouched}
                orderedSteps={orderedSteps}
                onEditStep={(stepIndex) => {
                  setCurrentStepIndex(stepIndex);
                  if (typeof window !== 'undefined') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              />
            </>
          )}
        </div>
        {/* End step content */}

        {/* Navigation - afficher sur toutes les étapes */}
        <SimpleStepNavigation
          key={`nav-${totalSteps}-${currentStepIndex}-${JSON.stringify(formData.servicesRequested)}`}
          currentStep={currentStepIndex}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          orderedSteps={orderedSteps}
          formData={formData}
          t={t}
        />
      </main>
    </div>
  );
};

export default SimpleQuoteForm;
