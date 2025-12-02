import type { FC } from 'react';
import type { SimpleFormData } from './context/types';
import { prepareSubmissionPayload, submitFormData } from './utils/submitForm';
import { validateStepFields } from './utils/validation';
import SimpleReviewSection from './SimpleReviewSection';

type SimpleFooterSectionProps = {
  formData: SimpleFormData;
} & {
  t: (key: string, fallback: string) => string;
  selectedServiceLabels: string[];
  submitError: string | null;
  setSubmitError: (value: string | null) => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
  scrollToFirstError: () => void;
  onSubmissionSuccess: (submissionId: string) => void;
  setFieldErrors: (
    errors: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)
  ) => void;
  setFieldTouched: (
    touched: Record<string, boolean> | ((prev: Record<string, boolean>) => Record<string, boolean>)
  ) => void;
  orderedSteps: string[];
  onEditStep: (stepIndex: number) => void;
};

const SimpleFooterSection: FC<SimpleFooterSectionProps> = ({
  formData,
  t,
  selectedServiceLabels,
  submitError,
  setSubmitError,
  isSubmitting,
  setIsSubmitting,
  scrollToFirstError,
  onSubmissionSuccess,
  setFieldErrors,
  setFieldTouched,
  orderedSteps,
  onEditStep,
}) => {
  return (
    <section className="sino-simple-form__section sino-simple-form__section--footer">
      <div className="sino-simple-form__footer">
        {/* Review Section */}
        <SimpleReviewSection
          formData={formData}
          t={t}
          selectedServiceLabels={selectedServiceLabels}
          orderedSteps={orderedSteps}
          onEditStep={onEditStep}
        />

        <div className="sino-simple-form__footer-text">
          <p className="sino-simple-form__footer-title">
            {t('simpleFooterTitle', 'Ready to get your plan?')}
          </p>
          <p id="sino-simple-form__footer-subtitle" className="sino-simple-form__footer-subtitle">
            {t(
              'simpleFooterSubtitle',
              'A SINO expert (not a bot) will email you a first quote within 24h (Mon–Fri).'
            )}
          </p>
          <p className="sino-simple-form__footer-trust">
            {t(
              'simpleFooterTrust',
              'No spam. Just one clear plan, with transparent pricing and timelines.'
            )}
          </p>
        </div>
        <div className="sino-simple-form__footer-actions">
          {submitError && <p className="sino-simple-form__footer-error">{submitError}</p>}
          <button
            type="button"
            className="sino-simple-form__cta-button"
            aria-label={t('getQuoteAria', 'Submit form to get your quote')}
            aria-describedby="sino-simple-form__footer-subtitle"
            onClick={async () => {
              if (isSubmitting) return;

              console.log(
                '[SimpleFooterSection] Button clicked, validating all required fields...'
              );

              // Determine which steps need validation based on selected services
              const shippingSelected =
                formData.servicesRequested?.shipping === undefined
                  ? true
                  : formData.servicesRequested.shipping;

              const stepsToValidate: string[] = [];
              if (shippingSelected) {
                stepsToValidate.push('shippingRoute', 'shippingCargo');
              }
              stepsToValidate.push('contact');

              // Validate all required steps
              const allErrors: Record<string, string> = {};
              const allTouched: Record<string, boolean> = {};

              for (const stepId of stepsToValidate) {
                const stepErrors = validateStepFields(
                  stepId,
                  formData as unknown as Record<string, unknown>
                );

                Object.entries(stepErrors).forEach(([fieldName, result]) => {
                  if (!result.valid && result.error) {
                    allErrors[fieldName] = result.error;
                    allTouched[fieldName] = true;
                  }
                });
              }

              // Update field errors and touched state
              setFieldErrors(allErrors);
              setFieldTouched((prev) => ({ ...prev, ...allTouched }));

              // Check if validation passed
              const hasErrors = Object.keys(allErrors).length > 0;

              if (hasErrors) {
                const errorFields = Object.keys(allErrors);
                console.error('[SimpleFooterSection] Validation failed for fields:', errorFields);

                // Create a user-friendly error message
                const errorCount = errorFields.length;
                const errorMsg =
                  errorCount === 1
                    ? t(
                        'simpleSubmitErrorSingle',
                        'Please complete the required field before submitting.'
                      )
                    : t(
                        'simpleSubmitErrorMultiple',
                        `Please complete ${errorCount} required fields before submitting.`
                      );

                setSubmitError(errorMsg);

                // Scroll to first error after a short delay to allow DOM update
                setTimeout(() => {
                  scrollToFirstError();
                }, 100);

                return;
              }

              console.log('[SimpleFooterSection] All validations passed, starting submission...');
              setSubmitError(null);
              setIsSubmitting(true);

              let errorHandled = false;

              try {
                console.log('[SimpleFooterSection] Preparing submission payload...');
                // Prepare the payload
                const { submissionId, payload } = prepareSubmissionPayload(formData);
                console.log('[SimpleFooterSection] Payload prepared, submissionId:', submissionId);

                // Submit to webhooks
                console.log('[SimpleFooterSection] Submitting to webhooks...');
                const resultSubmissionId = await submitFormData(payload, (errorMessage) => {
                  console.error('[SimpleFooterSection] Error callback triggered:', errorMessage);
                  errorHandled = true;
                  setSubmitError(errorMessage);
                });

                console.log(
                  '[SimpleFooterSection] Submission successful, calling onSubmissionSuccess with:',
                  resultSubmissionId
                );
                // On success, call the callback with submission ID
                onSubmissionSuccess(resultSubmissionId);
              } catch (error) {
                // Error is already handled in submitFormData via onError callback
                console.error('[SimpleFooterSection] Submission error caught:', error);
                // Make sure error is displayed even if onError wasn't called
                if (!errorHandled && error instanceof Error) {
                  const errorMessage = error.message || 'An error occurred. Please try again.';
                  console.error('[SimpleFooterSection] Setting error message:', errorMessage);
                  setSubmitError(errorMessage);
                }
              } finally {
                setIsSubmitting(false);
              }
            }}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t('simpleFooterCtaLoading', 'Sending your request…')
              : t('simpleFooterCta', 'Get my quote')}
          </button>
          <p className="sino-simple-form__footer-note">
            {t(
              'simpleFooterNote',
              'By submitting, you agree that SINO Shipping may contact you about this request.'
            )}
          </p>
        </div>

        {/* Trust Badges */}
        <div className="sino-simple-form__footer-trust-badges">
          <a
            href="https://www.sino-shipping.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="sino-simple-form__footer-trust-badge"
            aria-label={t('trustBadgeGDPR', 'GDPR Compliant')}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sino-simple-form__footer-trust-badge-text">
              {t('trustBadgeGDPR', 'GDPR Compliant')}
            </span>
          </a>
          <div
            className="sino-simple-form__footer-trust-badge"
            aria-label={t('trustBadgeSecure', 'Secure & Encrypted')}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="11"
                width="18"
                height="11"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 11V7a5 5 0 0 1 10 0v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sino-simple-form__footer-trust-badge-text">
              {t('trustBadgeSecure', 'Secure & Encrypted')}
            </span>
          </div>
          <div
            className="sino-simple-form__footer-trust-badge"
            aria-label={t('trustBadgeNoSpam', 'No Spam Guarantee')}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="18"
                y1="6"
                x2="18"
                y2="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="sino-simple-form__footer-trust-badge-text">
              {t('trustBadgeNoSpam', 'No Spam Guarantee')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleFooterSection;
