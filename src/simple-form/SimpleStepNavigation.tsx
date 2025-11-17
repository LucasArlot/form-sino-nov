import type { FC } from 'react';

type SimpleStepNavigationProps = {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  t: (key: string, fallback: string) => string;
};

const SimpleStepNavigation: FC<SimpleStepNavigationProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  isFirstStep,
  isLastStep,
  t,
}) => {
  return (
    <div className="sino-simple-form__step-navigation">
      <div className="sino-simple-form__step-progress">
        <span className="sino-simple-form__step-counter">
          {t('stepCounter', 'Step {current} of {total}')
            .replace('{current}', String(currentStep + 1))
            .replace('{total}', String(totalSteps))}
        </span>
        <div className="sino-simple-form__step-progress-bar">
          <div
            className="sino-simple-form__step-progress-fill"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <div className="sino-simple-form__step-buttons">
        {!isFirstStep && (
          <button
            type="button"
            className="sino-simple-form__step-button sino-simple-form__step-button--previous"
            onClick={onPrevious}
          >
            {t('previousStep', 'Previous')}
          </button>
        )}
        <button
          type="button"
          className="sino-simple-form__step-button sino-simple-form__step-button--next"
          onClick={onNext}
        >
          {isLastStep ? t('review', 'Review') : t('nextStep', 'Next')}
        </button>
      </div>
    </div>
  );
};

export default SimpleStepNavigation;
