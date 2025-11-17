import type { FC, ChangeEvent, RefObject } from 'react';
import type { QuoteFormContextValue } from '@/features/lead/context/QuoteFormTypes';

type SimpleContactSectionProps = Pick<QuoteFormContextValue, 'formData' | 'setFormData'> & {
  t: (key: string, fallback: string) => string;
  isFilled: (value: string | undefined | null) => boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  firstNameRef: RefObject<HTMLInputElement>;
  emailRef: RefObject<HTMLInputElement>;
  phoneRef: RefObject<HTMLInputElement>;
  stepLabel?: string;
};

const SimpleContactSection: FC<SimpleContactSectionProps> = ({
  formData,
  setFormData,
  t,
  isFilled,
  onChange,
  firstNameRef,
  emailRef,
  phoneRef,
  stepLabel,
}) => {
  return (
    <section className="sino-simple-form__section sino-simple-form__section--contact">
      <h2 className="sino-simple-form__section-title">
        <span className="sino-simple-form__section-step">{stepLabel ?? 'Step 4'}</span>
        <span>{t('simpleStep5Title', 'Your details')}</span>
      </h2>

      <p className="sino-simple-form__hint">
        {t(
          'simpleStep5Hint',
          'Use a work email and a phone with WhatsApp if possible – it makes the follow-up much smoother. Not sure about every detail yet? That’s normal – we’ll help you structure the shipment.'
        )}
      </p>

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
                      customerType: option.value as typeof formData.customerType,
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
                      shipperType: option.value,
                    }))
                  }
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
        <div className="sino-simple-form__field">
          <label className="sino-simple-form__label" htmlFor="firstName">
            {t('firstName', 'First name')}
            <span className="sino-simple-form__required">*</span>
          </label>
          <input
            className="sino-simple-form__input"
            type="text"
            name="firstName"
            id="firstName"
            ref={firstNameRef}
            value={formData.firstName}
            onChange={onChange}
            placeholder={t('firstNamePlaceholder', 'John')}
          />
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
            {t('companyName', 'Company name (optional)')}
            <span className="sino-simple-form__optional">Optional</span>
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
            isFilled(formData.email) ? ' sino-simple-form__field--filled' : ''
          }`}
        >
          <label className="sino-simple-form__label" htmlFor="email">
            {t('email', 'Work email')}
            <span className="sino-simple-form__required">*</span>
          </label>
          <input
            className="sino-simple-form__input"
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            value={formData.email}
            onChange={onChange}
            placeholder={t('emailPlaceholder', 'you@example.com')}
          />
        </div>

        <div
          className={`sino-simple-form__field${
            isFilled(formData.phone) ? ' sino-simple-form__field--filled' : ''
          }`}
        >
          <label className="sino-simple-form__label" htmlFor="phone">
            {t('phone', 'Phone number (with country code)')}
            <span className="sino-simple-form__required">*</span>
          </label>
          <input
            className="sino-simple-form__input"
            type="tel"
            name="phone"
            id="phone"
            ref={phoneRef}
            value={formData.phone}
            onChange={onChange}
            placeholder={t('phonePlaceholder', '+33…')}
          />
        </div>
      </div>
    </section>
  );
};

export default SimpleContactSection;
