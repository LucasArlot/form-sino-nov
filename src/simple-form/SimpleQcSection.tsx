import type { FC } from 'react';
import type { QuoteFormContextValue } from '@/features/lead/context/QuoteFormTypes';

type SimpleQcSectionProps = Pick<QuoteFormContextValue, 'formData' | 'setFormData'> & {
  t: (key: string, fallback: string) => string;
  showQcAdvanced: boolean;
  setShowQcAdvanced: (updater: (prev: boolean) => boolean) => void;
  stepLabel?: string;
};

const SimpleQcSection: FC<SimpleQcSectionProps> = ({
  formData,
  setFormData,
  t,
  showQcAdvanced,
  setShowQcAdvanced,
  stepLabel,
}) => {
  if (!formData.servicesRequested.qc) return null;

  return (
    <section className="sino-simple-form__section sino-simple-form__section--service-qc">
      <h2 className="sino-simple-form__section-title">
        <span className="sino-simple-form__section-step">{stepLabel ?? 'Service'}</span>
        <span>{t('qcTitle', 'Quality control & inspections')}</span>
      </h2>

      <div className="sino-simple-form__fields sino-simple-form__fields--rows">
        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label">
            {t('qcType', 'What type of inspection do you need?')}
          </label>
          <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
            {[
              { value: 'pre_production', label: t('qcTypePreProduction', 'Pre-production') },
              {
                value: 'during_production',
                label: t('qcTypeDuringProduction', 'During production'),
              },
              { value: 'pre_shipment', label: t('qcTypePreShipment', 'Pre-shipment') },
              { value: 'factory_audit', label: t('qcTypeFactoryAudit', 'Factory audit') },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                className={`sino-simple-chip${
                  formData.qc.type === option.value ? ' sino-simple-chip--active' : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    qc: {
                      ...prev.qc,
                      type: option.value,
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
          <label className="sino-simple-form__label">
            {t('qcProductionStage', 'At which stage is your production?')}
          </label>
          <div className="sino-simple-form__chips">
            {[
              { value: 'not_started', label: t('qcStageNotStarted', 'Not started') },
              { value: 'in_progress', label: t('qcStageInProgress', 'In progress') },
              { value: 'finished', label: t('qcStageFinished', 'Finished') },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                className={`sino-simple-chip${
                  formData.qc.productionStage === option.value ? ' sino-simple-chip--active' : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    qc: {
                      ...prev.qc,
                      productionStage: option.value,
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
          <label className="sino-simple-form__label" htmlFor="qcFactoryCity">
            {t('qcFactoryCity', 'Factory location (city in China)')}
          </label>
          <input
            id="qcFactoryCity"
            className="sino-simple-form__input"
            type="text"
            value={formData.qc.factoryCity}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                qc: {
                  ...prev.qc,
                  factoryCity: event.target.value,
                },
              }))
            }
            placeholder={t('qcFactoryCityPlaceholder', 'e.g. Shenzhen, Ningbo, Yiwu…')}
          />
        </div>

        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label" htmlFor="qcPreferredDate">
            {t('qcPreferredDate', 'Preferred inspection date (approximate is OK)')}
          </label>
          <input
            id="qcPreferredDate"
            className="sino-simple-form__input"
            type="date"
            value={formData.qc.preferredDate}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                qc: {
                  ...prev.qc,
                  preferredDate: event.target.value,
                },
              }))
            }
          />
        </div>

        <div
          className={`sino-simple-form__subsection${
            showQcAdvanced ? ' sino-simple-form__subsection--open' : ''
          }`}
        >
          <button
            type="button"
            className="sino-simple-form__subsection-toggle"
            onClick={() => setShowQcAdvanced((prev) => !prev)}
          >
            <span className="sino-simple-form__subsection-label">
              {t('qcAdvancedTitle', 'Advanced inspection details (optional)')}
              <small>
                {t(
                  'qcAdvancedSubtitle',
                  'Open this if you want to add specific checkpoints, batch sizes or constraints.'
                )}
              </small>
            </span>
            <span
              className={`sino-simple-form__subsection-chevron${
                showQcAdvanced ? ' sino-simple-form__subsection-chevron--open' : ''
              }`}
            >
              ▾
            </span>
          </button>

          {showQcAdvanced && (
            <div className="sino-simple-form__fields sino-simple-form__fields--rows">
              <div className="sino-simple-form__field">
                <label className="sino-simple-form__label" htmlFor="qcNotes">
                  {t('qcNotes', 'Anything else we should know about this inspection?')}
                </label>
                <textarea
                  id="qcNotes"
                  className="sino-simple-form__input sino-simple-form__input--textarea"
                  value={formData.qc.notes}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      qc: {
                        ...prev.qc,
                        notes: event.target.value,
                      },
                    }))
                  }
                  placeholder={t(
                    'qcNotesPlaceholder',
                    'Product type, quantities, deadlines, specific checkpoints, etc.'
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

export default SimpleQcSection;
