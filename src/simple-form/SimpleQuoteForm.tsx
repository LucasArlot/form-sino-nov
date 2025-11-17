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
import SimpleStepNavigation from './SimpleStepNavigation';

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
    | 'shipping'
    | 'sourcing'
    | 'warehousing'
    | 'dropshipping'
    | 'qc'
    | 'chinaVisit'
    | 'contact';

  // Fonction pour obtenir toutes les étapes dans l'ordre - recalculée à chaque changement de services
  const orderedSteps = useMemo((): StepId[] => {
    const steps: StepId[] = ['services'];

    // Ajouter les services sélectionnés dans l'ordre
    if (formData.servicesRequested?.sourcing) steps.push('sourcing');
    if (formData.servicesRequested?.warehousing) steps.push('warehousing');
    if (formData.servicesRequested?.dropshipping) steps.push('dropshipping');
    if (formData.servicesRequested?.qc) steps.push('qc');
    if (formData.servicesRequested?.chinaVisits) steps.push('chinaVisit');

    // Shipping vient après
    if (shippingSelected) steps.push('shipping');

    // Contact en dernier
    steps.push('contact');

    return steps;
  }, [
    formData.servicesRequested?.sourcing,
    formData.servicesRequested?.warehousing,
    formData.servicesRequested?.dropshipping,
    formData.servicesRequested?.qc,
    formData.servicesRequested?.chinaVisits,
    shippingSelected,
  ]);

  const totalSteps = useMemo(() => orderedSteps.length, [orderedSteps]);
  const currentStepId = orderedSteps[currentStepIndex] || 'services';
  const isLastStep = currentStepIndex === totalSteps - 1;
  const isFirstStep = currentStepIndex === 0;

  // Fonction pour passer à l'étape suivante
  const handleNext = (): void => {
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
    // Si on est sur une étape qui n'existe plus, revenir à la première
    if (currentStepIndex >= totalSteps) {
      setCurrentStepIndex(0);
    }
    // Si l'étape actuelle n'existe plus dans la nouvelle liste, revenir à services
    const currentId = orderedSteps[currentStepIndex];
    if (!currentId || currentId !== currentStepId) {
      // Trouver l'index de l'étape actuelle dans la nouvelle liste, ou revenir à 0
      const newIndex = orderedSteps.indexOf(currentStepId);
      if (newIndex >= 0) {
        setCurrentStepIndex(newIndex);
      } else if (currentStepIndex > 0) {
        setCurrentStepIndex(0);
      }
    }
  }, [formData.servicesRequested, totalSteps, orderedSteps, currentStepId, currentStepIndex]);

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

  return (
    <div className="sino-simple-form">
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

      {/* Shipping from China – comes after service-specific steps */}
      {currentStepId === 'shipping' && shippingSelected && (
        <>
          <section className="sino-simple-form__section sino-simple-form__section--service-shipping">
            <h2 className="sino-simple-form__section-title">
              <span className="sino-simple-form__section-step">
                {`Step ${currentStepIndex + 1}`}
              </span>
              <span>{t('shippingFromChinaTitle', 'Shipping from China')}</span>
            </h2>

            <h3 className="sino-simple-form__subsection-title">
              {t('simpleStep1Title', 'Destination & mode')}
            </h3>

            <div className="sino-simple-form__fields">
              <div
                className={`sino-simple-form__field sino-simple-form__field--primary${
                  isFilled(formData.country) ? ' sino-simple-form__field--filled' : ''
                }`}
              >
                <label className="sino-simple-form__label" htmlFor="country">
                  {t('destinationCountry', 'Destination country')}
                  <span className="sino-simple-form__required">*</span>
                </label>
                <input
                  className="sino-simple-form__input"
                  type="text"
                  name="country"
                  id="country"
                  ref={countryRef}
                  value={formData.country}
                  onChange={onChange}
                  placeholder={t('destinationCountryPlaceholder', 'France, USA, Canada…')}
                />
              </div>

              <div
                className={`sino-simple-form__field sino-simple-form__field--primary${
                  isFilled(formData.destCity) ? ' sino-simple-form__field--filled' : ''
                }`}
              >
                <label className="sino-simple-form__label" htmlFor="destCity">
                  {t('destinationCityOrPort', 'City or port')}
                  <span className="sino-simple-form__required">*</span>
                </label>
                <input
                  className="sino-simple-form__input"
                  type="text"
                  name="destCity"
                  id="destCity"
                  value={formData.destCity}
                  onChange={onChange}
                  placeholder={t('destinationCityPlaceholder', 'e.g. Paris, Le Havre…')}
                />
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
          </section>

          {/* Shipping – Origin in China (substep) */}
          <section className="sino-simple-form__section sino-simple-form__section--service-shipping">
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

          {/* Shipping – Cargo basics (substep) */}
          <section className="sino-simple-form__section sino-simple-form__section--service-shipping">
            <h3 className="sino-simple-form__subsection-title">
              {t('simpleStep3Title', 'Cargo basics')}
            </h3>

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
                  isFilled(formData.loads[0]?.totalWeight ?? '')
                    ? ' sino-simple-form__field--filled'
                    : ''
                }`}
              >
                <label className="sino-simple-form__label" htmlFor="totalWeight">
                  {t('totalWeight', 'Estimated total weight')}
                  <span className="sino-simple-form__required">*</span>
                </label>
                <input
                  className="sino-simple-form__input"
                  type="text"
                  id="totalWeight"
                  ref={totalWeightRef}
                  value={formData.loads[0]?.totalWeight ?? ''}
                  onChange={(event) => updateFirstLoad('totalWeight', event.target.value)}
                  placeholder={t('totalWeightPlaceholder', 'e.g. 1 200')}
                />
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
        </>
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
            firstNameRef={firstNameRef}
            emailRef={emailRef}
            phoneRef={phoneRef}
            stepLabel={`Step ${currentStepIndex + 1}`}
          />

          {/* Simple footer CTA – submit wiring to main pipeline will be added next */}
          <SimpleFooterSection
            formData={formData}
            t={t}
            selectedServiceLabels={selectedServiceLabels}
            submitError={submitError}
            setSubmitError={setSubmitError}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            scrollToFirstError={scrollToFirstError}
          />
        </>
      )}

      {/* Navigation - afficher partout sauf sur la dernière étape (où c'est le footer) */}
      {!isLastStep && (
        <SimpleStepNavigation
          key={`nav-${totalSteps}-${currentStepIndex}`}
          currentStep={currentStepIndex}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          t={t}
        />
      )}
    </div>
  );
};

export default SimpleQuoteForm;
