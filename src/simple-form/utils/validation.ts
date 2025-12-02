import { COUNTRIES } from '@/data/countries';

/**
 * Validation result type
 */
export type ValidationResult = {
  valid: boolean;
  error?: string;
};

/**
 * Validate email format
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return {
      valid: false,
      error: 'Email is required',
    };
  }

  const trimmed = email.trim();
  if (trimmed.length === 0) {
    return {
      valid: false,
      error: 'Email is required',
    };
  }

  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return {
      valid: false,
      error: 'Please enter a valid email address',
    };
  }

  // Check for common typos
  // commonDomains kept for potential future validation enhancement
  // const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const domain = trimmed.split('@')[1]?.toLowerCase();
  if (domain) {
    const typos: Record<string, string> = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'gmal.com': 'gmail.com',
      'yaho.com': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
    };
    if (typos[domain]) {
      return {
        valid: false,
        error: `Did you mean ${trimmed.split('@')[0]}@${typos[domain]}?`,
      };
    }
  }

  return { valid: true };
}

/**
 * Validate phone number format
 * Accepts international format with country code
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || typeof phone !== 'string') {
    return {
      valid: false,
      error: 'Phone number is required',
    };
  }

  const trimmed = phone.trim();
  if (trimmed.length === 0) {
    return {
      valid: false,
      error: 'Phone number is required',
    };
  }

  // Remove spaces, dashes, parentheses for validation
  const cleaned = trimmed.replace(/[\s\-()]/g, '');

  // Must start with + for international format
  if (!cleaned.startsWith('+')) {
    return {
      valid: false,
      error: 'Please include country code (e.g., +33 for France, +1 for USA)',
    };
  }

  // Check minimum length (country code + at least 6 digits)
  if (cleaned.length < 8) {
    return {
      valid: false,
      error: 'Phone number seems too short. Please include country code and number',
    };
  }

  // Check maximum length (reasonable limit)
  if (cleaned.length > 20) {
    return {
      valid: false,
      error: 'Phone number seems too long. Please check and try again',
    };
  }

  // Check that after + there are only digits
  const digitsOnly = cleaned.substring(1);
  if (!/^\d+$/.test(digitsOnly)) {
    return {
      valid: false,
      error: 'Phone number should contain only numbers after the country code',
    };
  }

  return { valid: true };
}

/**
 * Validate required field
 */
export function validateRequired(
  value: string | undefined | null,
  fieldName?: string
): ValidationResult {
  if (value === undefined || value === null) {
    return {
      valid: false,
      error: fieldName ? `${fieldName} is required` : 'This field is required',
    };
  }

  if (typeof value !== 'string') {
    return {
      valid: false,
      error: fieldName ? `${fieldName} is required` : 'This field is required',
    };
  }

  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return {
      valid: false,
      error: fieldName ? `${fieldName} is required` : 'This field is required',
    };
  }

  return { valid: true };
}

/**
 * Validate country code or name
 */
export function validateCountry(country: string): ValidationResult {
  if (!country || typeof country !== 'string') {
    return {
      valid: false,
      error: 'Destination country is required',
    };
  }

  const trimmed = country.trim();
  if (trimmed.length === 0) {
    return {
      valid: false,
      error: 'Destination country is required',
    };
  }

  // Check if it's a valid country code (2-3 letters)
  const isCode = /^[A-Z]{2,3}$/i.test(trimmed);
  if (isCode) {
    const countryObj = COUNTRIES.find((c) => c.code.toUpperCase() === trimmed.toUpperCase());
    if (!countryObj) {
      return {
        valid: false,
        error: 'Please enter a valid country code',
      };
    }
    return { valid: true };
  }

  // Very permissive: accept any country name with more than 2 characters
  // No validation error if length > 2
  if (trimmed.length <= 2) {
    return {
      valid: false,
      error: 'Country name is too short',
    };
  }

  // If more than 2 characters, it's valid - no further checks
  return { valid: true };
}

/**
 * Validate destination city
 * Accepts any reasonable city/port name (2-100 characters)
 */
export function validateDestCity(city: string): ValidationResult {
  if (!city || typeof city !== 'string') {
    return {
      valid: false,
      error: 'City or port is required',
    };
  }

  const trimmed = city.trim();
  if (trimmed.length === 0) {
    return {
      valid: false,
      error: 'City or port is required',
    };
  }

  // Very permissive: accept any city/port name with more than 2 characters
  // No validation error if length > 2
  if (trimmed.length <= 2) {
    return {
      valid: false,
      error: 'City or port name is too short',
    };
  }

  // If more than 2 characters, it's valid - no further checks
  return { valid: true };
}

/**
 * Validate weight (numeric value)
 */
