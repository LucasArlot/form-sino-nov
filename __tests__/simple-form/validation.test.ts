import { describe, test, expect } from 'vitest';
import {
  validateEmail,
  validatePhone,
  validateRequired,
  validateCountry,
  validateDestCity,
  validateWeight,
  isStepComplete,
} from '../../src/simple-form/utils/validation';

describe('validateEmail', () => {
  test('returns valid for correct email format', () => {
    expect(validateEmail('test@example.com').valid).toBe(true);
    expect(validateEmail('user.name@domain.co.uk').valid).toBe(true);
  });

  test('returns invalid for empty email', () => {
    const result = validateEmail('');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Email is required');
  });

  test('returns invalid for incorrect email format', () => {
    expect(validateEmail('notanemail').valid).toBe(false);
    expect(validateEmail('missing@domain').valid).toBe(false);
    expect(validateEmail('@nodomain.com').valid).toBe(false);
  });
});

describe('validatePhone', () => {
  test('returns valid for phone with country code', () => {
    expect(validatePhone('+33612345678').valid).toBe(true);
    expect(validatePhone('+1234567890').valid).toBe(true);
  });

  test('returns invalid for empty phone', () => {
    const result = validatePhone('');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Phone number is required');
  });

  test('returns invalid for phone without country code', () => {
    const result = validatePhone('0612345678');
    expect(result.valid).toBe(false);
    expect(result.error).toContain('country code');
  });

  test('returns invalid for too short phone', () => {
    const result = validatePhone('+3312');
    expect(result.valid).toBe(false);
    expect(result.error).toContain('too short');
  });
});

describe('validateRequired', () => {
  test('returns valid for non-empty string', () => {
    expect(validateRequired('Hello', 'Field').valid).toBe(true);
    expect(validateRequired('  text  ', 'Field').valid).toBe(true);
  });

  test('returns invalid for empty string', () => {
    const result = validateRequired('', 'First name');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('First name is required');
  });

  test('returns invalid for whitespace only', () => {
    const result = validateRequired('   ', 'Field');
    expect(result.valid).toBe(false);
  });
});

describe('validateCountry', () => {
  test('returns valid for valid country code', () => {
    expect(validateCountry('FR').valid).toBe(true);
  });

  test('returns valid for country name', () => {
    expect(validateCountry('France').valid).toBe(true);
    expect(validateCountry('United States').valid).toBe(true);
  });

  test('returns invalid for empty country', () => {
    const result = validateCountry('');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Destination country is required');
  });
});

describe('validateDestCity', () => {
  test('returns valid for non-empty city', () => {
    expect(validateDestCity('Paris').valid).toBe(true);
    expect(validateDestCity('New York').valid).toBe(true);
  });

  test('returns invalid for empty city', () => {
    const result = validateDestCity('');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('City or port is required');
  });

  test('returns invalid for too short city name', () => {
    const result = validateDestCity('AB');
    expect(result.valid).toBe(false);
  });
});

describe('validateWeight', () => {
  test('returns valid for numeric weight', () => {
    expect(validateWeight('100').valid).toBe(true);
    expect(validateWeight('1500').valid).toBe(true);
    expect(validateWeight('0.5').valid).toBe(true);
  });

  test('returns valid for weight with spaces', () => {
    expect(validateWeight('1 500').valid).toBe(true);
    expect(validateWeight('1,500').valid).toBe(true);
  });

  test('returns invalid for empty weight', () => {
    const result = validateWeight('');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Total weight is required');
  });

  test('returns invalid for non-numeric weight', () => {
    const result = validateWeight('abc');
    expect(result.valid).toBe(false);
  });

  test('returns invalid for zero weight', () => {
    const result = validateWeight('0');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Weight must be greater than 0');
  });
});

describe('isStepComplete', () => {
  const baseFormData = {
    country: '',
    destCity: '',
    firstName: '',
    email: '',
    phone: '',
    totalWeight: '',
    servicesRequested: {
      shipping: true,
      sourcing: false,
      dropshipping: false,
      warehousing: false,
      qc: false,
      chinaVisits: false,
      other: false,
    },
  };

  test('services step is always complete', () => {
    expect(isStepComplete('services', baseFormData)).toBe(true);
  });

  test('shippingRoute step requires country and destCity', () => {
    expect(isStepComplete('shippingRoute', baseFormData)).toBe(false);

    expect(
      isStepComplete('shippingRoute', {
        ...baseFormData,
        country: 'FR',
        destCity: 'Paris',
      })
    ).toBe(true);
  });

  test('shippingCargo step requires totalWeight', () => {
    expect(isStepComplete('shippingCargo', baseFormData)).toBe(false);

    expect(
      isStepComplete('shippingCargo', {
        ...baseFormData,
        totalWeight: '1500',
      })
    ).toBe(true);
  });

  test('contact step requires firstName, email, and phone', () => {
    expect(isStepComplete('contact', baseFormData)).toBe(false);

    expect(
      isStepComplete('contact', {
        ...baseFormData,
        firstName: 'John',
        email: 'john@example.com',
        phone: '+33612345678',
      })
    ).toBe(true);
  });
});
