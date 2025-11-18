import type { FC, ChangeEvent } from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import { useQuoteForm } from '@/features/lead/context/useQuoteForm';
import SimpleServicesSection from './SimpleServicesSection';
import SimpleSourcingSection from './SimpleSourcingSection';
import SimpleWarehousingSection from './SimpleWarehousingSection';
import SimpleDropshippingSection from './SimpleDropshippingSection';
import SimpleQcSection from './SimpleQcSection';
import SimpleChinaVisitSection from './SimpleChinaVisitSection';
import SimpleContactSection from './SimpleContactSection';
import SimpleFooterSection from './SimpleFooterSection';
import SimpleConfirmationSection from './SimpleConfirmationSection';
import SimpleStepNavigation from './SimpleStepNavigation';
import SimpleStepProgress from './SimpleStepProgress';
import SimpleAutocomplete, { createCountryOptions, createCityOptions } from './SimpleAutocomplete';
import SimpleCargoCalculations from './SimpleCargoCalculations';
import SimpleSocialProofWidget from './SimpleSocialProofWidget';
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

/**
 * SimpleQuoteForm v2 – initial skeleton
 *
 * Ultra‑lightweight form used to validate:
 * - integration with the existing QuoteForm context (useQuoteForm)
 * - CSS scoping through .sino-simple-form* classes
 * - wiring with the standalone simple entry (window.SinoSimpleForm)
 */