export function validateWeight(weight: string | number | undefined | null): ValidationResult {
  if (weight === undefined || weight === null || weight === '') {
    return {
      valid: false,
      error: 'Total weight is required',
    };
  }

  const weightStr = typeof weight === 'number' ? weight.toString() : String(weight).trim();
  if (weightStr.length === 0) {
    return {
      valid: false,
      error: 'Total weight is required',
    };
  }

  // Remove spaces and commas (allow "1 200" or "1,200")
  const cleaned = weightStr.replace(/[\s,]/g, '');

  // Check if it's a valid number
  const numValue = parseFloat(cleaned);
  if (isNaN(numValue)) {
    return {
      valid: false,
      error: 'Please enter a valid weight (numbers only)',
    };
  }

  if (numValue <= 0) {
    return {
      valid: false,
      error: 'Weight must be greater than 0',
    };
  }

  if (numValue > 1000000) {
    return {
      valid: false,
      error: 'Weight seems too high. Please check and try again',
    };
  }

  return { valid: true };
}

/**
 * Validate URL format (for reference links, etc.)
 */
export function validateUrl(url: string, required = false): ValidationResult {
  if (!url || typeof url !== 'string') {
    if (required) {
      return {
        valid: false,
        error: 'URL is required',
      };
    }
    return { valid: true }; // Optional field
  }

  const trimmed = url.trim();
  if (trimmed.length === 0) {
    if (required) {
      return {
        valid: false,
        error: 'URL is required',
      };
    }
    return { valid: true }; // Optional field
  }

  // Basic URL validation
  try {
    // Try to create a URL object (works for http/https URLs)
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      new URL(trimmed);
      return { valid: true };
    }

    // Allow URLs without protocol (will be handled by the app)
    if (trimmed.includes('.') && trimmed.length > 4) {
      return { valid: true };
    }

    return {
      valid: false,
      error: 'Please enter a valid URL (e.g., https://example.com)',
    };
  } catch {
    return {
      valid: false,
      error: 'Please enter a valid URL',
    };
  }
}

/**
 * Validate numeric value (for prices, quantities, etc.)
 */
export function validateNumeric(
  value: string | number | undefined | null,
  options?: {
    required?: boolean;
    min?: number;
    max?: number;
    fieldName?: string;
  }
): ValidationResult {
  const { required = false, min, max, fieldName = 'This field' } = options || {};

  if (value === undefined || value === null || value === '') {
    if (required) {
      return {
        valid: false,
        error: `${fieldName} is required`,
      };
    }
    return { valid: true }; // Optional field
  }

  const valueStr = typeof value === 'number' ? value.toString() : String(value).trim();
  if (valueStr.length === 0) {
    if (required) {
      return {
        valid: false,
        error: `${fieldName} is required`,
      };
    }
    return { valid: true }; // Optional field
  }

  // Remove spaces and commas
  const cleaned = valueStr.replace(/[\s,]/g, '');

  const numValue = parseFloat(cleaned);
  if (isNaN(numValue)) {
    return {
      valid: false,
      error: `${fieldName} must be a valid number`,
    };
  }

  if (min !== undefined && numValue < min) {
    return {
      valid: false,
      error: `${fieldName} must be at least ${min}`,
    };
  }

  if (max !== undefined && numValue > max) {
    return {
      valid: false,
      error: `${fieldName} must be at most ${max}`,
    };
  }

  return { valid: true };
}

/**
 * Validate step-specific fields
 * Returns an object with field names as keys and validation results as values
 */
export function validateStepFields(
  stepId: string,
  formData: Record<string, unknown>
): Record<string, ValidationResult> {
  const errors: Record<string, ValidationResult> = {};

  switch (stepId) {
    case 'services':
      // Services step doesn't need validation (at least shipping is always selected)
      break;

    case 'shippingRoute':
      errors.country = validateCountry(formData.country as string);
      errors.destCity = validateDestCity(formData.destCity as string);
      break;

    case 'shippingCargo':
      errors.totalWeight = validateWeight(formData.totalWeight);
      break;

    case 'contact':
      errors.firstName = validateRequired(formData.firstName as string, 'First name');
      errors.email = validateEmail(formData.email as string);
      errors.phone = validatePhone(formData.phone as string);
      break;

    default:
      // Other steps are optional
      break;
  }

  return errors;
}

/**
 * Check if a step is complete (all required fields valid)
 */
export function isStepComplete(stepId: string, formData: Record<string, unknown>): boolean {
  const errors = validateStepFields(stepId, formData);
  return Object.values(errors).every((result) => result.valid);
}

/**
 * Get all validation errors for a step
 */
export function getStepErrors(stepId: string, formData: Record<string, unknown>): string[] {
  const errors = validateStepFields(stepId, formData);
  return Object.entries(errors)
    .filter(([, result]) => !result.valid)
    .map(([, result]) => result.error || 'Invalid field');
}
