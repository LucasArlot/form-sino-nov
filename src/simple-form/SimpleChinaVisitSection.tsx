import type { FC } from 'react';
import type { SimpleFormProps } from './context/types';

type SimpleChinaVisitSectionProps = SimpleFormProps & {
  t: (key: string, fallback: string) => string;
  showChinaVisitLogistics: boolean;
  setShowChinaVisitLogistics: (updater: (prev: boolean) => boolean) => void;
  stepLabel?: string;
};

const SimpleChinaVisitSection: FC<SimpleChinaVisitSectionProps> = ({
  formData,
  setFormData,
  t,
  showChinaVisitLogistics,
  setShowChinaVisitLogistics,
  stepLabel,
}) => {
  if (!formData.servicesRequested.chinaVisits) return null;

  const visitTypes = formData.chinaVisit.visitType;

  const toggleVisitType = (value: string) => {
    setFormData((prev) => {
      const currentTypes = prev.chinaVisit.visitType;
      const isSelected = currentTypes.includes(value);
      const newTypes = isSelected
        ? currentTypes.filter((t) => t !== value)
        : [...currentTypes, value];

      return {
        ...prev,
        chinaVisit: {
          ...prev.chinaVisit,
          visitType: newTypes,
        },
      };
    });
  };

  // Derived states
  const hasCantonFair = visitTypes.includes('Canton Fair');
  const hasYiwu = visitTypes.includes('Yiwu Market');
  const hasFactoryVisits = visitTypes.includes('Factory Visits');
  const hasOtherFair = visitTypes.includes('Other Trade Fair');

  // Logic: Do we need to ask for main city?
  // Only if Factory Visits or Other Trade Fair is selected (and not just Canton/Yiwu)
  const needsMainCity = hasFactoryVisits || hasOtherFair;

  // Logic: Do we need to ask for other cities?
  // Always useful if they're doing multiple things
  const needsOtherCities = visitTypes.length > 0;

  // Auto-determine main city based on selection
  const getAutoCity = (): string => {
    if (hasCantonFair && !hasYiwu && !hasFactoryVisits && !hasOtherFair) return 'Guangzhou';
    if (hasYiwu && !hasCantonFair && !hasFactoryVisits && !hasOtherFair) return 'Yiwu';
    if (hasCantonFair && hasYiwu && !hasFactoryVisits && !hasOtherFair) return 'Guangzhou, Yiwu';
    return '';
  };

  const autoCity = getAutoCity();

  return (
    <section className="sino-simple-form__section sino-simple-form__section--service-chinaVisits">
      <h2 className="sino-simple-form__section-title">
        <span className="sino-simple-form__section-step">{stepLabel ?? 'Service'}</span>
        <span>{t('chinaVisitTitle', 'China visits & trade fairs')}</span>
      </h2>

      <p className="sino-simple-form__hint">
        {t('chinaVisitHint', 'Select all that apply. We can help you plan a multi-stop trip.')}
      </p>

      <div className="sino-simple-form__fields sino-simple-form__fields--rows">
        {/* Visit Type Selection (Multi-select) */}
        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label">
            {t('chinaVisitType', 'What would you like to visit?')}
            <span className="sino-simple-form__required" aria-label="required">
              *
            </span>
          </label>
          <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
            {[
              { value: 'Canton Fair', label: 'Canton Fair (Guangzhou)' },
              { value: 'Yiwu Market', label: 'Yiwu Market' },
              { value: 'Factory Visits', label: 'Factory Visits' },
              { value: 'Other Trade Fair', label: 'Other Trade Fair' },
            ].map((option) => {
              const isSelected = visitTypes.includes(option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`sino-simple-chip${isSelected ? ' sino-simple-chip--active' : ''}`}
                  onClick={() => toggleVisitType(option.value)}
                  aria-pressed={isSelected ? 'true' : 'false'}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Canton Fair Phase (Conditional) */}
        {hasCantonFair && (
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label">
              {t('chinaVisitCantonPhase', 'Which phase?')}
            </label>
            <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
              {[
                {
                  value: 'Phase 1',
                  label: 'Phase 1',
                  tooltip: 'Electronics, Machinery, Vehicles, Building Materials',
                },
                {
                  value: 'Phase 2',
                  label: 'Phase 2',
                  tooltip: 'Consumer Goods, Gifts, Home Decor',
                },
                {
                  value: 'Phase 3',
                  label: 'Phase 3',
                  tooltip: 'Textiles, Shoes, Office Supplies, Food',
                },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`sino-simple-chip${
                    formData.chinaVisit.cantonPhase === option.value
                      ? ' sino-simple-chip--active'
                      : ''
                  }`}
                  data-tooltip={option.tooltip}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      chinaVisit: { ...prev.chinaVisit, cantonPhase: option.value },
                    }))
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="sino-simple-form__help">
              {t('cantonPhaseHelp', 'Held in April/May and October/November each year.')}
            </p>
          </div>
        )}

        {/* Other Trade Fair Name (Conditional) */}
        {hasOtherFair && (
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitFairName">
              {t('chinaVisitFairName', 'Which trade fair?')}
              <span className="sino-simple-form__required" aria-label="required">
                *
              </span>
            </label>
            <input
              id="chinaVisitFairName"
              className="sino-simple-form__input"
              type="text"
              value={formData.chinaVisit.fairName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: { ...prev.chinaVisit, fairName: e.target.value },
                }))
              }
              placeholder="e.g. CIFF Furniture Fair, China Beauty Expo…"
            />
          </div>
        )}

        {/* Factory Visit Description (Conditional) */}
        {hasFactoryVisits && (
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitFactoryDescription">
              {t('chinaVisitFactoryDescription', 'What kind of factories?')}
            </label>
            <textarea
              id="chinaVisitFactoryDescription"
              className="sino-simple-form__input sino-simple-form__input--textarea"
              value={formData.chinaVisit.factoryDescription || ''}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: { ...prev.chinaVisit, factoryDescription: e.target.value },
                }))
              }
              placeholder="Product categories, specific suppliers, regions…"
            />
          </div>
        )}

        {/* Main City - Only if needed */}
        {needsMainCity && (
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitMainCity">
              {t('chinaVisitMainCity', 'Main city or region')}
              <span className="sino-simple-form__required" aria-label="required">
                *
              </span>
            </label>
            <input
              id="chinaVisitMainCity"
              className="sino-simple-form__input"
              type="text"
              value={formData.chinaVisit.mainCity}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: { ...prev.chinaVisit, mainCity: e.target.value },
                }))
              }
              placeholder="Shenzhen, Dongguan, Shanghai…"
            />
          </div>
        )}

        {/* Auto-detected city info (when Canton/Yiwu only) */}
        {autoCity && !needsMainCity && (
          <div className="sino-simple-form__field">
            <p className="sino-simple-form__info">
              📍 {t('autoDetectedCity', 'Your trip will be based in')}: <strong>{autoCity}</strong>
            </p>
          </div>
        )}

        {/* Other Cities */}
        {needsOtherCities && (
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitOtherCities">
              {hasFactoryVisits && !hasCantonFair && !hasYiwu
                ? t('chinaVisitFactoryCities', 'Cities/regions to visit')
                : t('chinaVisitOtherCities', 'Other cities to visit')}{' '}
              {!(hasFactoryVisits && !hasCantonFair && !hasYiwu) && (
                <span className="sino-simple-form__label-hint">
                  {t('ifApplicable', 'if applicable')}
                </span>
              )}
            </label>
            <input
              id="chinaVisitOtherCities"
              className="sino-simple-form__input"
              type="text"
              value={formData.chinaVisit.otherCities}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: { ...prev.chinaVisit, otherCities: e.target.value },
                }))
              }
              placeholder="Separated by commas"
            />
          </div>
        )}

        {/* Dates & Duration */}
        <div className="sino-simple-form__fields sino-simple-form__fields--inline">
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitStartDate">
              {t('chinaVisitStartDate', 'Start date')}
              <span className="sino-simple-form__label-hint">{t('ifKnown', 'if known')}</span>
            </label>
            <input
              id="chinaVisitStartDate"
              className="sino-simple-form__input"
              type="date"
              value={formData.chinaVisit.startDate}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: { ...prev.chinaVisit, startDate: e.target.value },
                }))
              }
            />
          </div>
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitEndDate">
              {t('chinaVisitEndDate', 'End date')}
              <span className="sino-simple-form__label-hint">{t('ifKnown', 'if known')}</span>
            </label>
            <input
              id="chinaVisitEndDate"
              className="sino-simple-form__input"
              type="date"
              value={formData.chinaVisit.endDate}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: { ...prev.chinaVisit, endDate: e.target.value },
                }))
              }
            />
          </div>
        </div>

        <div className="sino-simple-form__fields sino-simple-form__fields--inline">
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitNumberOfDays">
              {t('chinaVisitNumberOfDays', 'Days on site')}
            </label>
            <input
              id="chinaVisitNumberOfDays"
              className="sino-simple-form__input"
              type="number"
              min={1}
              value={formData.chinaVisit.numberOfDays ?? ''}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: {
                    ...prev.chinaVisit,
                    numberOfDays: e.target.value ? Number(e.target.value) : null,
                  },
                }))
              }
              placeholder="e.g. 5"
            />
          </div>
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitNumberOfTravelers">
              {t('chinaVisitNumberOfTravelers', 'Travelers')}
            </label>
            <input
              id="chinaVisitNumberOfTravelers"
              className="sino-simple-form__input"
              type="number"
              min={1}
              value={formData.chinaVisit.numberOfTravelers ?? ''}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: {
                    ...prev.chinaVisit,
                    numberOfTravelers: e.target.value ? Number(e.target.value) : null,
                  },
                }))
              }
              placeholder="e.g. 2"
            />
          </div>
        </div>

        {/* Trip Logistics (Collapsible) */}
        <div
          className={`sino-simple-form__subsection${showChinaVisitLogistics ? ' sino-simple-form__subsection--open' : ''}`}
        >
          <button
            type="button"
            className="sino-simple-form__subsection-toggle"
            onClick={() => setShowChinaVisitLogistics((prev) => !prev)}
            aria-expanded={showChinaVisitLogistics}
          >
            <span className="sino-simple-form__subsection-label">
              {t('chinaVisitLogisticsTitle', 'Advanced trip logistics (optional)')}
              <small>
                {t(
                  'chinaVisitLogisticsSubtitle',
                  'Local guide, transport arrangements, hotel booking.'
                )}
              </small>
            </span>
            <span
              className={`sino-simple-form__subsection-chevron${showChinaVisitLogistics ? ' sino-simple-form__subsection-chevron--open' : ''}`}
            >
              ▾
            </span>
          </button>

          {showChinaVisitLogistics && (
            <div className="sino-simple-form__fields sino-simple-form__fields--rows">
              {/* Guide */}
              <div className="sino-simple-form__field">
                <label className="sino-simple-form__label">
                  {t('chinaVisitNeedGuide', 'Local guide / interpreter?')}
                </label>
                <div className="sino-simple-form__chips">
                  {[true, false].map((val) => (
                    <button
                      key={String(val)}
                      type="button"
                      className={`sino-simple-chip${formData.chinaVisit.needGuide === val ? ' sino-simple-chip--active' : ''}`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          chinaVisit: {
                            ...prev.chinaVisit,
                            needGuide: prev.chinaVisit.needGuide === val ? null : val,
                          },
                        }))
                      }
                    >
                      {val ? 'Yes' : 'No'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Transport */}
              <div className="sino-simple-form__field">
                <label className="sino-simple-form__label">
                  {t('chinaVisitNeedTransport', 'Local transport?')}
                </label>
                <div className="sino-simple-form__chips">
                  {[true, false].map((val) => (
                    <button
                      key={String(val)}
                      type="button"
                      className={`sino-simple-chip${formData.chinaVisit.needTransport === val ? ' sino-simple-chip--active' : ''}`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          chinaVisit: {
                            ...prev.chinaVisit,
                            needTransport: prev.chinaVisit.needTransport === val ? null : val,
                          },
                        }))
                      }
                    >
                      {val ? 'Yes' : 'No'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hotels */}
              <div className="sino-simple-form__field">
                <label className="sino-simple-form__label">
                  {t('chinaVisitNeedHotels', 'Hotel booking help?')}
                </label>
                <div className="sino-simple-form__chips">
                  {[true, false].map((val) => (
                    <button
                      key={String(val)}
                      type="button"
                      className={`sino-simple-chip${formData.chinaVisit.needHotels === val ? ' sino-simple-chip--active' : ''}`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          chinaVisit: {
                            ...prev.chinaVisit,
                            needHotels: prev.chinaVisit.needHotels === val ? null : val,
                          },
                        }))
                      }
                    >
                      {val ? 'Yes' : 'No'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="sino-simple-form__field">
                <label className="sino-simple-form__label" htmlFor="chinaVisitNotes">
                  {t('chinaVisitNotes', 'Anything else?')}
                </label>
                <textarea
                  id="chinaVisitNotes"
                  className="sino-simple-form__input sino-simple-form__input--textarea"
                  value={formData.chinaVisit.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      chinaVisit: { ...prev.chinaVisit, notes: e.target.value },
                    }))
                  }
                  placeholder="Visa, budget, preferences…"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SimpleChinaVisitSection;
