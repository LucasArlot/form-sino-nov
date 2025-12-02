import type { SimpleFormData } from '../context/types';

/**
 * Parse a numeric value from string, handling spaces and commas
 */
function parseNumeric(value: string | number | undefined | null): number | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  if (typeof value === 'number') {
    return isNaN(value) || value <= 0 ? null : value;
  }

  const cleaned = String(value).trim().replace(/[\s,]/g, '');
  if (cleaned === '') {
    return null;
  }

  const num = parseFloat(cleaned);
  return isNaN(num) || num <= 0 ? null : num;
}

/**
 * Convert dimensions to meters (for volume calculation)
 */
function convertToMeters(value: number, unit: string): number {
  if (unit === 'IN' || unit === 'in') {
    return value * 0.0254; // inches to meters
  }
  // Default: CM
  return value / 100; // cm to meters
}

/**
 * Calculate total volume from dimensions and number of units
 * Volume = L × W × H × numberOfUnits (in CBM - cubic meters)
 */
export function calculateTotalVolume(
  dimensions: { length: string; width: string; height: string } | undefined,
  dimensionUnit: string | undefined,
  numberOfUnits: number | undefined | null
): { value: number | null; formatted: string } {
  if (!dimensions || !numberOfUnits || numberOfUnits <= 0) {
    return { value: null, formatted: '' };
  }

  const length = parseNumeric(dimensions.length);
  const width = parseNumeric(dimensions.width);
  const height = parseNumeric(dimensions.height);

  if (!length || !width || !height) {
    return { value: null, formatted: '' };
  }

  // Convert to meters
  const lengthM = convertToMeters(length, dimensionUnit || 'CM');
  const widthM = convertToMeters(width, dimensionUnit || 'CM');
  const heightM = convertToMeters(height, dimensionUnit || 'CM');

  // Calculate volume per unit in cubic meters
  const volumePerUnit = lengthM * widthM * heightM;

  // Total volume = volume per unit × number of units
  const totalVolume = volumePerUnit * numberOfUnits;

  // Format to 3 decimal places, remove trailing zeros
  const formatted = totalVolume.toFixed(3).replace(/\.?0+$/, '');

  return { value: totalVolume, formatted: `${formatted} CBM` };
}

/**
 * Calculate total weight from weight per unit and number of units
 * Total weight = weightPerUnit × numberOfUnits
 */
export function calculateTotalWeightFromUnits(
  weightPerUnit: string | undefined | null,
  weightUnit: string | undefined,
  numberOfUnits: number | undefined | null
): { value: number | null; formatted: string } {
  if (!weightPerUnit || !numberOfUnits || numberOfUnits <= 0) {
    return { value: null, formatted: '' };
  }

  const weightPerUnitNum = parseNumeric(weightPerUnit);
  if (!weightPerUnitNum) {
    return { value: null, formatted: '' };
  }

  // Calculate total weight
  const totalWeight = weightPerUnitNum * numberOfUnits;

  // Format with appropriate unit
  const unit = weightUnit || 'KG';
  const formatted = totalWeight.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    useGrouping: true,
  });

  return { value: totalWeight, formatted: `${formatted} ${unit}` };
}

/**
 * Get all cargo calculations for display
 * Uses direct cargo fields from FormData (simple form structure)
 */
export function getCargoCalculations(formData: SimpleFormData): {
  totalVolume: { value: number | null; formatted: string };
  totalWeightFromUnits: { value: number | null; formatted: string };
} {
  const totalVolume = calculateTotalVolume(
    formData.dimensions,
    'CM', // Simple form always uses CM
    formData.numberOfUnits
  );

  const totalWeightFromUnits = calculateTotalWeightFromUnits(
    formData.weightPerUnit,
    'KG', // Simple form always uses KG
    formData.numberOfUnits
  );

  return {
    totalVolume,
    totalWeightFromUnits,
  };
}
