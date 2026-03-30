/**
 * PrefillBanner – shows a summary of pre-filled data with actions.
 *
 * Displays grouped prefilled fields, a "Looks good" CTA to continue,
 * a "Clear pre-filled data" reset, and a "Dismiss" to hide the banner.
 */

import type { FC } from 'react';
import { useState } from 'react';
import type { SimpleFormData } from './context/types';
import type { PrefillGroup } from './utils/prefill';
import { groupPrefillFields } from './utils/prefill';

interface PrefillBannerProps {
  data: Partial<SimpleFormData>;
  fields: Set<string>;
  count: number;
  onDismiss: () => void;
  onClearAll: () => void;
  onContinue: () => void;
}

const PrefillBanner: FC<PrefillBannerProps> = ({
  data,
  fields,
  count,
  onDismiss,
  onClearAll,
  onContinue,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const groups = groupPrefillFields(data, fields);

  if (count === 0 || groups.length === 0) return null;

  return (
    <div className="sino-simple-form__prefill-banner" role="alert" aria-live="polite">
      <div className="sino-simple-form__prefill-banner-header">
        <div className="sino-simple-form__prefill-banner-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="sino-simple-form__prefill-banner-title">
          <strong>Your information has been pre-filled</strong>
          <span className="sino-simple-form__prefill-banner-count">
            ({count} {count === 1 ? 'field' : 'fields'})
          </span>
        </div>
        <button
          type="button"
          className="sino-simple-form__prefill-banner-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="sino-simple-form__prefill-banner-body">
          {groups.map((group) => (
            <PrefillGroupRow key={group.label} group={group} />
          ))}

          <div className="sino-simple-form__prefill-banner-actions">
            <button
              type="button"
              className="sino-simple-form__prefill-banner-btn sino-simple-form__prefill-banner-btn--primary"
              onClick={onContinue}
            >
              Looks good, continue
            </button>
            <button
              type="button"
              className="sino-simple-form__prefill-banner-btn sino-simple-form__prefill-banner-btn--secondary"
              onClick={onClearAll}
            >
              Clear pre-filled data
            </button>
            <button
              type="button"
              className="sino-simple-form__prefill-banner-btn sino-simple-form__prefill-banner-btn--dismiss"
              onClick={onDismiss}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const PrefillGroupRow: FC<{ group: PrefillGroup }> = ({ group }) => (
  <div className="sino-simple-form__prefill-group">
    <span className="sino-simple-form__prefill-group-label">{group.label}</span>
    <div className="sino-simple-form__prefill-group-items">
      {group.items.map((item) => (
        <span key={item.field} className="sino-simple-form__prefill-item">
          {item.label}: <strong>{item.value}</strong>
        </span>
      ))}
    </div>
  </div>
);

export default PrefillBanner;
