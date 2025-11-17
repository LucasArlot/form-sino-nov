import type { FC } from 'react';
import type { QuoteFormContextValue } from '@/features/lead/context/QuoteFormTypes';

type SimpleChinaVisitSectionProps = Pick<QuoteFormContextValue, 'formData' | 'setFormData'> & {
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

  return (
    <section className="sino-simple-form__section sino-simple-form__section--service-chinaVisits">
      <h2 className="sino-simple-form__section-title">
        <span className="sino-simple-form__section-step">{stepLabel ?? 'Service'}</span>
        <span>{t('chinaVisitTitle', 'China visits & trade fairs')}</span>
      </h2>

      <div className="sino-simple-form__fields sino-simple-form__fields--rows">
        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label">
            {t('chinaVisitType', 'What kind of visit are you planning?')}
          </label>
          <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
            {[
              { value: 'canton_fair', label: t('chinaVisitCantonFair', 'Canton Fair') },
              { value: 'yiwu_market', label: t('chinaVisitYiwuMarket', 'Yiwu market') },
              { value: 'other_fair', label: t('chinaVisitOtherFair', 'Other trade fair') },
              { value: 'factory_visits', label: t('chinaVisitFactoryVisits', 'Factory visits') },
              { value: 'mixed_trip', label: t('chinaVisitMixedTrip', 'Mixed trip') },
              {
                value: 'business_immersion_day',
                label: t('chinaVisitImmersionDay', 'Business immersion day'),
              },
              {
                value: 'supplier_roadshow',
                label: t('chinaVisitSupplierRoadshow', 'Supplier roadshow'),
              },
              {
                value: 'factory_audit_visit',
                label: t('chinaVisitFactoryAuditVisit', 'Factory audit visit'),
              },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                className={`sino-simple-chip${
                  formData.chinaVisit.visitType === option.value ? ' sino-simple-chip--active' : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    chinaVisit: {
                      ...prev.chinaVisit,
                      visitType: option.value,
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
          <label className="sino-simple-form__label" htmlFor="chinaVisitMainCity">
            {t('chinaVisitMainCity', 'Main city or area in China')}
          </label>
          <input
            id="chinaVisitMainCity"
            className="sino-simple-form__input"
            type="text"
            value={formData.chinaVisit.mainCity}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                chinaVisit: {
                  ...prev.chinaVisit,
                  mainCity: event.target.value,
                },
              }))
            }
            placeholder={t(
              'chinaVisitMainCityPlaceholder',
              'Guangzhou, Yiwu, Shenzhen, Shanghai, etc.'
            )}
          />
        </div>

        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label" htmlFor="chinaVisitOtherCities">
            {t('chinaVisitOtherCities', 'Other cities to visit (optional)')}
          </label>
          <input
            id="chinaVisitOtherCities"
            className="sino-simple-form__input"
            type="text"
            value={formData.chinaVisit.otherCities}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                chinaVisit: {
                  ...prev.chinaVisit,
                  otherCities: event.target.value,
                },
              }))
            }
            placeholder={t('chinaVisitOtherCitiesPlaceholder', 'Separated by commas if needed.')}
          />
        </div>

        {(formData.chinaVisit.visitType === 'other_fair' ||
          formData.chinaVisit.visitType === 'mixed_trip') && (
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitFairName">
              {t('chinaVisitFairName', 'Which trade fair or market?')}
            </label>
            <input
              id="chinaVisitFairName"
              className="sino-simple-form__input"
              type="text"
              value={formData.chinaVisit.fairName}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: {
                    ...prev.chinaVisit,
                    fairName: event.target.value,
                  },
                }))
              }
              placeholder={t(
                'chinaVisitFairNamePlaceholder',
                'Name of the fair or market you plan to visit.'
              )}
            />
          </div>
        )}

        {formData.chinaVisit.visitType === 'canton_fair' && (
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label">
              {t('chinaVisitCantonPhase', 'Canton Fair phase')}
            </label>
            <div className="sino-simple-form__chips">
              {[
                { value: 'phase_1', label: t('chinaVisitCantonPhase1', 'Phase 1') },
                { value: 'phase_2', label: t('chinaVisitCantonPhase2', 'Phase 2') },
                { value: 'phase_3', label: t('chinaVisitCantonPhase3', 'Phase 3') },
                { value: 'not_sure', label: t('chinaVisitCantonPhaseNotSure', 'Not sure') },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`sino-simple-chip${
                    formData.chinaVisit.cantonPhase === option.value
                      ? ' sino-simple-chip--active'
                      : ''
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      chinaVisit: {
                        ...prev.chinaVisit,
                        cantonPhase: option.value,
                      },
                    }))
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="sino-simple-form__fields sino-simple-form__fields--inline">
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitStartDate">
              {t('chinaVisitStartDate', 'Planned start date')}
            </label>
            <input
              id="chinaVisitStartDate"
              className="sino-simple-form__input"
              type="date"
              value={formData.chinaVisit.startDate}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: {
                    ...prev.chinaVisit,
                    startDate: event.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitEndDate">
              {t('chinaVisitEndDate', 'Planned end date')}
            </label>
            <input
              id="chinaVisitEndDate"
              className="sino-simple-form__input"
              type="date"
              value={formData.chinaVisit.endDate}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: {
                    ...prev.chinaVisit,
                    endDate: event.target.value,
                  },
                }))
              }
            />
          </div>
        </div>

        <div className="sino-simple-form__fields sino-simple-form__fields--inline">
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitNumberOfDays">
              {t('chinaVisitNumberOfDays', 'Rough number of days on site')}
            </label>
            <input
              id="chinaVisitNumberOfDays"
              className="sino-simple-form__input"
              type="number"
              min={0}
              value={formData.chinaVisit.numberOfDays ?? ''}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: {
                    ...prev.chinaVisit,
                    numberOfDays: event.target.value ? Number(event.target.value) : null,
                  },
                }))
              }
              placeholder={t('chinaVisitNumberOfDaysPlaceholder', 'e.g. 5')}
            />
          </div>
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label" htmlFor="chinaVisitNumberOfTravelers">
              {t('chinaVisitNumberOfTravelers', 'How many people are traveling?')}
            </label>
            <input
              id="chinaVisitNumberOfTravelers"
              className="sino-simple-form__input"
              type="number"
              min={1}
              value={formData.chinaVisit.numberOfTravelers ?? ''}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  chinaVisit: {
                    ...prev.chinaVisit,
                    numberOfTravelers: event.target.value ? Number(event.target.value) : null,
                  },
                }))
              }
              placeholder={t('chinaVisitNumberOfTravelersPlaceholder', 'e.g. 2')}
            />
          </div>
        </div>

        <div
          className={`sino-simple-form__subsection${
            showChinaVisitLogistics ? ' sino-simple-form__subsection--open' : ''
          }`}
        >
          <button
            type="button"
            className="sino-simple-form__subsection-toggle"
            onClick={() => setShowChinaVisitLogistics((prev) => !prev)}
          >
            <span className="sino-simple-form__subsection-label">
              {t('chinaVisitLogisticsTitle', 'Trip logistics (optional)')}
              <small>
                {t(
                  'chinaVisitLogisticsSubtitle',
                  'Open this if you also want help with guides, transport and hotels.'
                )}
              </small>
            </span>
            <span
              className={`sino-simple-form__subsection-chevron${
                showChinaVisitLogistics ? ' sino-simple-form__subsection-chevron--open' : ''
              }`}
            >
              ▾
            </span>
          </button>

          {showChinaVisitLogistics && (
            <div className="sino-simple-form__fields sino-simple-form__fields--rows">
              <div className="sino-simple-form__field">
                <label className="sino-simple-form__label">
                  {t('chinaVisitNeedGuide', 'Do you need a local guide / interpreter?')}
                </label>
                <div className="sino-simple-form__chips">
                  {[
                    { value: true, label: t('chinaVisitNeedGuideYes', 'Yes') },
                    { value: false, label: t('chinaVisitNeedGuideNo', 'No') },
                  ].map((option) => (
                    <button
                      key={String(option.value)}
                      type="button"
                      className={`sino-simple-chip${
                        formData.chinaVisit.needGuide === option.value
                          ? ' sino-simple-chip--active'
                          : ''
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          chinaVisit: {
                            ...prev.chinaVisit,
                            needGuide: option.value,
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
                  {t('chinaVisitNeedTransport', 'Do you need local transport arrangements?')}
                </label>
                <div className="sino-simple-form__chips">
                  {[
                    { value: true, label: t('chinaVisitNeedTransportYes', 'Yes') },
                    { value: false, label: t('chinaVisitNeedTransportNo', 'No') },
                  ].map((option) => (
                    <button
                      key={String(option.value)}
                      type="button"
                      className={`sino-simple-chip${
                        formData.chinaVisit.needTransport === option.value
                          ? ' sino-simple-chip--active'
                          : ''
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          chinaVisit: {
                            ...prev.chinaVisit,
                            needTransport: option.value,
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
                  {t('chinaVisitNeedHotels', 'Do you need help with hotel booking?')}
                </label>
                <div className="sino-simple-form__chips">
                  {[
                    { value: true, label: t('chinaVisitNeedHotelsYes', 'Yes') },
                    { value: false, label: t('chinaVisitNeedHotelsNo', 'No') },
                  ].map((option) => (
                    <button
                      key={String(option.value)}
                      type="button"
                      className={`sino-simple-chip${
                        formData.chinaVisit.needHotels === option.value
                          ? ' sino-simple-chip--active'
                          : ''
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          chinaVisit: {
                            ...prev.chinaVisit,
                            needHotels: option.value,
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
                <label className="sino-simple-form__label" htmlFor="chinaVisitNotes">
                  {t('chinaVisitNotes', 'Anything else about your trip we should know?')}
                </label>
                <textarea
                  id="chinaVisitNotes"
                  className="sino-simple-form__input sino-simple-form__input--textarea"
                  value={formData.chinaVisit.notes}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      chinaVisit: {
                        ...prev.chinaVisit,
                        notes: event.target.value,
                      },
                    }))
                  }
                  placeholder={t(
                    'chinaVisitNotesPlaceholder',
                    'Visa status, time constraints, budget, preferred hotel area, etc.'
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

export default SimpleChinaVisitSection;
