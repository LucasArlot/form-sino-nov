import type { FC } from 'react';
import type { SimpleFormProps } from './context/types';

type SimpleOtherSectionProps = SimpleFormProps & {
  t: (key: string, fallback: string) => string;
  stepLabel?: string;
};

const SimpleOtherSection: FC<SimpleOtherSectionProps> = ({
  formData,
  setFormData,
  t,
  stepLabel,
}) => {
  return (
    <>
      {formData.servicesRequested.other && (
        <section className="sino-simple-form__section sino-simple-form__section--service-other">
          <h2 className="sino-simple-form__section-title">
            <span className="sino-simple-form__section-step">
              <span className="sino-simple-form__step-label">Step</span>
              <span className="sino-simple-form__step-number">{stepLabel?.replace('Step ', '') ?? '?'}</span>
            </span>
            <span>{t('simpleOtherTitle', 'Tell us about your project')}</span>
          </h2>

          <p className="sino-simple-form__hint">
            {t(
              'simpleOtherHint',
              "Describe your project in detail and we'll route it to the right specialist."
            )}
          </p>

          <div className="sino-simple-form__fields sino-simple-form__fields--rows">
            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label">
                {t('otherProjectType', 'What type of project is this?')}
              </label>
              <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
                {[
                  { value: 'consulting', label: t('otherTypeConsulting', 'Consulting / Advice') },
                  { value: 'manufacturing', label: t('otherTypeManufacturing', 'Manufacturing') },
                  { value: 'import-export', label: t('otherTypeImportExport', 'Import / Export') },
                  { value: 'partnership', label: t('otherTypePartnership', 'Partnership') },
                  { value: 'other', label: t('otherTypeOther', 'Other') },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`sino-simple-chip${
                      formData.otherProject?.projectType === option.value
                        ? ' sino-simple-chip--active'
                        : ''
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        otherProject: {
                          ...prev.otherProject,
                          projectType:
                            prev.otherProject?.projectType === option.value ? '' : option.value,
                        },
                      }))
                    }
                    aria-pressed={
                      formData.otherProject?.projectType === option.value ? 'true' : 'false'
                    }
                    aria-label={`${option.label}${formData.otherProject?.projectType === option.value ? ', selected' : ', not selected'}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setFormData((prev) => ({
                          ...prev,
                          otherProject: {
                            ...prev.otherProject,
                            projectType:
                              prev.otherProject?.projectType === option.value ? '' : option.value,
                          },
                        }));
                      }
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="otherProjectDescription">
                {t('otherProjectDescription', 'Describe your project')}
                <span className="sino-simple-form__required" aria-label="required">
                  *
                </span>
              </label>
              <textarea
                id="otherProjectDescription"
                className="sino-simple-form__input sino-simple-form__input--textarea"
                rows={5}
                value={formData.otherProject?.description || ''}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    otherProject: {
                      ...prev.otherProject,
                      description: event.target.value,
                    },
                  }))
                }
                placeholder={t(
                  'otherProjectDescriptionPlaceholder',
                  'Tell us what you need help with: your goals, context, timeline, challenges…'
                )}
              />
              <p className="sino-simple-form__help">
                {t(
                  'otherProjectDescriptionHelp',
                  'The more detail you provide, the better we can assist you.'
                )}
              </p>
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="otherProjectBudget">
                {t('otherProjectBudget', 'Estimated budget')}
                <span className="sino-simple-form__label-hint">{t('ifKnown', 'if known')}</span>
              </label>
              <input
                id="otherProjectBudget"
                className="sino-simple-form__input"
                type="text"
                value={formData.otherProject?.budget || ''}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    otherProject: {
                      ...prev.otherProject,
                      budget: event.target.value,
                    },
                  }))
                }
                placeholder={t('otherProjectBudgetPlaceholder', 'e.g. $5,000 - $10,000')}
              />
            </div>

            <div className="sino-simple-form__field">
              <label className="sino-simple-form__label" htmlFor="otherProjectTimeline">
                {t('otherProjectTimeline', 'Expected timeline')}
                <span className="sino-simple-form__label-hint">{t('ifKnown', 'if known')}</span>
              </label>
              <input
                id="otherProjectTimeline"
                className="sino-simple-form__input"
                type="text"
                value={formData.otherProject?.timeline || ''}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    otherProject: {
                      ...prev.otherProject,
                      timeline: event.target.value,
                    },
                  }))
                }
                placeholder={t('otherProjectTimelinePlaceholder', 'e.g. Within 3 months')}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SimpleOtherSection;
