import type { FC } from 'react';
import { useEffect, useState } from 'react';

type SimpleSocialProofWidgetProps = {
  t: (key: string, fallback: string) => string;
};

const SimpleSocialProofWidget: FC<SimpleSocialProofWidgetProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Fade in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`sino-simple-form__social-proof-widget${isVisible ? ' sino-simple-form__social-proof-widget--visible' : ''}`}
      role="complementary"
      aria-label={t('socialProofAriaLabel', 'Social proof and trust indicators')}
    >
      <div className="sino-simple-form__social-proof-widget-content">
        <div className="sino-simple-form__social-proof-widget-header">
          <span className="sino-simple-form__social-proof-widget-title">
            {t('socialProofTitle', 'Trusted by')}
          </span>
        </div>

        <div className="sino-simple-form__social-proof-widget-items">
          <div className="sino-simple-form__social-proof-widget-item">
            <div className="sino-simple-form__social-proof-widget-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21v-2a4 4 0 0 0-3-3.87"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.13a4 4 0 0 1 0 7.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="sino-simple-form__social-proof-widget-text">
              <strong className="sino-simple-form__social-proof-widget-value">55,000+</strong>
              <span className="sino-simple-form__social-proof-widget-label">
                {t('socialProofCustomers', 'Satisfied Customers')}
              </span>
            </div>
          </div>

          <div className="sino-simple-form__social-proof-widget-item">
            <div className="sino-simple-form__social-proof-widget-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="sino-simple-form__social-proof-widget-text">
              <strong className="sino-simple-form__social-proof-widget-value">4.8/5</strong>
              <span className="sino-simple-form__social-proof-widget-label">
                {t('socialProofRating', 'Customer Satisfaction')}
              </span>
            </div>
          </div>

          <div className="sino-simple-form__social-proof-widget-item">
            <div className="sino-simple-form__social-proof-widget-icon">
              <svg
                width="20"
                height="20"
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
            <div className="sino-simple-form__social-proof-widget-text">
              <strong className="sino-simple-form__social-proof-widget-value">24h</strong>
              <span className="sino-simple-form__social-proof-widget-label">
                {t('socialProofResponse', 'Response Time')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSocialProofWidget;
