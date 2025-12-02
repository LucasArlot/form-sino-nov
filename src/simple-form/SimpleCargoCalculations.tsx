import type { FC } from 'react';
import { useEffect, useRef, useMemo } from 'react';
import type { SimpleFormProps } from './context/types';
import { getCargoCalculations } from './utils/cargoCalculations';

type SimpleCargoCalculationsProps = SimpleFormProps & {
  t: (key: string, fallback: string) => string;
};

const SimpleCargoCalculations: FC<SimpleCargoCalculationsProps> = ({
  formData,
  setFormData,
  t,
}) => {
  // Memoize calculations to avoid recalculating on every render
  const calculations = useMemo(
    () => getCargoCalculations(formData),
    [formData.dimensions, formData.numberOfUnits, formData.weightPerUnit]
  );
  const hasCalculations =
    calculations.totalVolume.value !== null || calculations.totalWeightFromUnits.value !== null;
  const autoUpdateRef = useRef(false);

  // Auto-update totalWeight if weightPerUnit is provided and totalWeight is empty
  useEffect(() => {
    if (calculations.totalWeightFromUnits.value !== null && !autoUpdateRef.current) {
      const currentTotalWeight = formData.totalWeight;
      const calculatedWeight = Math.round(calculations.totalWeightFromUnits.value).toString();

      // Only update if totalWeight is empty or very different from calculated value
      if (!currentTotalWeight || currentTotalWeight.trim() === '') {
        autoUpdateRef.current = true;
        // Auto-fill totalWeight if empty (with delay to avoid conflicts)
        const timeoutId = setTimeout(() => {
          setFormData((prev) => {
            if (!prev.totalWeight || prev.totalWeight.trim() === '') {
              return {
                ...prev,
                totalWeight: calculatedWeight,
              };
            }
            return prev;
          });
          autoUpdateRef.current = false;
        }, 1000); // Delay to avoid conflicts with user typing

        return () => {
          clearTimeout(timeoutId);
          autoUpdateRef.current = false;
        };
      }
    }
  }, [calculations.totalWeightFromUnits.value, formData.totalWeight, setFormData]);

  if (!hasCalculations) {
    return null;
  }

  return (
    <div className="sino-simple-form__cargo-calculations">
      <div className="sino-simple-form__cargo-calculations-header">
        <span className="sino-simple-form__cargo-calculations-title">
          {t('cargoCalculationsTitle', 'Calculated values')}
        </span>
      </div>
      <div className="sino-simple-form__cargo-calculations-items">
        {calculations.totalVolume.value !== null && (
          <div className="sino-simple-form__cargo-calculation-item">
            <span className="sino-simple-form__cargo-calculation-label">
              {t('cargoCalculatedVolume', 'Total volume')}:
            </span>
            <span className="sino-simple-form__cargo-calculation-value">
              {calculations.totalVolume.formatted}
            </span>
          </div>
        )}
        {calculations.totalWeightFromUnits.value !== null && (
          <div className="sino-simple-form__cargo-calculation-item">
            <span className="sino-simple-form__cargo-calculation-label">
              {t('cargoCalculatedWeight', 'Total weight (from units)')}:
            </span>
            <span className="sino-simple-form__cargo-calculation-value">
              {calculations.totalWeightFromUnits.formatted}
            </span>
          </div>
        )}
      </div>
      <p className="sino-simple-form__cargo-calculations-hint">
        {t(
          'cargoCalculationsHint',
          'These values are calculated automatically and can help you verify your inputs.'
        )}
      </p>
    </div>
  );
};

export default SimpleCargoCalculations;
