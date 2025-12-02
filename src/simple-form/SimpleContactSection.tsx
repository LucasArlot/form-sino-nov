import type { FC, ChangeEvent, RefObject } from 'react';
import type { SimpleFormProps } from './context/types';
import SimpleStepProgress from './SimpleStepProgress';
import SimpleTestimonials from './SimpleTestimonials';

type SimpleContactSectionProps = SimpleFormProps & {
  t: (key: string, fallback: string) => string;
  isFilled: (value: string | undefined | null) => boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (fieldName: string, value: string | undefined | null) => void;
  fieldErrors: Record<string, string>;
  fieldTouched: Record<string, boolean>;
  firstNameRef: RefObject<HTMLInputElement>;
  emailRef: RefObject<HTMLInputElement>;
  phoneRef: RefObject<HTMLInputElement>;
  stepLabel?: string;
  currentStepIndex: number;
  totalSteps: number;
};

const SimpleContactSection: FC<SimpleContactSectionProps> = ({
  formData,
  setFormData,
  t,
  isFilled,
  onChange,
  onBlur,
  fieldErrors,
  fieldTouched,
  firstNameRef,
  emailRef,
  phoneRef,
  stepLabel,
  currentStepIndex,
  totalSteps,
}) => {
  return (
    <section className="sino-simple-form__section sino-simple-form__section--contact">
      <h2 className="sino-simple-form__section-title">
        <span className="sino-simple-form__section-step">{stepLabel ?? 'Step 4'}</span>
        <span>{t('simpleStep5Title', 'Your details')}</span>
      </h2>

      <SimpleStepProgress
        stepId="contact"
        formData={formData}
        currentStepIndex={currentStepIndex}
        totalSteps={totalSteps}
        t={t}
      />

      <p className="sino-simple-form__hint">
        {t(
          'simpleStep5Hint',
          'Use a work email and a phone with WhatsApp if possible – it makes the follow-up much smoother. Not sure about every detail yet? That is normal – we will help you structure the shipment.'
        )}
      </p>

      {/* Testimonials */}
      <SimpleTestimonials t={t} count={2} />

      <div className="sino-simple-form__group">
        <p className="sino-simple-form__group-title">{t('aboutYouTitle', 'About you')}</p>
        <div className="sino-simple-form__fields sino-simple-form__fields--rows">
          <div className="sino-simple-form__field">
            <label className="sino-simple-form__label">
              {t('customerType', 'Are you a company or an individual?')}
            </label>
            <div className="sino-simple-form__chips">
              {[
                { value: 'company', label: t('customerTypeCompany', 'Company') },
                { value: 'individual', label: t('customerTypeIndividual', 'Individual') },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`sino-simple-chip${
                    formData.customerType === option.value ? ' sino-simple-chip--active' : ''
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      customerType:
                        prev.customerType === option.value
                          ? ''
                          : (option.value as typeof formData.customerType),
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
              {t('shipperType', 'How often do you ship from China?')}
            </label>
            <div className="sino-simple-form__chips sino-simple-form__chips--wrap">
              {[
                { value: 'first-time', label: t('shipperFirstTime', "It's my first time") },
                {
                  value: 'up-to-10x',
                  label: t('shipperFewTimes', 'A few times per year (up to ~10 shipments)'),
                },
                {
                  value: 'more-than-10x',
                  label: t('shipperMoreThan10', 'More than 10 shipments per year'),
                },
                { value: 'regular', label: t('shipperRegular', 'Regular shipper') },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`sino-simple-chip${
                    formData.shipperType === option.value ? ' sino-simple-chip--active' : ''
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      shipperType: prev.shipperType === option.value ? '' : option.value,
                    }))
                  }
                  aria-pressed={formData.shipperType === option.value ? 'true' : 'false'}
                  aria-label={`${option.label}${formData.shipperType === option.value ? ', selected' : ', not selected'}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setFormData((prev) => ({
                        ...prev,
                        shipperType: prev.shipperType === option.value ? '' : option.value,
                      }));
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="sino-simple-form__group-title">
        {t('contactDetailsTitle', 'How we contact you')}
      </p>

      <div className="sino-simple-form__fields sino-simple-form__fields--rows">
        <div
          className={`sino-simple-form__field${
            fieldTouched.firstName && fieldErrors.firstName ? ' sino-simple-form__field--error' : ''
          }${
            fieldTouched.firstName && !fieldErrors.firstName && isFilled(formData.firstName)
              ? ' sino-simple-form__field--success'
              : ''
          }`}
        >
          <label className="sino-simple-form__label" htmlFor="firstName">
            {t('firstName', 'First name')}
            <span className="sino-simple-form__required" aria-label="required">
              *
            </span>
          </label>
          <div className="sino-simple-form__field-wrapper">
            <input
              className={`sino-simple-form__input${
                fieldErrors.firstName ? ' sino-simple-form__input--error' : ''
              }${
                fieldTouched.firstName && !fieldErrors.firstName && isFilled(formData.firstName)
                  ? ' sino-simple-form__input--success'
                  : ''
              }`}
              type="text"
              name="firstName"
              id="firstName"
              ref={firstNameRef}
              value={formData.firstName}
              onChange={onChange}
              onBlur={() => onBlur('firstName', formData.firstName)}
              placeholder={t('firstNamePlaceholder', 'John')}
              aria-label={t('firstName', 'First name')}
              aria-describedby={
                fieldErrors.firstName
                  ? 'firstName-error'
                  : fieldTouched.firstName && !fieldErrors.firstName && isFilled(formData.firstName)
                    ? 'firstName-success'
                    : undefined
              }
              aria-invalid={fieldErrors.firstName ? 'true' : 'false'}
              aria-required="true"
            />
            {fieldTouched.firstName && (
              <>
                {fieldErrors.firstName && (
                  <span
                    className="sino-simple-form__field-icon sino-simple-form__field-icon--error"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <line
                        x1="12"
                        y1="8"
                        x2="12"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="12"
                        y1="16"
                        x2="12.01"
                        y2="16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                )}
                {!fieldErrors.firstName && isFilled(formData.firstName) && (
                  <span
                    className="sino-simple-form__field-icon sino-simple-form__field-icon--success"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M8 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </>
            )}
          </div>
          {fieldErrors.firstName && (
            <p
              id="firstName-error"
              className="sino-simple-form__field-error"
              role="alert"
              aria-live="polite"
            >
              {fieldErrors.firstName}
            </p>
          )}
          {fieldTouched.firstName && !fieldErrors.firstName && isFilled(formData.firstName) && (
            <p id="firstName-success" className="sino-simple-form__sr-only" aria-live="polite">
              {t('fieldValid', 'Field is valid')}
            </p>
          )}
        </div>

        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label" htmlFor="lastName">
            {t('lastName', 'Last name')}
          </label>
          <input
            className="sino-simple-form__input"
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={onChange}
            placeholder={t('lastNamePlaceholder', 'Doe')}
          />
        </div>

        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label" htmlFor="companyName">
            {t('companyName', 'Company name')}
            <span className="sino-simple-form__label-hint">
              {t('ifApplicable', 'if applicable')}
            </span>
          </label>
          <input
            className="sino-simple-form__input"
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={onChange}
            placeholder={t('companyNamePlaceholder', 'Your company')}
          />
        </div>

        <div
          className={`sino-simple-form__field${
            fieldTouched.email && fieldErrors.email ? ' sino-simple-form__field--error' : ''
          }${
            fieldTouched.email && !fieldErrors.email && isFilled(formData.email)
              ? ' sino-simple-form__field--success'
              : ''
          }`}
        >
          <label className="sino-simple-form__label" htmlFor="email">
            {t('email', 'Work email')}
            <span className="sino-simple-form__required" aria-label="required">
              *
            </span>
          </label>
          <div className="sino-simple-form__field-wrapper">
            <input
              className={`sino-simple-form__input${
                fieldErrors.email ? ' sino-simple-form__input--error' : ''
              }${
                fieldTouched.email && !fieldErrors.email && isFilled(formData.email)
                  ? ' sino-simple-form__input--success'
                  : ''
              }`}
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              value={formData.email}
              onChange={onChange}
              onBlur={() => onBlur('email', formData.email)}
              placeholder={t('emailPlaceholder', 'you@example.com')}
              aria-label={t('email', 'Work email')}
              aria-describedby={
                fieldErrors.email
                  ? 'email-error'
                  : fieldTouched.email && !fieldErrors.email && isFilled(formData.email)
                    ? 'email-success'
                    : undefined
              }
              aria-invalid={fieldErrors.email ? 'true' : 'false'}
              aria-required="true"
            />
            {fieldTouched.email && (
              <>
                {fieldErrors.email && (
                  <span
                    className="sino-simple-form__field-icon sino-simple-form__field-icon--error"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <line
                        x1="12"
                        y1="8"
                        x2="12"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="12"
                        y1="16"
                        x2="12.01"
                        y2="16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                )}
                {!fieldErrors.email && isFilled(formData.email) && (
                  <span
                    className="sino-simple-form__field-icon sino-simple-form__field-icon--success"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M8 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </>
            )}
          </div>
          {fieldErrors.email && (
            <p
              id="email-error"
              className="sino-simple-form__field-error"
              role="alert"
              aria-live="polite"
            >
              {fieldErrors.email}
            </p>
          )}
          {fieldTouched.email && !fieldErrors.email && isFilled(formData.email) && (
            <p id="email-success" className="sino-simple-form__sr-only" aria-live="polite">
              {t('fieldValid', 'Field is valid')}
            </p>
          )}
        </div>

        <div
          className={`sino-simple-form__field${
            fieldTouched.phone && fieldErrors.phone ? ' sino-simple-form__field--error' : ''
          }${
            fieldTouched.phone && !fieldErrors.phone && isFilled(formData.phone)
              ? ' sino-simple-form__field--success'
              : ''
          }`}
        >
          <label className="sino-simple-form__label" htmlFor="phone">
            {t('phone', 'Phone number (with country code)')}
            <span className="sino-simple-form__required" aria-label="required">
              *
            </span>
          </label>
          <div className="sino-simple-form__field-wrapper">
            <input
              className={`sino-simple-form__input${
                fieldErrors.phone ? ' sino-simple-form__input--error' : ''
              }${
                fieldTouched.phone && !fieldErrors.phone && isFilled(formData.phone)
                  ? ' sino-simple-form__input--success'
                  : ''
              }`}
              type="tel"
              name="phone"
              id="phone"
              ref={phoneRef}
              value={formData.phone}
              onChange={onChange}
              onBlur={() => onBlur('phone', formData.phone)}
              placeholder={t('phonePlaceholder', '+33…')}
              aria-label={t('phone', 'Phone number (with country code)')}
              aria-describedby={
                fieldErrors.phone
                  ? 'phone-error'
                  : fieldTouched.phone && !fieldErrors.phone && isFilled(formData.phone)
                    ? 'phone-success'
                    : undefined
              }
              aria-invalid={fieldErrors.phone ? 'true' : 'false'}
              aria-required="true"
            />
            {fieldTouched.phone && (
              <>
                {fieldErrors.phone && (
                  <span
                    className="sino-simple-form__field-icon sino-simple-form__field-icon--error"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <line
                        x1="12"
                        y1="8"
                        x2="12"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="12"
                        y1="16"
                        x2="12.01"
                        y2="16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                )}
                {!fieldErrors.phone && isFilled(formData.phone) && (
                  <span
                    className="sino-simple-form__field-icon sino-simple-form__field-icon--success"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M8 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </>
            )}
          </div>
          {fieldErrors.phone && (
            <p
              id="phone-error"
              className="sino-simple-form__field-error"
              role="alert"
              aria-live="polite"
            >
              {fieldErrors.phone}
            </p>
          )}
          {fieldTouched.phone && !fieldErrors.phone && isFilled(formData.phone) && (
            <p id="phone-success" className="sino-simple-form__sr-only" aria-live="polite">
              {t('fieldValid', 'Field is valid')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SimpleContactSection;
