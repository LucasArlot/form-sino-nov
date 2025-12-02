import type { SimpleFormData } from '../context/types';
import { getStepProgress } from './stepProgress';

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

/**
 * Calculate estimated time remaining based on:
 * - Number of remaining steps
 * - Fields filled vs total fields across all steps
 */
export function calculateTimeEstimate(
  currentStepIndex: number,
  totalSteps: number,
  orderedSteps: string[],
  formData: SimpleFormData
): {
  minutes: number;
  message: string;
  isAlmostDone: boolean;
} {
  const remainingSteps = totalSteps - (currentStepIndex + 1);

  // If on last step or past it
  if (remainingSteps <= 0) {
    return {
      minutes: 0,
      message: 'Almost done!',
      isAlmostDone: true,
    };
  }

  // Calculate overall completion percentage across all steps
  // Currently we track progress per step instead of overall
  // let totalFields = 0;
  // let filledFields = 0;
  // for (const stepId of orderedSteps) {
  //   const progress = getStepProgress(stepId as StepId, formData);
  //   totalFields += progress.total;
  //   filledFields += progress.filled;
  // }
  // const overallCompletion = totalFields > 0 ? filledFields / totalFields : 0;

  // Base time estimates (in seconds per step)
  // Reduced times as the form fills quickly
  const stepTimeEstimates: Record<string, number> = {
    services: 15,
    shippingRoute: 45,
    shippingCargo: 60,
    contact: 30,
    sourcing: 45,
    warehousing: 45,
    dropshipping: 45,
    qc: 45,
    chinaVisit: 60,
  };

  // Calculate time for remaining steps
  let estimatedSeconds = 0;
  for (let i = currentStepIndex + 1; i < orderedSteps.length; i++) {
    const stepId = orderedSteps[i];
    const baseTime = stepTimeEstimates[stepId] || 90;

    // Adjust based on completion: if user is filling quickly, reduce estimate
    // If many fields already filled, reduce estimate
    const currentStepProgress = getStepProgress(stepId as StepId, formData);
    const stepCompletion =
      currentStepProgress.total > 0 ? currentStepProgress.filled / currentStepProgress.total : 0;

    // Reduce time if step is already partially completed
    const adjustedTime = baseTime * (1 - stepCompletion * 0.5);
    estimatedSeconds += adjustedTime;
  }

  // Convert to minutes (round up)
  const minutes = Math.ceil(estimatedSeconds / 60);

  // Generate message
  let message: string;
  if (minutes <= 1) {
    message = 'Almost done!';
  } else if (minutes <= 2) {
    message = `~${minutes} minute${minutes > 1 ? 's' : ''} remaining`;
  } else {
    message = `~${minutes} minutes remaining`;
  }

  return {
    minutes,
    message,
    isAlmostDone: minutes <= 1,
  };
}
