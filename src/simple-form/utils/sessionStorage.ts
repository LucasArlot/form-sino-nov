/**
 * Session storage utilities for form draft persistence
 */

const STORAGE_KEY_PREFIX = 'sinoSimpleFormDraft';
const SESSION_ID_KEY = 'sinoSimpleFormSessionId';

/**
 * Generate a unique session ID
 */
export function generateSessionId(): string {
  return `session-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Get or create a session ID
 */
export function getSessionId(): string {
  if (typeof window === 'undefined') {
    return generateSessionId();
  }

  try {
    const existingId = window.localStorage.getItem(SESSION_ID_KEY);
    if (existingId) {
      return existingId;
    }

    const newId = generateSessionId();
    window.localStorage.setItem(SESSION_ID_KEY, newId);
    return newId;
  } catch {
    return generateSessionId();
  }
}

/**
 * Save form data to localStorage with session ID
 */
export function saveFormDraft(sessionId: string, formData: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  try {
    const storageKey = `${STORAGE_KEY_PREFIX}-${sessionId}`;
    const dataToSave = {
      sessionId,
      formData,
      savedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(storageKey, JSON.stringify(dataToSave));
  } catch (error) {
    console.warn('[saveFormDraft] Failed to save draft:', error);
  }
}

/**
 * Load form data from localStorage by session ID
 */
export function loadFormDraft(sessionId: string): Record<string, unknown> | null {
  if (typeof window === 'undefined') return null;

  try {
    const storageKey = `${STORAGE_KEY_PREFIX}-${sessionId}`;
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as { formData: Record<string, unknown> };
    return parsed.formData;
  } catch {
    return null;
  }
}

/**
 * Get shareable link for the current session (if URL sharing is enabled)
 * This would require a backend service to store and retrieve sessions
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getShareableLink(_sessionId: string): string | null {
  // For now, return null as this would require a backend service
  // In the future, this could return something like:
  // return `${window.location.origin}/form/resume/${sessionId}`;
  return null;
}
