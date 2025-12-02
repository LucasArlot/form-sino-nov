import type { FC } from 'react';
import type { SimpleFormProps } from './context/types';

type SimpleDropshippingSectionProps = SimpleFormProps & {
  t: (key: string, fallback: string) => string;
  showDropshippingAdvanced: boolean;
  setShowDropshippingAdvanced: (updater: (prev: boolean) => boolean) => void;
  stepLabel?: string;
  isQuickQuote?: boolean;
};

const SimpleDropshippingSection: FC<SimpleDropshippingSectionProps> = ({
  formData,
  setFormData,
  t,
  showDropshippingAdvanced,
  setShowDropshippingAdvanced,
  stepLabel,
  // isQuickQuote is received but not used yet - kept for future quick quote mode
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isQuickQuote = false,
}) => {
  if (!formData.servicesRequested.dropshipping) return null;

  return (
    <section className="sino-simple-form__section sino-simple-form__section--service-dropshipping">
      <h2 className="sino-simple-form__section-title">
        <span className="sino-simple-form__section-step">
          <span className="sino-simple-form__step-label">Step</span>
          <span className="sino-simple-form__step-number">{stepLabel?.replace('Step ', '') ?? '?'}</span>
        </span>
        <span>{t('dropshippingTitle', 'Dropshipping & fulfillment from China')}</span>
      </h2>

      <div className="sino-simple-form__fields sino-simple-form__fields--rows">
        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label" htmlFor="dropshippingProducts">
            {t('dropshippingProducts', 'What type of products do you plan to ship?')}
            <span className="sino-simple-form__required" aria-label="required">
              *
            </span>
          </label>
          <textarea
            id="dropshippingProducts"
            className="sino-simple-form__input sino-simple-form__input--textarea"
            value={formData.dropshipping.products}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                dropshipping: {
                  ...prev.dropshipping,
                  products: event.target.value,
                },
              }))
            }
            placeholder={t(
              'dropshippingProductsPlaceholder',
              'Main categories, product types, or existing catalog link.'
            )}
          />
        </div>

        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label" htmlFor="dropshippingModel">
            {t('dropshippingModel', 'What is your business model?')}
          </label>
          <input
            id="dropshippingModel"
            className="sino-simple-form__input"
            type="text"
            value={formData.dropshipping.model}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                dropshipping: {
                  ...prev.dropshipping,
                  model: event.target.value,
                },
              }))
            }
            placeholder={t(
              'dropshippingModelPlaceholder',
              'Shopify store, Amazon FBA, marketplace, D2C…'
            )}
          />
        </div>

        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label" htmlFor="dropshippingCustomerCountries">
            {t('dropshippingCustomerCountries', 'Where are your final customers located?')}
            <span className="sino-simple-form__required" aria-label="required">
              *
            </span>
          </label>
          <input
            id="dropshippingCustomerCountries"
            className="sino-simple-form__input"
            type="text"
            value={formData.dropshipping.customerCountries}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                dropshipping: {
                  ...prev.dropshipping,
                  customerCountries: event.target.value,
                },
              }))
            }
            placeholder={t(
              'dropshippingCustomerCountriesPlaceholder',
              'Countries or regions (e.g. US, EU, UK).'
            )}
          />
        </div>

        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label" htmlFor="dropshippingDailyOrders">
            {t('dropshippingDailyOrders', 'Average or expected daily orders')}
          </label>
          <input
            id="dropshippingDailyOrders"
            className="sino-simple-form__input"
            type="number"
            min={0}
            value={formData.dropshipping.dailyOrders ?? ''}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                dropshipping: {
                  ...prev.dropshipping,
                  dailyOrders: event.target.value ? Number(event.target.value) : null,
                },
              }))
            }
            placeholder={t('dropshippingDailyOrdersPlaceholder', 'e.g. 20')}
          />
        </div>

        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label">
            {t('dropshippingHasCatalog', 'Do you already have a main product or catalog?')}
          </label>
          <div className="sino-simple-form__chips">
            {[
              { value: true, label: t('dropshippingHasCatalogYes', 'Yes') },
              { value: false, label: t('dropshippingHasCatalogNo', 'No') },
            ].map((option) => (
              <button
                key={String(option.value)}
                type="button"
                className={`sino-simple-chip${
                  formData.dropshipping.hasCatalog === option.value
                    ? ' sino-simple-chip--active'
                    : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    dropshipping: {
                      ...prev.dropshipping,
                      hasCatalog:
                        prev.dropshipping.hasCatalog === option.value ? null : option.value,
                    },
                  }))
                }
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`sino-simple-form__subsection${
            showDropshippingAdvanced ? ' sino-simple-form__subsection--open' : ''
          }`}
        >
          <button
            type="button"
            className="sino-simple-form__subsection-toggle"
            onClick={() => setShowDropshippingAdvanced((prev) => !prev)}
          >
            <span className="sino-simple-form__subsection-label">
              {t('dropshippingAdvancedTitle', 'Advanced dropshipping details (optional)')}
              <small>
                {t('dropshippingAdvancedSubtitle', 'Branding needs and additional notes.')}
              </small>
            </span>
            <span
              className={`sino-simple-form__subsection-chevron${
                showDropshippingAdvanced ? ' sino-simple-form__subsection-chevron--open' : ''
              }`}
            >
              ▾
            </span>
          </button>

          {showDropshippingAdvanced && (
            <div className="sino-simple-form__fields sino-simple-form__fields--rows">
              <div className="sino-simple-form__field">
                <label className="sino-simple-form__label">
                  {t('dropshippingBrandingNeeded', 'Do you need branded packaging or inserts?')}
                </label>
                <div className="sino-simple-form__chips">
                  {[
                    { value: true, label: t('dropshippingBrandingNeededYes', 'Yes') },
                    { value: false, label: t('dropshippingBrandingNeededNo', 'No') },
                  ].map((option) => (
                    <button
                      key={String(option.value)}
                      type="button"
                      className={`sino-simple-chip${
                        formData.dropshipping.brandingNeeded === option.value
                          ? ' sino-simple-chip--active'
                          : ''
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          dropshipping: {
                            ...prev.dropshipping,
                            brandingNeeded:
                              prev.dropshipping.brandingNeeded === option.value
                                ? null
                                : option.value,
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
                <label className="sino-simple-form__label" htmlFor="dropshippingNotes">
                  {t('dropshippingNotes', 'Anything else we should know?')}
                </label>
                <textarea
                  id="dropshippingNotes"
                  className="sino-simple-form__input sino-simple-form__input--textarea"
                  value={formData.dropshipping.notes}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      dropshipping: {
                        ...prev.dropshipping,
                        notes: event.target.value,
                      },
                    }))
                  }
                  placeholder={t(
                    'dropshippingNotesPlaceholder',
                    'Catalog links, current 3PL setup, pain points…'
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

export default SimpleDropshippingSection;
