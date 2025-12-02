import { describe, test, expect } from 'vitest';
import {
  calculateTotalVolume,
  calculateTotalWeightFromUnits,
  getCargoCalculations,
} from '../../src/simple-form/utils/cargoCalculations';
import { initialSimpleFormData } from '../../src/simple-form/context/types';

describe('calculateTotalVolume', () => {
  test('calculates volume correctly in CBM', () => {
    const dimensions = { length: '100', width: '80', height: '120' };
    const result = calculateTotalVolume(dimensions, 'CM', 1);

    // 100cm x 80cm x 120cm = 0.96 CBM
    expect(result.value).toBeCloseTo(0.96, 2);
    expect(result.formatted).toContain('CBM');
  });

  test('multiplies by number of units', () => {
    const dimensions = { length: '100', width: '100', height: '100' };
    const result = calculateTotalVolume(dimensions, 'CM', 10);

    // 1m³ x 10 = 10 CBM
    expect(result.value).toBeCloseTo(10, 2);
  });

  test('returns null for empty dimensions', () => {
    const dimensions = { length: '', width: '', height: '' };
    const result = calculateTotalVolume(dimensions, 'CM', 1);

    expect(result.value).toBeNull();
    expect(result.formatted).toBe('');
  });

  test('returns null for zero units', () => {
    const dimensions = { length: '100', width: '100', height: '100' };
    const result = calculateTotalVolume(dimensions, 'CM', 0);

    expect(result.value).toBeNull();
  });

  test('handles inches conversion', () => {
    const dimensions = { length: '39.37', width: '39.37', height: '39.37' }; // ~1m in inches
    const result = calculateTotalVolume(dimensions, 'IN', 1);

    // Should be approximately 1 CBM
    expect(result.value).toBeCloseTo(1, 1);
  });
});

describe('calculateTotalWeightFromUnits', () => {
  test('calculates total weight correctly', () => {
    const result = calculateTotalWeightFromUnits('25', 'KG', 10);

    expect(result.value).toBe(250);
    expect(result.formatted).toContain('250');
    expect(result.formatted).toContain('KG');
  });

  test('returns null for empty weight per unit', () => {
    const result = calculateTotalWeightFromUnits('', 'KG', 10);

    expect(result.value).toBeNull();
    expect(result.formatted).toBe('');
  });

  test('returns null for zero units', () => {
    const result = calculateTotalWeightFromUnits('25', 'KG', 0);

    expect(result.value).toBeNull();
  });

  test('handles string numbers with spaces', () => {
    const result = calculateTotalWeightFromUnits('1 500', 'KG', 2);

    expect(result.value).toBe(3000);
  });
});

describe('getCargoCalculations', () => {
  test('returns calculations from form data', () => {
    const formData = {
      ...initialSimpleFormData,
      dimensions: { length: '100', width: '100', height: '100' },
      numberOfUnits: 5,
      weightPerUnit: '50',
    };

    const result = getCargoCalculations(formData);

    expect(result.totalVolume.value).toBeCloseTo(5, 2); // 5 CBM
    expect(result.totalWeightFromUnits.value).toBe(250); // 50kg x 5
  });

  test('returns null values for empty form data', () => {
    const result = getCargoCalculations(initialSimpleFormData);

    expect(result.totalVolume.value).toBeNull();
    expect(result.totalWeightFromUnits.value).toBeNull();
  });
});
