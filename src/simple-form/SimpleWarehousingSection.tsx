import type { FC } from 'react';
import type { QuoteFormContextValue } from '@/features/lead/context/QuoteFormTypes';

type SimpleWarehousingSectionProps = Pick<QuoteFormContextValue, 'formData' | 'setFormData'> & {
  t: (key: string, fallback: string) => string;
  showWarehousingAdvanced: boolean;
  setShowWarehousingAdvanced: (updater: (prev: boolean) => boolean) => void;
  stepLabel?: string;
  isQuickQuote?: boolean;
};

const SimpleWarehousingSection: FC<SimpleWarehousingSectionProps> = ({
  formData,
  setFormData,
  t,
  showWarehousingAdvanced,
  setShowWarehousingAdvanced,
  stepLabel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isQuickQuote: _isQuickQuote = false,
}) => {
  if (!formData.servicesRequested.warehousing) return null;

  return (
    <section className="sino-simple-form__section sino-simple-form__section--service-warehousing">
      <h2 className="sino-simple-form__section-title">
        <span className="sino-simple-form__section-step">{stepLabel ?? 'Service'}</span>
        <span>{t('warehousingTitle', 'Warehousing & consolidation in China')}</span>
      </h2>

      <div className="sino-simple-form__fields sino-simple-form__fields--rows">
        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label">
            {t('warehousingDuration', 'How long do you plan to store goods in China?')}
          </label>
          <div className="sino-simple-form__chips">
            {[
              { value: 'lt_1_month', label: t('warehousingDurationLt1', 'Less than 1 month') },
              {
                value: '1_3_months',
                label: t('warehousingDuration1to3', 'Between 1 and 3 months'),
              },
              {
                value: 'gt_3_months',
                label: t('warehousingDurationGt3', 'More than 3 months'),
              },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                className={`sino-simple-chip${
                  formData.warehousing.duration === option.value ? ' sino-simple-chip--active' : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    warehousing: {
                      ...prev.warehousing,
                      duration: option.value,
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
          <label className="sino-simple-form__label" htmlFor="warehousingSkuCount">
            {t('warehousingSkuCount', 'Approximate number of SKUs')}
          </label>
          <input
            id="warehousingSkuCount"
            className="sino-simple-form__input"
            type="number"
            min={0}
            value={formData.warehousing.skuCount ?? ''}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                warehousing: {
                  ...prev.warehousing,
                  skuCount: event.target.value ? Number(event.target.value) : null,
                },
              }))
            }
            placeholder={t('warehousingSkuCountPlaceholder', 'e.g. 10–50')}
          />
        </div>

        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label">
            {t('warehousingConsolidation', 'Do you need consolidation from multiple suppliers?')}
          </label>
          <div className="sino-simple-form__chips">
            {[
              { value: true, label: t('warehousingConsolidationYes', 'Yes') },
              { value: false, label: t('warehousingConsolidationNo', 'No') },
            ].map((option) => (
              <button
                key={String(option.value)}
                type="button"
                className={`sino-simple-chip${
                  formData.warehousing.consolidation === option.value
                    ? ' sino-simple-chip--active'
                    : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    warehousing: {
                      ...prev.warehousing,
                      consolidation: option.value,
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
          <label className="sino-simple-form__label" htmlFor="warehousingSpecialHandling">
            {t('warehousingSpecialHandling', 'Any special handling or storage requirements?')}
          </label>
          <textarea
            id="warehousingSpecialHandling"
            className="sino-simple-form__input sino-simple-form__input--textarea"
            value={formData.warehousing.specialHandling}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                warehousing: {
                  ...prev.warehousing,
                  specialHandling: event.target.value,
                },
              }))
            }
            placeholder={t(
              'warehousingSpecialHandlingPlaceholder',
              'Fragile goods, temperature control, palletization, labelling, etc.'
            )}
          />
        </div>

        <div
          className={`sino-simple-form__subsection${
            showWarehousingAdvanced ? ' sino-simple-form__subsection--open' : ''
          }`}
        >
          <button
            type="button"
            className="sino-simple-form__subsection-toggle"
            onClick={() => setShowWarehousingAdvanced((prev) => !prev)}
          >
            <span className="sino-simple-form__subsection-label">
              {t('warehousingAdvancedTitle', 'Advanced warehousing preferences (optional)')}
              <small>
                {t(
                  'warehousingAdvancedSubtitle',
                  'Only if you already have clear requirements for storage layout or WMS.'
                )}
              </small>
            </span>
            <span
              className={`sino-simple-form__subsection-chevron${
                showWarehousingAdvanced ? ' sino-simple-form__subsection-chevron--open' : ''
              }`}
            >
              ▾
            </span>
          </button>

          {showWarehousingAdvanced && (
            <div className="sino-simple-form__fields sino-simple-form__fields--rows">
              <div className="sino-simple-form__field">
                <label className="sino-simple-form__label">
                  {t('warehousingExtraServices', 'Any extra services you may need?')}
                </label>
                <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
                  {[
                    { value: 'Repackage', label: 'Repackage' },
                    { value: 'Shipment Tracking', label: 'Shipment Tracking' },
                    { value: 'Inventory Management', label: 'Inventory Management' },
                    { value: 'Quality Control', label: 'Quality Control' },
                    { value: 'Returns Handling', label: 'Returns Handling' },
                    { value: 'Product Photography', label: 'Product Photography' },
                    {
                      value: 'Product Listing Optimization',
                      label: 'Product Listing Optimization',
                    },
                    {
                      value: 'Fulfillment by Amazon (FBA) Preparation',
                      label: 'Fulfillment by Amazon (FBA) Preparation',
                    },
                    { value: 'Other', label: 'Other' },
                  ].map((option) => {
                    const active = formData.warehousing.extraServices.includes(option.value);
                    return (
                      <button
                        key={option.value}
                        type="button"
                        className={`sino-simple-chip${active ? ' sino-simple-chip--active' : ''}`}
                        onClick={() =>
                          setFormData((prev) => {
                            const current = prev.warehousing.extraServices;
                            const next = active
                              ? current.filter((item) => item !== option.value)
                              : [...current, option.value];
                            return {
                              ...prev,
                              warehousing: {
                                ...prev.warehousing,
                                extraServices: next,
                              },
                            };
                          })
                        }
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="sino-simple-form__field">
                <label className="sino-simple-form__label" htmlFor="warehousingNotes">
                  {t('warehousingNotes', 'Anything else we should know about warehousing?')}
                </label>
                <textarea
                  id="warehousingNotes"
                  className="sino-simple-form__input sino-simple-form__input--textarea"
                  value={formData.warehousing.notes}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      warehousing: {
                        ...prev.warehousing,
                        notes: event.target.value,
                      },
                    }))
                  }
                  placeholder={t(
                    'warehousingNotesPlaceholder',
                    'Special handling, temperature control, rotation rules, etc.'
                  )}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SimpleWarehousingSection;
