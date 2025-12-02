import type { FC } from 'react';
import { useMemo } from 'react';
import type { SimpleFormData } from './context/types';
import { calculateTimeEstimate } from './utils/timeEstimate';

type SimpleTimeEstimateProps = {
  currentStepIndex: number;
  totalSteps: number;
  orderedSteps: string[];
  formData: SimpleFormData;
  t: (key: string, fallback: string) => string;
};

const SimpleTimeEstimate: FC<SimpleTimeEstimateProps> = ({
  currentStepIndex,
  totalSteps,
  orderedSteps,
  formData,
  t,
}) => {
  const estimate = useMemo(
    () => calculateTimeEstimate(currentStepIndex, totalSteps, orderedSteps, formData),
    [currentStepIndex, totalSteps, orderedSteps, formData]
  );

  return (
    <div
      className={`sino-simple-form__time-estimate${
        estimate.isAlmostDone ? ' sino-simple-form__time-estimate--almost-done' : ''
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="sino-simple-form__time-estimate-icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="12 6 12 12 16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="sino-simple-form__time-estimate-text">
        {estimate.isAlmostDone
          ? t('timeEstimateAlmostDone', estimate.message)
          : t('timeEstimateRemaining', estimate.message)}
      </span>
    </div>
  );
};

export default SimpleTimeEstimate;
