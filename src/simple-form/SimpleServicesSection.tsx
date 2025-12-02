import type { FC } from 'react';
import type { SimpleFormProps } from './context/types';

type SimpleServicesSectionProps = SimpleFormProps & {
  t: (key: string, fallback: string) => string;
  stepLabel?: string;
};

type ServiceKey =
  | 'shipping'
  | 'sourcing'
  | 'dropshipping'
  | 'warehousing'
  | 'qc'
  | 'chinaVisits'
  | 'other';

type SimpleServicesSectionPropsWithHeader = SimpleServicesSectionProps & {
  shippingOnly?: boolean;
  isQuickQuote?: boolean;
  setIsQuickQuote?: (value: boolean) => void;
};

const SimpleServicesSection: FC<SimpleServicesSectionPropsWithHeader> = ({
  formData,
  setFormData,
  t,
  stepLabel,
  shippingOnly = false,
  isQuickQuote = false,
  setIsQuickQuote,
}) => {
  const toggleService = (service: ServiceKey): void => {
    setFormData((prev) => ({
      ...prev,
      servicesRequested: {
        ...prev.servicesRequested,
        [service]: !prev.servicesRequested[service],
      },
    }));
  };

  return (
    <section className="sino-simple-form__section sino-simple-form__section--services">
      <header className="sino-simple-form__header">
        <div className="sino-simple-form__header-top">
          <p className="sino-simple-form__eyebrow">
            {shippingOnly
              ? t('simpleEyebrowShippingOnly', 'Shipping from China')
              : t('simpleEyebrowMulti', 'Projects with China')}
          </p>
          {isQuickQuote && (
            <span className="sino-simple-form__quick-quote-badge">
              {t('quickQuoteBadge', 'Quick quote')}
            </span>
          )}
        </div>
        <h1 className="sino-simple-form__title">
          {t('simpleTitle', 'Plan your project with China in one request')}
        </h1>
        <p className="sino-simple-form__subtitle">
          {shippingOnly
            ? t(
                'simpleSubtitleShippingOnly',
                'Answer a few key questions about your route, cargo and timing to get a tailored shipping plan.'
              )
            : t(
                'simpleSubtitleMulti',
                "Answer a few key questions and we'll route your request to the right specialists for shipping, sourcing, QC, visits and more."
              )}
        </p>
        {setIsQuickQuote && (
          <div className="sino-simple-form__quick-quote-toggle">
            <label className="sino-simple-form__quick-quote-toggle-label">
              <input
                type="checkbox"
                checked={isQuickQuote}
                onChange={(e) => setIsQuickQuote(e.target.checked)}
                className="sino-simple-form__quick-quote-toggle-input"
              />
              <span className="sino-simple-form__quick-quote-toggle-slider" />
              <span className="sino-simple-form__quick-quote-toggle-text">
                {t('quickQuoteToggle', 'Quick quote mode (essential fields only)')}
              </span>
            </label>
          </div>
        )}
        <p className="sino-simple-form__hint">
          {t(
            'simpleRequiredHint',
            'Fields marked with * are required. The rest can stay approximate or empty for now.'
          )}
        </p>
      </header>

      <h2 className="sino-simple-form__section-title">
        <span className="sino-simple-form__section-step">
                  <span className="sino-simple-form__step-label">Step</span>
                  <span className="sino-simple-form__step-number">{stepLabel?.replace('Step ', '') ?? '0'}</span>
                </span>
        <span>{t('simpleServicesStepTitle', 'What do you need help with from China?')}</span>
      </h2>

      <p className="sino-simple-form__hint">
        {t(
          'simpleServicesStepHint',
          'Select all that apply (most people pick 1–3 options). Shipping remains the core module and we tailor the rest around your needs.'
        )}
      </p>

      <div className="sino-simple-form__fields sino-simple-form__fields--rows">
        <div className="sino-simple-form__field">
          <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
            {[
              {
                key: 'shipping' as ServiceKey,
                label: t('serviceShipping', 'Ship goods from China'),
                icon: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 17h20M5 17V7l8-4v10M19 17V7l-6 4M7 11h6M7 7h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                key: 'sourcing' as ServiceKey,
                label: t('serviceSourcing', 'Find suppliers / get product sourcing help'),
                icon: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m21 21-4.35-4.35"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                key: 'dropshipping' as ServiceKey,
                label: t('serviceDropshipping', 'Set up dropshipping or fulfillment from China'),
                icon: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="3.27 6.96 12 12.01 20.73 6.96"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="12"
                      y1="22.08"
                      x2="12"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                key: 'warehousing' as ServiceKey,
                label: t('serviceWarehousing', 'Store & consolidate goods in China'),
                icon: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="9 22 9 12 15 12 15 22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                key: 'qc' as ServiceKey,
                label: t('serviceQc', 'Book a quality inspection'),
                icon: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22 4 12 14.01 9 11.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                key: 'chinaVisits' as ServiceKey,
                label: t(
                  'serviceChinaVisits',
                  'Plan a visit or fair in China (Canton Fair, Yiwu…)'
                ),
                icon: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="8"
                      y1="2"
                      x2="8"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="3"
                      y1="10"
                      x2="21"
                      y2="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                key: 'other' as ServiceKey,
                label: t('serviceOther', 'Other project (tell us more)'),
                icon: (
                  <svg
                    width="18"
                    height="18"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="12"
                      y1="8"
                      x2="12"
                      y2="16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="8"
                      y1="12"
                      x2="16"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((option) => (
              <button
                key={option.key}
                type="button"
                className={`sino-simple-chip sino-simple-chip--service-${option.key}${
                  formData.servicesRequested[option.key] ? ' sino-simple-chip--active' : ''
                }`}
                onClick={() => toggleService(option.key)}
                aria-pressed={formData.servicesRequested[option.key] ? 'true' : 'false'}
                aria-label={`${option.label}${formData.servicesRequested[option.key] ? ', selected' : ', not selected'}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleService(option.key);
                  }
                }}
              >
                <span className="sino-simple-chip__icon" aria-hidden="true">
                  {option.icon}
                </span>
                <span className="sino-simple-chip__label">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleServicesSection;
