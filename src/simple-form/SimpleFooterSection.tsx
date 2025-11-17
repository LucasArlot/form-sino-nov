import type { FC } from 'react';
import type { QuoteFormContextValue } from '@/features/lead/context/QuoteFormTypes';

type SimpleFooterSectionProps = Pick<QuoteFormContextValue, 'formData'> & {
  t: (key: string, fallback: string) => string;
  selectedServiceLabels: string[];
  submitError: string | null;
  setSubmitError: (value: string | null) => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
  scrollToFirstError: () => void;
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
}) => {
  return (
    <section className="sino-simple-form__section sino-simple-form__section--footer">
      <div className="sino-simple-form__footer">
        <div className="sino-simple-form__footer-text">
          {selectedServiceLabels.length > 0 && (
            <p className="sino-simple-form__hint sino-simple-form__hint--secondary">
              {t('simpleServicesSummaryPrefix', 'Your plan will cover:')}{' '}
              {selectedServiceLabels.join(', ')}
            </p>
          )}
          <p className="sino-simple-form__footer-title">
            {t('simpleFooterTitle', 'Ready to get your plan?')}
          </p>
          <p className="sino-simple-form__footer-subtitle">
            {t(
              'simpleFooterSubtitle',
              'A freight expert (not a bot) will email you a first quote within 24h (Mon–Fri).'
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
            onClick={() => {
              if (isSubmitting) return;

              const trimmedEmail = formData.email.trim();
              const trimmedPhone = formData.phone.trim();
              const trimmedFirstName = formData.firstName.trim();

              if (!trimmedEmail || !trimmedPhone || !trimmedFirstName) {
                setSubmitError(
                  t(
                    'simpleSubmitErrorContact',
                    'Please add at least your first name, email and phone number so we can send your plan.'
                  )
                );
                scrollToFirstError();
                return;
              }

              setSubmitError(null);
              setIsSubmitting(true);
              // Temporary: simulate async submit. Next step will reuse the main QuoteForm submission pipeline.
               
              console.log('[SimpleQuoteForm] Get my quote clicked', formData);
              setTimeout(() => {
                setIsSubmitting(false);
              }, 800);
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
      </div>
    </section>
  );
};

export default SimpleFooterSection;
