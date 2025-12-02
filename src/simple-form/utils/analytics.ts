/**
 * Analytics and tracking utilities for the simple quote form
 * Supports Google Analytics (gtag) and Plausible
 */

// These types are defined for documentation and future use
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AnalyticsEvent = {
  name: string;
  properties?: Record<string, unknown>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type StepTrackingData = {
  stepId: string;
  stepIndex: number;
  timeSpent: number; // in seconds
  fieldsFilled: number;
  totalFields: number;
  errors: string[]; // field names with errors
};

type FormTrackingData = {
  sessionId: string;
  startTime: number;
  currentStep: string;
  stepsCompleted: string[];
  totalTime: number;
  completionRate: number;
  problematicFields: Record<string, number>; // field name -> error count
};

// Store tracking data in memory (could be persisted to localStorage if needed)
let formTrackingData: FormTrackingData | null = null;
let stepStartTime: number | null = null;
let currentStepId: string | null = null;

/**
 * Initialize form tracking
 */
export function initFormTracking(sessionId: string): void {
  formTrackingData = {
    sessionId,
    startTime: Date.now(),
    currentStep: 'services',
    stepsCompleted: [],
    totalTime: 0,
    completionRate: 0,
    problematicFields: {},
  };
  stepStartTime = Date.now();
  currentStepId = 'services';

  // Track form start
  trackEvent('form_started', {
    session_id: sessionId,
  });
}

/**
 * Track step change
 */
export function trackStepChange(
  fromStep: string,
  toStep: string,
  stepIndex: number,
  totalSteps: number
): void {
  if (!formTrackingData) return;

  // Calculate time spent on previous step
  if (stepStartTime && currentStepId) {
    const timeSpent = Math.round((Date.now() - stepStartTime) / 1000);

    trackEvent('step_completed', {
      step_id: fromStep,
      step_index: stepIndex - 1,
      time_spent: timeSpent,
      total_steps: totalSteps,
    });

    // Update form tracking data
    formTrackingData.stepsCompleted.push(fromStep);
    formTrackingData.totalTime += timeSpent;
  }

  // Start tracking new step
  stepStartTime = Date.now();
  currentStepId = toStep;
  formTrackingData.currentStep = toStep;

  trackEvent('step_changed', {
    from_step: fromStep,
    to_step: toStep,
    step_index: stepIndex,
    total_steps: totalSteps,
  });
}

/**
 * Track field error
 */
export function trackFieldError(fieldName: string, errorMessage: string): void {
  if (!formTrackingData) return;

  // Increment error count for this field
  formTrackingData.problematicFields[fieldName] =
    (formTrackingData.problematicFields[fieldName] || 0) + 1;

  trackEvent('field_error', {
    field_name: fieldName,
    error_message: errorMessage,
    error_count: formTrackingData.problematicFields[fieldName],
  });
}

/**
 * Track field completion
 */
export function trackFieldCompleted(fieldName: string, stepId: string): void {
  trackEvent('field_completed', {
    field_name: fieldName,
    step_id: stepId,
  });
}

/**
 * Track form submission
 */
export function trackFormSubmission(
  submissionId: string,
  // formData kept for potential future detailed analytics
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _formData: Record<string, unknown>
): void {
  if (!formTrackingData) return;

  // Calculate final time
  const finalTime = Math.round((Date.now() - formTrackingData.startTime) / 1000);

  // Calculate completion rate
  const allSteps = ['services', 'shippingRoute', 'shippingCargo', 'contact'];
  const completionRate = (formTrackingData.stepsCompleted.length / allSteps.length) * 100;

  trackEvent('form_submitted', {
    submission_id: submissionId,
    session_id: formTrackingData.sessionId,
    total_time: finalTime,
    completion_rate: completionRate,
    steps_completed: formTrackingData.stepsCompleted.length,
    problematic_fields: Object.keys(formTrackingData.problematicFields),
    error_count: Object.values(formTrackingData.problematicFields).reduce(
      (sum, count) => sum + count,
      0
    ),
  });

  // Track most problematic fields
  const sortedFields = Object.entries(formTrackingData.problematicFields)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 5);

  if (sortedFields.length > 0) {
    trackEvent('form_problematic_fields', {
      submission_id: submissionId,
      fields: sortedFields.map(([field]) => field),
      error_counts: sortedFields.map(([, count]) => count),
    });
  }
}

/**
 * Track form abandonment
 */
export function trackFormAbandonment(): void {
  if (!formTrackingData || !currentStepId) return;

  // Calculate time spent on current step
  const currentStepTime = stepStartTime ? Math.round((Date.now() - stepStartTime) / 1000) : 0;

  const totalTime = Math.round((Date.now() - formTrackingData.startTime) / 1000);

  trackEvent('form_abandoned', {
    session_id: formTrackingData.sessionId,
    abandoned_at_step: currentStepId,
    step_index: formTrackingData.stepsCompleted.length,
    time_on_current_step: currentStepTime,
    total_time: totalTime,
    steps_completed: formTrackingData.stepsCompleted.length,
    problematic_fields: Object.keys(formTrackingData.problematicFields),
  });
}

/**
 * Track step time (for periodic updates)
 */
export function trackStepTime(stepId: string, timeSpent: number): void {
  trackEvent('step_time_update', {
    step_id: stepId,
    time_spent: timeSpent,
  });
}

/**
 * Generic event tracking function
 * Supports both Google Analytics (gtag) and Plausible
 */
export function trackEvent(eventName: string, properties?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  // Google Analytics (gtag)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      event_category: 'Simple Quote Form',
      ...properties,
    });
  }

  // Plausible
  if (typeof window.plausible === 'function') {
    window.plausible(eventName, {
      props: properties,
    });
  }

  // Console log in development
  if (import.meta.env.DEV) {
    console.log('[Analytics]', eventName, properties);
  }
}

/**
 * Track page view (if needed)
 */
export function trackPageView(pageName: string): void {
  trackEvent('page_view', {
    page_name: pageName,
  });
}

/**
 * Get current tracking data (for debugging)
 */
export function getTrackingData(): FormTrackingData | null {
  return formTrackingData;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}
