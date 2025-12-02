/**
 * Simple Form Context - Completely independent from the legacy form
 * Lightweight provider with only essential state management
 */

import { createContext, useState, useCallback, type FC, type ReactNode } from 'react';
import { type SimpleFormData, type SimpleFormContextValue, initialSimpleFormData } from './types';

// Create context with undefined default (will throw if used outside provider)
export const SimpleFormContext = createContext<SimpleFormContextValue | undefined>(undefined);

interface SimpleFormProviderProps {
  children: ReactNode;
}

export const SimpleFormProvider: FC<SimpleFormProviderProps> = ({ children }) => {
  // Main form state
  const [formData, setFormData] = useState<SimpleFormData>(initialSimpleFormData);

  // Generic input change handler
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value, type } = e.target;
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    },
    []
  );

  // Context value
  const contextValue: SimpleFormContextValue = {
    formData,
    setFormData,
    handleInputChange,
  };

  return <SimpleFormContext.Provider value={contextValue}>{children}</SimpleFormContext.Provider>;
};

export default SimpleFormProvider;
