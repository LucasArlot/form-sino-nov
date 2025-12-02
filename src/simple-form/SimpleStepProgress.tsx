import type { FC } from 'react';
import type { SimpleFormData } from './context/types';
import { getStepProgress, getStepLabel } from './utils/stepProgress';

type StepId =
  | 'services'
  | 'shippingRoute'
  | 'shippingCargo'
  | 'sourcing'
  | 'warehousing'
  | 'dropshipping'
  | 'qc'
  | 'chinaVisit'
  | 'contact';

type SimpleStepProgressProps = {
  stepId: StepId;
  formData: SimpleFormData;
  currentStepIndex: number;
  totalSteps: number;
  t: (key: string, fallback: string) => string;
};

const SimpleStepProgress: FC<SimpleStepProgressProps> = ({
  stepId,
  formData,
  // These are kept for potential future use (e.g., "Step X of Y" display)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentStepIndex,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  totalSteps,
  t,
}) => {
  const progress = getStepProgress(stepId, formData);
  const stepLabel = getStepLabel(stepId, t);

  // Don't show progress for services step (always complete)
  if (stepId === 'services' || progress.total === 0) {
    return null;
  }

  return (
    <div className="sino-simple-form__step-progress-indicator">
      <div className="sino-simple-form__step-progress-header">
        <span className="sino-simple-form__step-progress-label">{stepLabel}</span>
        <span className="sino-simple-form__step-progress-count">
          {progress.filled}/{progress.total} {t('stepProgressFields', 'fields')}
        </span>
      </div>
      <div className="sino-simple-form__step-progress-bar-container">
        <div
          className="sino-simple-form__step-progress-bar-fill"
          style={{ width: `${progress.percentage}%` }}
          role="progressbar"
          aria-valuenow={progress.percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${stepLabel}: ${progress.filled} of ${progress.total} fields completed`}
        />
      </div>
    </div>
  );
};

export default SimpleStepProgress;
