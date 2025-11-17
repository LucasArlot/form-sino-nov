import type { FC } from 'react';
import type { QuoteFormContextValue } from '@/features/lead/context/QuoteFormTypes';

type SimpleServicesSectionProps = Pick<QuoteFormContextValue, 'formData' | 'setFormData'> & {
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
};

const SimpleServicesSection: FC<SimpleServicesSectionPropsWithHeader> = ({
  formData,
  setFormData,
  t,
  stepLabel,
  shippingOnly = false,
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
        <p className="sino-simple-form__eyebrow">
          {shippingOnly
            ? t('simpleEyebrowShippingOnly', 'Shipping from China')
            : t('simpleEyebrowMulti', 'Projects with China')}
        </p>
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
        <p className="sino-simple-form__hint">
          {t(
            'simpleRequiredHint',
            'Fields marked with * are required. The rest can stay approximate or empty for now.'
          )}
        </p>
        <p className="sino-simple-form__hint sino-simple-form__hint--secondary">
          {t(
            'simpleShippingFocusHint',
            "If you only need shipping, we'll focus on that first and keep other services optional."
          )}
        </p>
      </header>

      <h2 className="sino-simple-form__section-title">
        <span className="sino-simple-form__section-step">{stepLabel ?? 'Step 0'}</span>
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
              },
              {
                key: 'sourcing' as ServiceKey,
                label: t('serviceSourcing', 'Find suppliers / get product sourcing help'),
              },
              {
                key: 'dropshipping' as ServiceKey,
                label: t('serviceDropshipping', 'Set up dropshipping or fulfillment from China'),
              },
              {
                key: 'warehousing' as ServiceKey,
                label: t('serviceWarehousing', 'Store & consolidate goods in China'),
              },
              {
                key: 'qc' as ServiceKey,
                label: t('serviceQc', 'Book a quality inspection in a factory'),
              },
              {
                key: 'chinaVisits' as ServiceKey,
                label: t(
                  'serviceChinaVisits',
                  'Plan a visit or fair in China (Canton Fair, Yiwu…)'
                ),
              },
              {
                key: 'other' as ServiceKey,
                label: t('serviceOther', 'Other project (tell us more)'),
              },
            ].map((option) => (
              <button
                key={option.key}
                type="button"
                className={`sino-simple-chip sino-simple-chip--service-${option.key}${
                  formData.servicesRequested[option.key] ? ' sino-simple-chip--active' : ''
                }`}
                onClick={() => toggleService(option.key)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleServicesSection;
