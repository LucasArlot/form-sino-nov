import type { SimpleFormData } from '../context/types';

type StepId =
  | 'services'
  | 'shippingRoute'
  | 'shippingCargo'
  | 'sourcing'
  | 'warehousing'
  | 'dropshipping'
  | 'qc'
  | 'chinaVisit'
  | 'contact';

/**
 * Check if a value is considered "filled"
 */
function isFilled(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'number') return value > 0;
  if (typeof value === 'boolean') return true;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') {
    // Check if object has any non-empty values
    return Object.values(value).some((v) => isFilled(v));
  }
  return false;
}

/**
 * Get the list of relevant fields for each step
 */
function getStepFields(stepId: StepId): string[] {
  switch (stepId) {
    case 'services':
      // Services step has no fields (always at least shipping is selected)
      return [];

    case 'shippingRoute':
      return [
        'country',
        'destCity',
        'mode',
        'origin',
        'city',
        'destLocationType',
        'destZipCode',
        'destPort',
      ];

    case 'shippingCargo':
      return [
        'totalWeight',
        'goodsDescription',
        'goodsValue',
        'goodsCurrency',
        'shippingType',
        'numberOfUnits',
        'areGoodsReady',
        'isPersonalOrHazardous',
      ];

    case 'sourcing':
      // Check sourcing object fields
      return ['sourcing'];

    case 'warehousing':
      // Check warehousing object fields
      return ['warehousing'];

    case 'dropshipping':
      // Check dropshipping object fields
      return ['dropshipping'];

    case 'qc':
      // Check qc object fields
      return ['qc'];

    case 'chinaVisit':
      // Check chinaVisit object fields
      return ['chinaVisit'];

    case 'contact':
      return [
        'firstName',
        'lastName',
        'email',
        'phone',
        'companyName',
        'customerType',
        'shipperType',
      ];

    default:
      return [];
  }
}

/**
 * Count filled fields for a specific step
 */
export function getStepProgress(
  stepId: StepId,
  formData: SimpleFormData
): {
  filled: number;
  total: number;
  percentage: number;
} {
  const fields = getStepFields(stepId);

  if (fields.length === 0) {
    // Services step is always considered complete
    if (stepId === 'services') {
      return { filled: 1, total: 1, percentage: 100 };
    }
    return { filled: 0, total: 0, percentage: 0 };
  }

  let filled = 0;
  let total = 0;

  for (const field of fields) {
    // Handle nested objects (sourcing, warehousing, etc.)
    if (
      field === 'sourcing' ||
      field === 'warehousing' ||
      field === 'dropshipping' ||
      field === 'qc' ||
      field === 'chinaVisit'
    ) {
      const obj = formData[field as keyof typeof formData];
      if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        // Count all non-empty values in the object
        const objEntries = Object.entries(obj);
        for (const [, objValue] of objEntries) {
          total++;
          if (isFilled(objValue)) {
            filled++;
          }
        }
        // If object is empty, still count it as 0/0 (no fields to fill)
        if (objEntries.length === 0) {
          // Don't increment total, these steps are optional
        }
      } else {
        // Object doesn't exist, don't count it (optional step)
      }
    } else if (field === 'totalWeight') {
      // Direct totalWeight field (simple form)
      total++;
      if (isFilled(formData.totalWeight)) {
        filled++;
      }
    } else {
      total++;
      const value = formData[field as keyof typeof formData];
      if (isFilled(value)) {
        filled++;
      }
    }
  }

  const percentage = total > 0 ? Math.round((filled / total) * 100) : 0;

  return { filled, total, percentage };
}

/**
 * Get step label for display
 */
export function getStepLabel(stepId: StepId, t: (key: string, fallback: string) => string): string {
  switch (stepId) {
    case 'services':
      return t('stepServicesLabel', 'Services');
    case 'shippingRoute':
      return t('stepShippingRouteLabel', 'Route');
    case 'shippingCargo':
      return t('stepShippingCargoLabel', 'Cargo');
    case 'sourcing':
      return t('stepSourcingLabel', 'Sourcing');
    case 'warehousing':
      return t('stepWarehousingLabel', 'Warehousing');
    case 'dropshipping':
      return t('stepDropshippingLabel', 'Dropshipping');
    case 'qc':
      return t('stepQcLabel', 'Quality Control');
    case 'chinaVisit':
      return t('stepChinaVisitLabel', 'China Visit');
    case 'contact':
      return t('stepContactLabel', 'Contact');
    default:
      return stepId;
  }
}
