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

// ---------------------------------------------------------------------------
// Returning visitor: persist contact info across sessions
// ---------------------------------------------------------------------------

const VISITOR_KEY = 'sinoSimpleFormVisitor';
const VISITOR_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000; // 90 days

export interface VisitorContactInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  phoneCountryCode?: string;
  companyName?: string;
  customerType?: string;
  country?: string;
  savedAt: string;
}

export function saveVisitorContact(info: Omit<VisitorContactInfo, 'savedAt'>): void {
  if (typeof window === 'undefined') return;
  const hasData = info.email || info.firstName || info.phone;
  if (!hasData) return;

  try {
    const data: VisitorContactInfo = { ...info, savedAt: new Date().toISOString() };
    window.localStorage.setItem(VISITOR_KEY, JSON.stringify(data));
  } catch {
    // storage full or unavailable
  }
}

export function loadVisitorContact(): VisitorContactInfo | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(VISITOR_KEY);
    if (!raw) return null;

    const data = JSON.parse(raw) as VisitorContactInfo;

    // Expire after 90 days
    if (data.savedAt) {
      const age = Date.now() - new Date(data.savedAt).getTime();
      if (age > VISITOR_MAX_AGE_MS) {
        window.localStorage.removeItem(VISITOR_KEY);
        return null;
      }
    }

    return data;
  } catch {
    return null;
  }
}

export function clearVisitorContact(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(VISITOR_KEY);
  } catch {
    // ignore
  }
}
