/**
 * Simple Form Hook - Use this instead of useQuoteForm in simple form components
 */

import { useContext } from 'react';
import { SimpleFormContext } from './SimpleFormContext';
import type { SimpleFormContextValue } from './types';

export function useSimpleForm(): SimpleFormContextValue {
  const ctx = useContext(SimpleFormContext);
  if (!ctx) {
    throw new Error('useSimpleForm must be used inside <SimpleFormProvider>');
  }
  return ctx;
}
