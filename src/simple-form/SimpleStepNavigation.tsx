import type { FC } from 'react';
import type { SimpleFormData } from './context/types';
import SimpleTimeEstimate from './SimpleTimeEstimate';

type SimpleStepNavigationProps = {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  orderedSteps: string[];
  formData: SimpleFormData;
  t: (key: string, fallback: string) => string;
};

const SimpleStepNavigation: FC<SimpleStepNavigationProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  isFirstStep,
  isLastStep,
  orderedSteps,
  formData,
  t,
}) => {
  return (
    <div className="sino-simple-form__step-navigation">
      <div className="sino-simple-form__step-progress">
        <div className="sino-simple-form__step-progress-bar">
          <div
            className="sino-simple-form__step-progress-fill"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Time Estimate */}
      <SimpleTimeEstimate
        currentStepIndex={currentStep}
        totalSteps={totalSteps}
        orderedSteps={orderedSteps}
        formData={formData}
        t={t}
      />

      <div className="sino-simple-form__step-buttons">
        {!isFirstStep && (
          <button
            type="button"
            className="sino-simple-form__step-button sino-simple-form__step-button--previous"
            onClick={onPrevious}
            aria-label={t(
              'previousStepAria',
              `Go to previous step, step ${currentStep} of ${totalSteps}`
            )}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onPrevious();
              }
            }}
          >
            <span className="sino-simple-form__step-button-arrow" aria-hidden="true">
              ←
            </span>
            {t('previousStep', 'Previous')}
          </button>
        )}
        {!isLastStep && (
          <button
            type="button"
            className="sino-simple-form__step-button sino-simple-form__step-button--next"
            onClick={onNext}
            aria-label={t(
              'nextStepAria',
              `Go to next step, step ${currentStep + 2} of ${totalSteps}`
            )}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNext();
              }
            }}
          >
            {t('nextStep', 'Next')}
            <span className="sino-simple-form__step-button-arrow" aria-hidden="true">
              →
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SimpleStepNavigation;
