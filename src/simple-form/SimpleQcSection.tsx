import type { FC } from 'react';
import type { SimpleFormProps } from './context/types';

type SimpleQcSectionProps = SimpleFormProps & {
  t: (key: string, fallback: string) => string;
  showQcAdvanced: boolean;
  setShowQcAdvanced: (updater: (prev: boolean) => boolean) => void;
  stepLabel?: string;
  isQuickQuote?: boolean;
};

const SimpleQcSection: FC<SimpleQcSectionProps> = ({
  formData,
  setFormData,
  t,
  showQcAdvanced,
  setShowQcAdvanced,
  stepLabel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isQuickQuote = false,
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
            <span className="sino-simple-form__required" aria-label="required">
              *
            </span>
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
                      type: prev.qc.type === option.value ? '' : option.value,
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
                      productionStage: prev.qc.productionStage === option.value ? '' : option.value,
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
            <span className="sino-simple-form__required" aria-label="required">
              *
            </span>
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
            {t('qcPreferredDate', 'Preferred inspection date')}
            <span className="sino-simple-form__label-hint">{t('ifKnown', 'if known')}</span>
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
              {t('qcAdvancedTitle', 'Additional inspection details (optional)')}
              <small>
                {t('qcAdvancedSubtitle', 'Specific checkpoints, batch sizes or constraints.')}
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
                  {t('qcNotes', 'Anything else we should know?')}
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
                    'Product type, quantities, deadlines, specific checkpoints…'
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
