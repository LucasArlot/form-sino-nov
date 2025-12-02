import type { FC } from 'react';
import type { SimpleFormProps } from './context/types';

type SimpleSourcingSectionProps = SimpleFormProps & {
  t: (key: string, fallback: string) => string;
  stepLabel?: string;
  showSourcingAdvanced: boolean;
  setShowSourcingAdvanced: (updater: (prev: boolean) => boolean) => void;
  isQuickQuote?: boolean;
};

const SimpleSourcingSection: FC<SimpleSourcingSectionProps> = ({
  formData,
  setFormData,
  t,
  stepLabel,
  showSourcingAdvanced,
  setShowSourcingAdvanced,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isQuickQuote = false,
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
                <span className="sino-simple-form__required" aria-label="required">
                  *
                </span>
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
                {t('sourcingReferenceLink', 'Reference link')}
                <span className="sino-simple-form__label-hint">{t('ifAny', 'if any')}</span>
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
                {t('sourcingTargetPrice', 'Target price per unit')}
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
                          hasSupplier:
                            prev.sourcing.hasSupplier === option.value ? null : option.value,
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
              <label className="sino-simple-form__label" htmlFor="sourcingTargetMarkets">
                {t('sourcingTargetMarkets', 'Which markets are you selling to?')}
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
                {t('sourcingRequiredCertifications', 'Required certifications')}
                <span className="sino-simple-form__label-hint">{t('ifAny', 'if any')}</span>
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
                  'e.g. CE, RoHS, FDA...'
                )}
              />
            </div>

            {/* Advanced sourcing details (optional) */}
            <div
              className={`sino-simple-form__subsection${
                showSourcingAdvanced ? ' sino-simple-form__subsection--open' : ''
              }`}
            >
              <button
                type="button"
                className="sino-simple-form__subsection-toggle"
                onClick={() => setShowSourcingAdvanced((prev) => !prev)}
              >
                <span className="sino-simple-form__subsection-label">
                  {t('sourcingAdvancedTitle', 'Advanced sourcing details (optional)')}
                  <small>
                    {t(
                      'sourcingAdvancedSubtitle',
                      'Timeline, quality standards, packaging requirements.'
                    )}
                  </small>
                </span>
                <span
                  className={`sino-simple-form__subsection-chevron${
                    showSourcingAdvanced ? ' sino-simple-form__subsection-chevron--open' : ''
                  }`}
                >
                  ▾
                </span>
              </button>

              {showSourcingAdvanced && (
                <div className="sino-simple-form__fields sino-simple-form__fields--rows">
                  <div className="sino-simple-form__field">
                    <label className="sino-simple-form__label" htmlFor="sourcingTimeline">
                      {t('sourcingTimeline', 'Timeline / urgency')}
                    </label>
                    <input
                      id="sourcingTimeline"
                      className="sino-simple-form__input"
                      type="text"
                      value={formData.sourcing.timeline || ''}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          sourcing: {
                            ...prev.sourcing,
                            timeline: event.target.value,
                          },
                        }))
                      }
                      placeholder={t(
                        'sourcingTimelinePlaceholder',
                        'e.g. Need samples within 2 weeks, production start in 1 month…'
                      )}
                    />
                  </div>

                  <div className="sino-simple-form__field">
                    <label className="sino-simple-form__label" htmlFor="sourcingQualityStandards">
                      {t('sourcingQualityStandards', 'Quality standards')}
                      <span className="sino-simple-form__label-hint">{t('ifAny', 'if any')}</span>
                    </label>
                    <input
                      id="sourcingQualityStandards"
                      className="sino-simple-form__input"
                      type="text"
                      value={formData.sourcing.qualityStandards || ''}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          sourcing: {
                            ...prev.sourcing,
                            qualityStandards: event.target.value,
                          },
                        }))
                      }
                      placeholder={t(
                        'sourcingQualityStandardsPlaceholder',
                        'e.g. ISO 9001, specific quality grades…'
                      )}
                    />
                  </div>

                  <div className="sino-simple-form__field">
                    <label
                      className="sino-simple-form__label"
                      htmlFor="sourcingPackagingRequirements"
                    >
                      {t('sourcingPackagingRequirements', 'Packaging requirements')}
                      <span className="sino-simple-form__label-hint">{t('ifAny', 'if any')}</span>
                    </label>
                    <input
                      id="sourcingPackagingRequirements"
                      className="sino-simple-form__input"
                      type="text"
                      value={formData.sourcing.packagingRequirements || ''}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          sourcing: {
                            ...prev.sourcing,
                            packagingRequirements: event.target.value,
                          },
                        }))
                      }
                      placeholder={t(
                        'sourcingPackagingRequirementsPlaceholder',
                        'e.g. Retail-ready, eco-friendly materials…'
                      )}
                    />
                  </div>

                  <div className="sino-simple-form__field">
                    <label className="sino-simple-form__label" htmlFor="sourcingNotes">
                      {t('sourcingAdvancedNotes', 'Any other details?')}
                    </label>
                    <textarea
                      id="sourcingNotes"
                      className="sino-simple-form__input sino-simple-form__input--textarea"
                      value={formData.sourcing.notes || ''}
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
                        'sourcingAdvancedNotesPlaceholder',
                        'Custom labeling, branding, sample requirements, factory audits…'
                      )}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SimpleSourcingSection;