const SimpleQuoteForm: FC = () => {
  const { formData, setFormData, handleInputChange, getText } = useQuoteForm();

  const [goodsValueUnknown, setGoodsValueUnknown] = useState(false);
  const [dimensionsUnknown, setDimensionsUnknown] = useState(false);
  const [unitsUnknown, setUnitsUnknown] = useState(false);
  const [showDestinationDetails, setShowDestinationDetails] = useState(false);
  const [showOriginDetails, setShowOriginDetails] = useState(false);
  const [showAdvancedDetails, setShowAdvancedDetails] = useState(false);
  const [showWarehousingAdvanced, setShowWarehousingAdvanced] = useState(false);
  const [showDropshippingAdvanced, setShowDropshippingAdvanced] = useState(false);
  const [showQcAdvanced, setShowQcAdvanced] = useState(false);
  const [showChinaVisitLogistics, setShowChinaVisitLogistics] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [fieldTouched, setFieldTouched] = useState<Record<string, boolean>>({});

  // Memoize country and city options
  const countryOptions = useMemo(() => createCountryOptions(), []);
  const cityOptions = useMemo(() => createCityOptions(formData.country), [formData.country]);

  const countryRef = useRef<HTMLInputElement | null>(null);
  const destCityRef = useRef<HTMLInputElement | null>(null);
  const totalWeightRef = useRef<HTMLInputElement | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  const scrollToFirstError = (): void => {
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
  };

  const isFilled = (value: string | undefined | null): boolean =>
    typeof value === 'string' && value.trim().length > 0;

  const t = (key: string, fallback: string): string => getText(key, fallback);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    handleInputChange(event);
    // Clear error when user starts typing
    const fieldName = event.target.name;
    if (fieldErrors[fieldName]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }

    // For country autocomplete, the value is already set by the component
  };

  // Validate field on blur
  const onBlur = (fieldName: string, value: string | undefined | null): void => {
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
    } else {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const shippingSelected =
    formData.servicesRequested?.shipping === undefined ? true : formData.servicesRequested.shipping;

  const selectedServiceLabels: string[] = (
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

  const servicesCount = selectedServiceLabels.length;
  const shippingOnly =
    servicesCount === 1 && formData.servicesRequested.shipping && !formData.servicesRequested.other;

  type StepId =
    | 'services'
    | 'shippingRoute'
    | 'shippingCargo'
    | 'sourcing'
    | 'warehousing'
    | 'dropshipping'
    | 'qc'
    | 'chinaVisit'
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
    // Calculer shippingSelected directement dans le useMemo pour être réactif
    const isShippingSelected =
      servicesRequested.shipping === undefined ? true : servicesRequested.shipping;
    if (isShippingSelected) {
      steps.push('shippingRoute');
      steps.push('shippingCargo');
    }

    // Contact en dernier
    steps.push('contact');

    return steps;
  }, [formData.servicesRequested]);

  const totalSteps = useMemo(() => orderedSteps.length, [orderedSteps]);
  const currentStepId = orderedSteps[currentStepIndex] || 'services';
  const isLastStep = currentStepIndex === totalSteps - 1;
  const isFirstStep = currentStepIndex === 0;

  // Fonction pour passer à l'étape suivante
  const handleNext = (): void => {
    // Valider l'étape actuelle avant de permettre la navigation
    if (!isStepComplete(currentStepId, formData)) {
      // Valider tous les champs de l'étape et marquer comme "touched"
      const stepErrors = validateStepFields(currentStepId, formData);

      // Mettre à jour les erreurs
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        Object.entries(stepErrors).forEach(([fieldName, result]) => {
          if (!result.valid && result.error) {
            newErrors[fieldName] = result.error;
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

    // Si l'étape est complète, permettre la navigation
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      // Scroll vers le haut du formulaire
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Fonction pour revenir à l'étape précédente
  const handlePrevious = (): void => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

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

  // Lightweight draft persistence so the user doesn't lose everything if the tab closes.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem('sinoSimpleFormDraft');
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<typeof formData>;
      setFormData((prev) => ({
        ...prev,
        ...parsed,
      }));
    } catch {
      // ignore corrupted drafts
    }
    // we only want this to run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
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
        loads: formData.loads,
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
      };
      window.localStorage.setItem('sinoSimpleFormDraft', JSON.stringify(payload));
    } catch {
      // ignore quota / serialization issues
    }
  }, [formData, setFormData]);

  const updateFirstLoad = (field: keyof (typeof formData.loads)[number], value: unknown): void => {
    setFormData((prev) => {
      const [firstLoad, ...rest] = prev.loads;
      const updatedFirst = { ...firstLoad, [field]: value };
      return { ...prev, loads: [updatedFirst, ...rest] };
    });
  };

  // Handle submission success
  const handleSubmissionSuccess = (id: string): void => {
    setSubmissionId(id);
    // Clear localStorage draft on successful submission
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem('sinoSimpleFormDraft');
      } catch {
        // ignore
      }
    }
  };

  // Handle start new request
  const handleStartNew = (): void => {
    setSubmissionId(null);
    setCurrentStepIndex(0);
    setSubmitError(null);
    // Optionally reset form data here if needed
    // setFormData(initialFormData);
  };

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
      {/* Social Proof Widget - visible during form filling */}
      {!submissionId && <SimpleSocialProofWidget t={t} />}

      {/* Afficher seulement l'étape actuelle */}
      {currentStepId === 'services' && (
        <SimpleServicesSection
          formData={formData}
          setFormData={setFormData}
          t={t}
          stepLabel={`Step ${currentStepIndex + 1}`}
          shippingOnly={shippingOnly}
        />
      )}

      {currentStepId === 'sourcing' && (
        <SimpleSourcingSection
          formData={formData}
          setFormData={setFormData}
          t={t}
          stepLabel={`Step ${currentStepIndex + 1}`}
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
              <div className="sino-simple-form__field sino-simple-form__field--primary">
                <label className="sino-simple-form__label" htmlFor="country">
                  {t('destinationCountry', 'Destination country')}
                  <span className="sino-simple-form__required">*</span>
                </label>
                <div className="sino-simple-form__field-wrapper">
                  <SimpleAutocomplete
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={onChange}
                    onBlur={() => onBlur('country', formData.country)}
                    onSelect={(value) => {
                      // Value is already set by onChange, but we can do additional processing here if needed
                      setFormData((prev) => ({ ...prev, country: value }));
                    }}
                    placeholder={t('destinationCountryPlaceholder', 'France, USA, Canada…')}
                    options={countryOptions}
                    inputRef={countryRef}
                    error={fieldErrors.country}
                    touched={fieldTouched.country}
                    isValid={!fieldErrors.country && isFilled(formData.country)}
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
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
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
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
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
                  <p className="sino-simple-form__field-error" role="alert">
                    {fieldErrors.country}
                  </p>
                )}
              </div>

              <div className="sino-simple-form__field sino-simple-form__field--primary">
                <label className="sino-simple-form__label" htmlFor="destCity">
                  {t('destinationCityOrPort', 'City or port')}
                  <span className="sino-simple-form__required">*</span>
                </label>
                <div className="sino-simple-form__field-wrapper">
                  <SimpleAutocomplete
                    id="destCity"
                    name="destCity"
                    value={formData.destCity}
                    onChange={onChange}
                    onBlur={() => onBlur('destCity', formData.destCity)}
                    placeholder={t('destinationCityPlaceholder', 'e.g. Paris, Le Havre…')}
                    options={cityOptions}
                    inputRef={destCityRef}
                    error={fieldErrors.destCity}
                    touched={fieldTouched.destCity}
                    isValid={!fieldErrors.destCity && isFilled(formData.destCity)}
                    maxResults={8}
                  />
                  {fieldTouched.destCity && (
                    <>
                      {fieldErrors.destCity && (
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
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
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
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
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
                  <p className="sino-simple-form__field-error" role="alert">
                    {fieldErrors.destCity}
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
                <div className="sino-simple-form__fields sino-simple-form__fields--rows">
                  <div className="sino-simple-form__field">
                    <label className="sino-simple-form__label">
                      {t('destinationLocationType', 'Delivery location')}
                      <span className="sino-simple-form__optional">Optional</span>
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
                      <span className="sino-simple-form__optional">Optional</span>
                    </label>
                    <input
                      className="sino-simple-form__input"
                      type="text"
                      name="destZipCode"
                      value={formData.destZipCode}
                      onChange={onChange}
                      placeholder={t('destinationZipCodePlaceholder', 'Optional')}
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
                      label: t('modeSea', 'Sea'),
                      tooltip: t(
                        'modeSeaHelp',
                        'Best for large volumes and lower cost when you have a few weeks.'
                      ),
                    },
                    {
                      value: 'Air',
                      label: t('modeAir', 'Air'),
                      tooltip: t(
                        'modeAirHelp',
                        'Faster than sea, ideal for smaller, time-sensitive shipments.'
                      ),
                    },
                    {
                      value: 'Rail',
                      label: t('modeRail', 'Rail'),
                      tooltip: t(
                        'modeRailHelp',
                        'Balanced option Europe–China: faster than sea, cheaper than air.'
                      ),
                    },
                    {
                      value: 'Express',
                      label: t('modeExpress', 'Express'),
                      tooltip: t(
                        'modeExpressHelp',
                        'Door‑to‑door courier (DHL/UPS/FedEx) for urgent small parcels.'
                      ),
                    },
                    {
                      value: 'not_sure',
                      label: t('modeNotSure', "I'm not sure"),
                      tooltip: t(
                        'modeNotSureHelp',
                        'Let SINO recommend the best option based on your route and cargo.'
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
                          mode: option.value,
                        }))
                      }
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
                  {t('incotermLabel', 'Trade terms (Incoterm, if you know it)')}
                  <span className="sino-simple-form__optional">
                    {t('incotermOptional', 'Optional – helps us understand who handles what')}
                  </span>
                </label>
                <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
                  {[
                    { value: 'EXW', label: 'EXW' },
                    { value: 'FOB', label: 'FOB' },
                    { value: 'CIF', label: 'CIF' },
                    { value: 'DAP', label: 'DAP' },
                    { value: 'DDP', label: 'DDP' },
                    { value: 'not_sure', label: t('incotermNotSure', "I'm not sure yet") },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`sino-simple-chip${
                        formData.incoterm === option.value ? ' sino-simple-chip--active' : ''
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          incoterm: option.value,
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
                  <div className="sino-simple-form__fields sino-simple-form__fields--rows">
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
                            formData.locationType === 'unknown' ? ' sino-simple-chip--active' : ''
                          }`}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              locationType: 'unknown',
                            }))
                          }
                        >
                          {t('originLocationTypeUnknown', "I'm still discussing with my supplier")}
                        </button>
                      </div>
                    </div>

                    <div className="sino-simple-form__field">
                      <label className="sino-simple-form__label">
                        {t('originZipCode', 'ZIP / postal code in China')}
                        <span className="sino-simple-form__optional">Optional</span>
                      </label>
                      <input
                        className="sino-simple-form__input"
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={onChange}
                        placeholder={t('originZipCodePlaceholder', 'Optional')}
                      />
                    </div>

                    <div className="sino-simple-form__field">
                      <label className="sino-simple-form__label">
                        {t('originPort', 'Port of loading (if known)')}
                        <span className="sino-simple-form__optional">Optional</span>
                      </label>
                      <input
                        className="sino-simple-form__input"
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={onChange}
                        placeholder={t('originPortPlaceholder', 'e.g. Shenzhen (Yantian), Ningbo…')}
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

            <div className="sino-simple-form__field sino-simple-form__field--primary">
              <label className="sino-simple-form__label" htmlFor="totalWeight">
                {t('totalWeight', 'Estimated total weight')}
                <span className="sino-simple-form__required">*</span>
              </label>
              <div className="sino-simple-form__field-wrapper">
                <input
                  className={`sino-simple-form__input${
                    fieldErrors.totalWeight ? ' sino-simple-form__input--error' : ''
                  }${
                    fieldTouched.totalWeight &&
                    !fieldErrors.totalWeight &&
                    isFilled(formData.loads[0]?.totalWeight ?? '')
                      ? ' sino-simple-form__input--success'
                      : ''
                  }`}
                  type="text"
                  id="totalWeight"
                  ref={totalWeightRef}
                  value={formData.loads[0]?.totalWeight ?? ''}
                  onChange={(event) => {
                    updateFirstLoad('totalWeight', event.target.value);
                    // Clear error when user starts typing
                    if (fieldErrors.totalWeight) {
                      setFieldErrors((prev) => {
                        const newErrors = { ...prev };
                        delete newErrors.totalWeight;
                        return newErrors;
                      });
                    }
                  }}
                  onBlur={() => onBlur('totalWeight', formData.loads[0]?.totalWeight)}
                  placeholder={t('totalWeightPlaceholder', 'e.g. 1 200')}
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
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
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
                    {!fieldErrors.totalWeight && isFilled(formData.loads[0]?.totalWeight ?? '') && (
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
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
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
                <p className="sino-simple-form__field-error" role="alert">
                  {fieldErrors.totalWeight}
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
                <span className="sino-simple-form__optional">Optional</span>
              </label>
              <div className="sino-simple-form__field-input-group">
                <input
                  className="sino-simple-form__input"
                  type="number"
                  min={1}
                  id="numberOfUnits"
                  value={formData.loads[0]?.numberOfUnits ?? 1}
                  onChange={(event) => {
                    setUnitsUnknown(false);
                    updateFirstLoad('numberOfUnits', Number(event.target.value));
                  }}
                  placeholder={t('numberOfUnitsPlaceholder', 'e.g. 10 pallets')}
                />
                <div className="sino-simple-form__chips">
                  <button
                    type="button"
                    className={`sino-simple-chip${unitsUnknown ? ' sino-simple-chip--active' : ''}`}
                    onClick={() => {
                      setUnitsUnknown(true);
                      updateFirstLoad('numberOfUnits', 0);
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
                <span className="sino-simple-form__optional">Optional</span>
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
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        areGoodsReady: option.value,
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
                <span className="sino-simple-form__optional">
                  {t('annualVolumeOptional', 'Optional – helps us recommend the right setup')}
                </span>
              </label>
              <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
                {[
                  {
                    value: 'one_shot',
                    label: t('annualVolumeOneShot', 'One shipment / test project'),
                  },
                  {
                    value: 'few_per_year',
                    label: t('annualVolumeFewPerYear', 'A few shipments per year'),
                  },
                  {
                    value: 'regular_program',
                    label: t('annualVolumeRegular', 'Regular shipping program'),
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`sino-simple-chip${
                      formData.annualVolume === option.value ? ' sino-simple-chip--active' : ''
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        annualVolume: option.value,
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
                <div className="sino-simple-form__fields sino-simple-form__fields--rows">
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
                        value={formData.loads[0]?.dimensions.length ?? ''}
                        onChange={(event) =>
                          updateFirstLoad('dimensions', {
                            ...formData.loads[0]?.dimensions,
                            length: event.target.value,
                          })
                        }
                        placeholder={t('lengthPlaceholder', 'L (cm)')}
                      />
                      <input
                        className="sino-simple-form__input"
                        type="text"
                        value={formData.loads[0]?.dimensions.width ?? ''}
                        onChange={(event) =>
                          updateFirstLoad('dimensions', {
                            ...formData.loads[0]?.dimensions,
                            width: event.target.value,
                          })
                        }
                        placeholder={t('widthPlaceholder', 'W (cm)')}
                      />
                      <input
                        className="sino-simple-form__input"
                        type="text"
                        value={formData.loads[0]?.dimensions.height ?? ''}
                        onChange={(event) =>
                          updateFirstLoad('dimensions', {
                            ...formData.loads[0]?.dimensions,
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
                        onClick={() => {
                          setDimensionsUnknown(true);
                          updateFirstLoad('dimensions', { length: '', width: '', height: '' });
                        }}
                      >
                        {t('dimensionsUnknown', "I don't know the exact dimensions yet")}
                      </button>
                    </div>
                  </div>

                  <div className="sino-simple-form__field">
                    <label className="sino-simple-form__label">
                      {t('weightPerUnit', 'Weight per unit (optional)')}
                    </label>
                    <input
                      className="sino-simple-form__input"
                      type="text"
                      value={formData.loads[0]?.weightPerUnit ?? ''}
                      onChange={(event) => {
                        updateFirstLoad('weightPerUnit', event.target.value);
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
                  <SimpleCargoCalculations formData={formData} setFormData={setFormData} t={t} />

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

      {/* Navigation - afficher sur toutes les étapes */}
      <SimpleStepNavigation
        key={`nav-${totalSteps}-${currentStepIndex}-${JSON.stringify(formData.servicesRequested)}`}
        currentStep={currentStepIndex}
        totalSteps={totalSteps}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        t={t}
      />
    </div>
  );
};

export default SimpleQuoteForm;
