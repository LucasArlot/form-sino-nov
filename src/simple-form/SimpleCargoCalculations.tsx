import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import type { QuoteFormContextValue } from '@/features/lead/context/QuoteFormTypes';
import { getCargoCalculations } from './utils/cargoCalculations';

type SimpleCargoCalculationsProps = Pick<QuoteFormContextValue, 'formData' | 'setFormData'> & {
  t: (key: string, fallback: string) => string;
};

const SimpleCargoCalculations: FC<SimpleCargoCalculationsProps> = ({
  formData,
  setFormData,
  t,
}) => {
  const calculations = getCargoCalculations(formData);
  const hasCalculations =
    calculations.totalVolume.value !== null || calculations.totalWeightFromUnits.value !== null;
  const autoUpdateRef = useRef(false);

  // Auto-update totalWeight if weightPerUnit is provided and totalWeight is empty
  useEffect(() => {
    if (
      calculations.totalWeightFromUnits.value !== null &&
      formData.loads?.[0] &&
      !autoUpdateRef.current
    ) {
      const currentTotalWeight = formData.loads[0].totalWeight;
      const calculatedWeight = Math.round(calculations.totalWeightFromUnits.value).toString();

      // Only update if totalWeight is empty or very different from calculated value
      if (!currentTotalWeight || currentTotalWeight.trim() === '') {
        autoUpdateRef.current = true;
        // Auto-fill totalWeight if empty (with delay to avoid conflicts)
        const timeoutId = setTimeout(() => {
          setFormData((prev) => {
            const [firstLoad, ...rest] = prev.loads;
            if (firstLoad && (!firstLoad.totalWeight || firstLoad.totalWeight.trim() === '')) {
              return {
                ...prev,
                loads: [{ ...firstLoad, totalWeight: calculatedWeight }, ...rest],
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
  }, [calculations.totalWeightFromUnits.value, formData.loads, setFormData]);

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
