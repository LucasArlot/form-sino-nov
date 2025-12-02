import type { FC } from 'react';
import { useState, useEffect, useMemo } from 'react';
import type { SimpleFormData } from './context/types';
import { COUNTRIES } from '@/data/countries';

type SimpleConfirmationSectionProps = {
  submissionId: string;
  t: (key: string, fallback: string) => string;
  onStartNew: () => void;
  selectedServiceLabels: string[];
  formData: SimpleFormData;
};

const SimpleConfirmationSection: FC<SimpleConfirmationSectionProps> = ({
  submissionId,
  t,
  onStartNew,
  selectedServiceLabels,
  formData,
}) => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Confetti animation on mount
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'sino-simple-form__confetti-container';
    document.body.appendChild(confettiContainer);

    // Create confetti pieces
    const colors = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'sino-simple-form__confetti';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
      confettiContainer.appendChild(confetti);
    }

    // Cleanup after animation
    const cleanup = setTimeout(() => {
      confettiContainer.remove();
    }, 4000);

    return () => {
      clearTimeout(cleanup);
      if (confettiContainer.parentNode) {
        confettiContainer.remove();
      }
    };
  }, []);

  // Update time every minute for countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Calculate if it's a business day (Mon-Fri) and time remaining
  const responseTimeInfo = useMemo(() => {
    const now = currentTime;
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();

    const isBusinessDay = day >= 1 && day <= 5; // Monday to Friday
    const isBusinessHours = hour >= 9 && hour < 18; // 9 AM to 6 PM

    // Simple calculation: 24 hours from now (business days only)
    // If it's a business day and business hours, show countdown
    // Otherwise, show waiting message
    let hoursRemaining = 0;
    let minutesRemaining = 0;

    if (isBusinessDay && isBusinessHours) {
      // Calculate 24 hours from now
      const deadline = new Date(now.getTime() + 24 * 60 * 60 * 1000);
      const diff = deadline.getTime() - now.getTime();
      hoursRemaining = Math.max(0, Math.floor(diff / (1000 * 60 * 60)));
      minutesRemaining = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    }

    return {
      isBusinessDay,
      isBusinessHours,
      hoursRemaining,
      minutesRemaining,
      status: isBusinessDay && isBusinessHours ? 'active' : 'waiting',
    };
  }, [currentTime]);

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(submissionId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="sino-simple-form__section sino-simple-form__section--confirmation">
      <div className="sino-simple-form__confirmation">
        {/* Animated success icon */}
        <div className="sino-simple-form__confirmation-icon">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              className="sino-simple-form__confirmation-circle"
            />
            <path
              d="M8 12l2 2 4-4"
              stroke="#22c55e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sino-simple-form__confirmation-check"
            />
          </svg>
          <div className="sino-simple-form__confirmation-ripple"></div>
        </div>

        <h1 className="sino-simple-form__confirmation-title">
          {t('simpleConfirmationTitle', 'Request received!')}
        </h1>

        <p className="sino-simple-form__confirmation-subtitle">
          {t(
            'simpleConfirmationSubtitle',
            'A SINO expert (not a bot) will email you a first quote within 24h (Mon–Fri).'
          )}
        </p>

        {/* Email and response time - unified block */}
        <div className="sino-simple-form__confirmation-info-block">
          {formData.email && (
            <div className="sino-simple-form__confirmation-email">
              <div className="sino-simple-form__confirmation-email-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="sino-simple-form__confirmation-email-content">
                <strong>{t('confirmationEmailTitle', 'Check your inbox')}</strong>
                <span>
                  {t('confirmationEmailText', 'Confirmation email sent to')}{' '}
                  <strong>{formData.email}</strong>
                </span>
              </div>
            </div>
          )}
          <div
            className={`sino-simple-form__confirmation-response-time ${responseTimeInfo.status === 'active' ? 'sino-simple-form__confirmation-response-time--active' : ''}`}
          >
            <div className="sino-simple-form__confirmation-response-time-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <polyline
                  points="12 6 12 12 16 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="sino-simple-form__confirmation-response-time-content">
              <strong>{t('confirmationResponseTime', 'Response time: 24h (Mon–Fri)')}</strong>
              {responseTimeInfo.status === 'waiting' && (
                <span className="sino-simple-form__confirmation-response-time-status">
                  {!responseTimeInfo.isBusinessDay
                    ? t(
                        'confirmationResponseTimeWeekend',
                        'Response will start on next business day'
                      )
                    : t(
                        'confirmationResponseTimeAfterHours',
                        'Response will start during business hours'
                      )}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Social proof badges - 4 badges only */}
        <div className="sino-simple-form__confirmation-badges">
          <div className="sino-simple-form__confirmation-badge">
            <div className="sino-simple-form__confirmation-badge-content">
              <strong className="sino-simple-form__confirmation-badge-value">55,000+</strong>
              <span className="sino-simple-form__confirmation-badge-label">
                {t('confirmationBadgeClients', 'Satisfied Customers')}
                <small className="sino-simple-form__confirmation-badge-sublabel">since 1989</small>
              </span>
            </div>
          </div>
          <div className="sino-simple-form__confirmation-badge">
            <div className="sino-simple-form__confirmation-badge-content">
              <strong className="sino-simple-form__confirmation-badge-value">400+</strong>
              <span className="sino-simple-form__confirmation-badge-label">
                {t('confirmationBadgeTeam', 'Professional Team Members')}
                <small className="sino-simple-form__confirmation-badge-sublabel">In China</small>
              </span>
            </div>
          </div>
          <div className="sino-simple-form__confirmation-badge">
            <div className="sino-simple-form__confirmation-badge-content">
              <strong className="sino-simple-form__confirmation-badge-value">8</strong>
              <span className="sino-simple-form__confirmation-badge-label">
                {t('confirmationBadgeOffices', 'Wholly Owned Offices')}
                <small className="sino-simple-form__confirmation-badge-sublabel">In China</small>
              </span>
            </div>
          </div>
          <div className="sino-simple-form__confirmation-badge">
            <div className="sino-simple-form__confirmation-badge-content">
              <strong className="sino-simple-form__confirmation-badge-value">519,000+</strong>
              <span className="sino-simple-form__confirmation-badge-label">
                {t('confirmationBadgeCFS', 'CFS Facility Nationwide')}
                <small className="sino-simple-form__confirmation-badge-sublabel">m²</small>
              </span>
            </div>
          </div>
        </div>

        {/* Summary and reference - compact card */}
        <div className="sino-simple-form__confirmation-details-card">
          {(selectedServiceLabels.length > 0 || formData.country) && (
            <div className="sino-simple-form__confirmation-summary">
              <h3 className="sino-simple-form__confirmation-summary-title">
                {t('confirmationSummaryTitle', 'Your request summary')}
              </h3>
              <div className="sino-simple-form__confirmation-summary-content">
                {selectedServiceLabels.length > 0 && (
                  <div className="sino-simple-form__confirmation-summary-item">
                    <strong>{t('confirmationSummaryServices', 'Services:')}</strong>
                    <span>{selectedServiceLabels.join(', ')}</span>
                  </div>
                )}
                {formData.country && (
                  <div className="sino-simple-form__confirmation-summary-item">
                    <strong>{t('confirmationSummaryDestination', 'Destination:')}</strong>
                    <span>
                      {(() => {
                        const countryObj = COUNTRIES.find((c) => c.code === formData.country);
                        return countryObj ? countryObj.name : formData.country;
                      })()}
                      {formData.destCity && `, ${formData.destCity}`}
                    </span>
                  </div>
                )}
                {formData.mode && formData.mode !== 'not_sure' && (
                  <div className="sino-simple-form__confirmation-summary-item">
                    <strong>{t('confirmationSummaryMode', 'Mode:')}</strong>
                    <span>{formData.mode}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Reference number with copy button */}
          <div className="sino-simple-form__confirmation-details">
            <div className="sino-simple-form__confirmation-id-container">
              <p className="sino-simple-form__confirmation-id">
                <strong>{t('simpleConfirmationIdLabel', 'Reference:')}</strong>
                <code className="sino-simple-form__confirmation-id-code">{submissionId}</code>
              </p>
              <button
                type="button"
                className={`sino-simple-form__confirmation-copy ${copied ? 'sino-simple-form__confirmation-copy--copied' : ''}`}
                onClick={copyToClipboard}
                title={
                  copied
                    ? t('confirmationCopied', 'Copied!')
                    : t('confirmationCopy', 'Copy reference')
                }
              >
                {copied ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t('confirmationCopied', 'Copied!')}
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t('confirmationCopy', 'Copy')}
                  </>
                )}
              </button>
            </div>
            <p className="sino-simple-form__confirmation-note">
              {t(
                'simpleConfirmationNote',
                'Keep this reference number for your records. You can use it if you need to follow up on your request.'
              )}
            </p>
          </div>
        </div>

        {/* Next steps timeline - compact */}
        <div className="sino-simple-form__confirmation-timeline">
          <div className="sino-simple-form__confirmation-timeline-item">
            <div className="sino-simple-form__confirmation-timeline-icon">1</div>
            <div className="sino-simple-form__confirmation-timeline-content">
              <strong>{t('confirmationStep1Title', 'Email confirmation')}</strong>
              <span>
                {t('confirmationStep1Desc', "You'll receive a confirmation email within minutes")}
              </span>
            </div>
          </div>
          <div className="sino-simple-form__confirmation-timeline-item">
            <div className="sino-simple-form__confirmation-timeline-icon">2</div>
            <div className="sino-simple-form__confirmation-timeline-content">
              <strong>{t('confirmationStep2Title', 'Expert review')}</strong>
              <span>{t('confirmationStep2Desc', 'A SINO expert reviews your request')}</span>
            </div>
          </div>
          <div className="sino-simple-form__confirmation-timeline-item">
            <div className="sino-simple-form__confirmation-timeline-icon">3</div>
            <div className="sino-simple-form__confirmation-timeline-content">
              <strong>{t('confirmationStep3Title', 'Your quote')}</strong>
              <span>
                {t('confirmationStep3Desc', 'Personalized quote sent within 24h (Mon–Fri)')}
              </span>
            </div>
          </div>
        </div>

        {/* Action buttons - primary CTA */}
        <div className="sino-simple-form__confirmation-actions">
          <button
            type="button"
            className="sino-simple-form__cta-button sino-simple-form__cta-button--primary"
            onClick={onStartNew}
          >
            {t('simpleConfirmationNewRequest', 'Start a new request')}
          </button>
        </div>

        {/* Secondary actions and social - grouped */}
        <div className="sino-simple-form__confirmation-secondary-section">
          <div className="sino-simple-form__confirmation-secondary-actions">
            <a
              href="https://www.sino-shipping.com/international-shipping-knowledge-base/"
              target="_blank"
              rel="noopener noreferrer"
              className="sino-simple-form__confirmation-link"
            >
              {t('confirmationBrowseGuides', 'Browse our guides')}
            </a>
            <a href="mailto:info@sino-shipping.com" className="sino-simple-form__confirmation-link">
              {t('confirmationContactSupport', 'Contact support')}
            </a>
          </div>

          {/* Social sharing */}
          <div className="sino-simple-form__confirmation-social">
            <p className="sino-simple-form__confirmation-social-title">
              {t('confirmationSocialTitle', 'Check our social networks')}
            </p>
            <div className="sino-simple-form__confirmation-social-links">
              <a
                href="https://hk.linkedin.com/company/sino-shipping-official"
                target="_blank"
                rel="noopener noreferrer"
                className="sino-simple-form__confirmation-social-link"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@SINO-Shipping"
                target="_blank"
                rel="noopener noreferrer"
                className="sino-simple-form__confirmation-social-link"
                aria-label="YouTube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sino.shipping/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="sino-simple-form__confirmation-social-link"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@sinoshipping"
                target="_blank"
                rel="noopener noreferrer"
                className="sino-simple-form__confirmation-social-link"
                aria-label="TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Trust message */}
        <div className="sino-simple-form__confirmation-trust">
          <p className="sino-simple-form__footer-trust">
            {t(
              'simpleConfirmationTrust',
              'No spam. Just one clear plan, with transparent pricing and timelines.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleConfirmationSection;
