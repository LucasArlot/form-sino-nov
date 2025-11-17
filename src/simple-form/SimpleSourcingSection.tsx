import type { FC } from 'react';
import type { QuoteFormContextValue } from '@/features/lead/context/QuoteFormTypes';

type SimpleSourcingSectionProps = Pick<QuoteFormContextValue, 'formData' | 'setFormData'> & {
  t: (key: string, fallback: string) => string;
  stepLabel?: string;
};

const SimpleSourcingSection: FC<SimpleSourcingSectionProps> = ({
  formData,
  setFormData,
  t,
  stepLabel,
}) => {
  return (
    <>
      {formData.servicesRequested.sourcing && (
        <section className="sino-simple-form__section sino-simple-form__section--service-sourcing">
          <h2 className="sino-simple-form__section-title">
            <span className="sino-simple-form__section-step">{stepLabel ?? 'Step 1'}</span>
            <span>{t('simpleSourcingTitle', 'Product sourcing')}</span>
          </h2>

          <div className="sino-simple-form__fields sino-simple-form__fields--rows">
            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="sourcingProductDescription">
                {t('sourcingProductDescription', 'What product are you looking for?')}
              </label>
              <textarea
                id="sourcingProductDescription"
                className="sino-simple-form__input sino-simple-form__input--textarea"
                name="sourcingProductDescription"
                value={formData.sourcing.productDescription}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    sourcing: {
                      ...prev.sourcing,
                      productDescription: event.target.value,
                    },
                  }))
                }
                placeholder={t(
                  'sourcingProductDescriptionPlaceholder',
                  'Briefly describe the product, specs, or categories you need.'
                )}
              />
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="sourcingReferenceLink">
                {t('sourcingReferenceLink', 'Reference link (if any)')}
              </label>
              <input
                id="sourcingReferenceLink"
                className="sino-simple-form__input"
                type="url"
                value={formData.sourcing.referenceLink}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    sourcing: {
                      ...prev.sourcing,
                      referenceLink: event.target.value,
                    },
                  }))
                }
                placeholder={t(
                  'sourcingReferenceLinkPlaceholder',
                  'Alibaba, 1688, Taobao, or any reference URL.'
                )}
              />
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="sourcingTargetPrice">
                {t('sourcingTargetPrice', 'Target price per unit (optional)')}
              </label>
              <div className="sino-simple-form__fields sino-simple-form__fields--inline">
                <input
                  id="sourcingTargetPrice"
                  className="sino-simple-form__input"
                  type="number"
                  min={0}
                  value={formData.sourcing.targetPrice ?? ''}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      sourcing: {
                        ...prev.sourcing,
                        targetPrice: event.target.value ? Number(event.target.value) : null,
                      },
                    }))
                  }
                  placeholder={t('sourcingTargetPricePlaceholder', 'e.g. 5.50')}
                />
                <input
                  className="sino-simple-form__input"
                  type="text"
                  value={formData.sourcing.targetCurrency}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      sourcing: {
                        ...prev.sourcing,
                        targetCurrency: event.target.value,
                      },
                    }))
                  }
                  placeholder={t('sourcingTargetCurrencyPlaceholder', 'USD, EUR…')}
                />
              </div>
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="sourcingMoq">
                {t('sourcingMoq', 'Expected order quantity (MOQ)')}
              </label>
              <input
                id="sourcingMoq"
                className="sino-simple-form__input"
                type="number"
                min={0}
                value={formData.sourcing.moq ?? ''}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    sourcing: {
                      ...prev.sourcing,
                      moq: event.target.value ? Number(event.target.value) : null,
                    },
                  }))
                }
                placeholder={t('sourcingMoqPlaceholder', 'Approximate number of units')}
              />
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="sourcingPlatform">
                {t('sourcingPlatform', 'Which market/platform is this for?')}
              </label>
              <input
                id="sourcingPlatform"
                className="sino-simple-form__input"
                type="text"
                value={formData.sourcing.platform}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    sourcing: {
                      ...prev.sourcing,
                      platform: event.target.value,
                    },
                  }))
                }
                placeholder={t(
                  'sourcingPlatformPlaceholder',
                  'Amazon FBA, Shopify store, wholesale, etc.'
                )}
              />
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label">
                {t('sourcingHasSupplier', 'Do you already have a supplier?')}
              </label>
              <div className="sino-simple-form__chips">
                {[
                  { value: true, label: t('sourcingHasSupplierYes', 'Yes') },
                  { value: false, label: t('sourcingHasSupplierNo', 'No') },
                ].map((option) => (
                  <button
                    key={String(option.value)}
                    type="button"
                    className={`sino-simple-chip${
                      formData.sourcing.hasSupplier === option.value
                        ? ' sino-simple-chip--active'
                        : ''
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        sourcing: {
                          ...prev.sourcing,
                          hasSupplier: option.value,
                        },
                      }))
                    }
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="sourcingNotes">
                {t('sourcingNotes', 'Anything else we should know about sourcing?')}
              </label>
              <textarea
                id="sourcingNotes"
                className="sino-simple-form__input sino-simple-form__input--textarea"
                value={formData.sourcing.notes}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    sourcing: {
                      ...prev.sourcing,
                      notes: event.target.value,
                    },
                  }))
                }
                placeholder={t(
                  'sourcingNotesPlaceholder',
                  'Existing quotes, timelines, certifications required, etc.'
                )}
              />
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="sourcingTargetMarkets">
                {t('sourcingTargetMarkets', 'Which markets are you selling to?')}
                <span className="sino-simple-form__optional">
                  {t('sourcingTargetMarketsOptional', 'Optional – helps us match regulations')}
                </span>
              </label>
              <input
                id="sourcingTargetMarkets"
                className="sino-simple-form__input"
                type="text"
                value={formData.sourcing.targetMarkets}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    sourcing: {
                      ...prev.sourcing,
                      targetMarkets: event.target.value,
                    },
                  }))
                }
                placeholder={t('sourcingTargetMarketsPlaceholder', 'e.g. EU, UK, US, Middle East…')}
              />
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="sourcingRequiredCertifications">
                {t('sourcingRequiredCertifications', 'Required certifications (if any)')}
                <span className="sino-simple-form__optional">
                  {t(
                    'sourcingRequiredCertificationsOptional',
                    'Optional – CE, FDA, RoHS, FSC, etc.'
                  )}
                </span>
              </label>
              <input
                id="sourcingRequiredCertifications"
                className="sino-simple-form__input"
                type="text"
                value={formData.sourcing.requiredCertifications}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    sourcing: {
                      ...prev.sourcing,
                      requiredCertifications: event.target.value,
                    },
                  }))
                }
                placeholder={t(
                  'sourcingRequiredCertificationsPlaceholder',
                  'List any mandatory certifications for your market.'
                )}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SimpleSourcingSection;
