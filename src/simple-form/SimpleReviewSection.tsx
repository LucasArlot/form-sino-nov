import type { FC } from 'react';
// SimpleFormData type is accessed via SimpleFormProps
import { COUNTRIES } from '@/data/countries';

const SEA_PORTS = [
  { code: 'SHA', name: 'Shanghai', type: 'sea' },
  { code: 'SZX', name: 'Shenzhen', type: 'sea' },
  { code: 'NGB', name: 'Ningbo-Zhoushan', type: 'sea' },
  { code: 'GZH', name: 'Guangzhou', type: 'sea' },
  { code: 'QIN', name: 'Qingdao', type: 'sea' },
  { code: 'TJN', name: 'Tianjin', type: 'sea' },
  { code: 'XMN', name: 'Xiamen', type: 'sea' },
  { code: 'DLN', name: 'Dalian', type: 'sea' },
  { code: 'YTN', name: 'Yantian', type: 'sea' },
  { code: 'LYG', name: 'Lianyungang', type: 'sea' },
];

const AIRPORTS = [
  { code: 'PEK', name: 'Beijing Capital', type: 'air' },
  { code: 'PVG', name: 'Shanghai Pudong', type: 'air' },
  { code: 'CAN', name: 'Guangzhou Baiyun', type: 'air' },
  { code: 'SZX', name: "Shenzhen Bao'an", type: 'air' },
  { code: 'CTU', name: 'Chengdu Shuangliu', type: 'air' },
  { code: 'SHA', name: 'Shanghai Hongqiao', type: 'air' },
  { code: 'KMG', name: 'Kunming Changshui', type: 'air' },
  { code: 'XIY', name: "Xi'an Xianyang", type: 'air' },
  { code: 'HGH', name: 'Hangzhou Xiaoshan', type: 'air' },
  { code: 'NKG', name: 'Nanjing Lukou', type: 'air' },
];

const RAIL_TERMINALS = [
  { code: 'ZIH', name: 'Zhengzhou Rail Terminal', type: 'rail' },
  { code: 'CQN', name: 'Chongqing Rail Terminal', type: 'rail' },
  { code: 'XIY', name: "Xi'an Rail Terminal", type: 'rail' },
  { code: 'WUH', name: 'Wuhan Rail Terminal', type: 'rail' },
  { code: 'CDU', name: 'Chengdu Rail Terminal', type: 'rail' },
];

type SimpleReviewSectionProps = Pick<QuoteFormContextValue, 'formData'> & {
  t: (key: string, fallback: string) => string;
  selectedServiceLabels: string[];
  orderedSteps: string[];
  onEditStep: (stepIndex: number) => void;
};

const SimpleReviewSection: FC<SimpleReviewSectionProps> = ({
  formData,
  t,
  selectedServiceLabels,
  orderedSteps,
  onEditStep,
}) => {
  // Helper to get country name from code or return as-is
  const getCountryName = (country: string): string => {
    if (!country) return '';
    const countryObj = COUNTRIES.find((c) => c.code === country || c.name === country);
    return countryObj ? countryObj.name : country;
  };

  // Helper to get origin name from code
  const getOriginName = (origin: string): string => {
    if (!origin) return '';
    const allPorts = [...SEA_PORTS, ...AIRPORTS, ...RAIL_TERMINALS];
    const port = allPorts.find((p) => p.code === origin);
    return port ? port.name : origin;
  };

  // Helper to get mode label
  const getModeLabel = (mode: string): string => {
    if (!mode) return '';
    const modeMap: Record<string, string> = {
      Sea: t('modeSea', 'Sea'),
      Air: t('modeAir', 'Air'),
      Rail: t('modeRail', 'Rail'),
      Express: t('modeExpress', 'Express'),
      not_sure: t('modeNotSure', "I'm not sure"),
    };
    return modeMap[mode] || mode;
  };

  // Helper to format weight
  const formatWeight = (weight: string | number | undefined | null): string => {
    if (!weight) return '';
    const weightStr = String(weight).trim();
    if (weightStr) {
      return `${weightStr} kg`;
    }
    return '';
  };

  // Find step indices for navigation
  const getStepIndex = (stepId: string): number => {
    return orderedSteps.indexOf(stepId);
  };

  const shippingSelected =
    formData.servicesRequested?.shipping === undefined ? true : formData.servicesRequested.shipping;

  return (
    <div className="sino-simple-form__review-section">
      <h3 className="sino-simple-form__review-title">{t('reviewTitle', 'Review your request')}</h3>
      <p className="sino-simple-form__review-subtitle">
        {t('reviewSubtitle', 'Please review the information below before submitting.')}
      </p>

      <div className="sino-simple-form__review-items">
        {/* Services Section */}
        {selectedServiceLabels.length > 0 && (
          <div className="sino-simple-form__review-item">
            <div className="sino-simple-form__review-item-header">
              <span className="sino-simple-form__review-item-label">
                {t('reviewServices', 'Services')}
              </span>
              <button
                type="button"
                className="sino-simple-form__review-edit-button"
                onClick={() => onEditStep(getStepIndex('services'))}
                aria-label={t('reviewEditServices', 'Edit services')}
              >
                {t('reviewEdit', 'Edit')}
              </button>
            </div>
            <div className="sino-simple-form__review-item-content">
              {selectedServiceLabels.join(', ')}
            </div>
          </div>
        )}

        {/* Route Section */}
        {shippingSelected &&
          (formData.country || formData.destCity || formData.mode || formData.origin) && (
            <div className="sino-simple-form__review-item">
              <div className="sino-simple-form__review-item-header">
                <span className="sino-simple-form__review-item-label">
                  {t('reviewRoute', 'Route')}
                </span>
                <button
                  type="button"
                  className="sino-simple-form__review-edit-button"
                  onClick={() => onEditStep(getStepIndex('shippingRoute'))}
                  aria-label={t('reviewEditRoute', 'Edit route')}
                >
                  {t('reviewEdit', 'Edit')}
                </button>
              </div>
              <div className="sino-simple-form__review-item-content">
                <div className="sino-simple-form__review-item-row">
                  {formData.country && (
                    <div>
                      <strong>{t('reviewDestination', 'Destination')}:</strong>{' '}
                      {getCountryName(formData.country)}
                      {formData.destCity && `, ${formData.destCity}`}
                    </div>
                  )}
                </div>
                {formData.mode && (
                  <div className="sino-simple-form__review-item-row">
                    <strong>{t('reviewMode', 'Mode')}:</strong> {getModeLabel(formData.mode)}
                  </div>
                )}
                {formData.origin && (
                  <div className="sino-simple-form__review-item-row">
                    <strong>{t('reviewOrigin', 'Origin')}:</strong> {getOriginName(formData.origin)}
                    {formData.city && `, ${formData.city}`}
                  </div>
                )}
              </div>
            </div>
          )}

        {/* Cargo Section */}
        {shippingSelected &&
          (formData.totalWeight || formData.goodsDescription || formData.numberOfUnits) && (
            <div className="sino-simple-form__review-item">
              <div className="sino-simple-form__review-item-header">
                <span className="sino-simple-form__review-item-label">
                  {t('reviewCargo', 'Cargo')}
                </span>
                <button
                  type="button"
                  className="sino-simple-form__review-edit-button"
                  onClick={() => onEditStep(getStepIndex('shippingCargo'))}
                  aria-label={t('reviewEditCargo', 'Edit cargo')}
                >
                  {t('reviewEdit', 'Edit')}
                </button>
              </div>
              <div className="sino-simple-form__review-item-content">
                {formData.goodsDescription && (
                  <div className="sino-simple-form__review-item-row">
                    <strong>{t('reviewDescription', 'Description')}:</strong>{' '}
                    {formData.goodsDescription}
                  </div>
                )}
                {formData.totalWeight && (
                  <div className="sino-simple-form__review-item-row">
                    <strong>{t('reviewWeight', 'Weight')}:</strong>{' '}
                    {formatWeight(formData.totalWeight)}
                  </div>
                )}
                {formData.numberOfUnits && (
                  <div className="sino-simple-form__review-item-row">
                    <strong>{t('reviewUnits', 'Units')}:</strong> {formData.numberOfUnits}
                  </div>
                )}
                {formData.areGoodsReady && (
                  <div className="sino-simple-form__review-item-row">
                    <strong>{t('reviewReady', 'Ready')}:</strong>{' '}
                    {t(`goodsReady${formData.areGoodsReady}`, formData.areGoodsReady)}
                  </div>
                )}
              </div>
            </div>
          )}

        {/* Contact Section */}
        {(formData.firstName || formData.email || formData.phone) && (
          <div className="sino-simple-form__review-item">
            <div className="sino-simple-form__review-item-header">
              <span className="sino-simple-form__review-item-label">
                {t('reviewContact', 'Contact')}
              </span>
              <button
                type="button"
                className="sino-simple-form__review-edit-button"
                onClick={() => onEditStep(getStepIndex('contact'))}
                aria-label={t('reviewEditContact', 'Edit contact')}
              >
                {t('reviewEdit', 'Edit')}
              </button>
            </div>
            <div className="sino-simple-form__review-item-content">
              {formData.firstName && (
                <div className="sino-simple-form__review-item-row">
                  <strong>{t('reviewName', 'Name')}:</strong> {formData.firstName}
                  {formData.lastName && ` ${formData.lastName}`}
                </div>
              )}
              {formData.email && (
                <div className="sino-simple-form__review-item-row">
                  <strong>{t('reviewEmail', 'Email')}:</strong> {formData.email}
                </div>
              )}
              {formData.phone && (
                <div className="sino-simple-form__review-item-row">
                  <strong>{t('reviewPhone', 'Phone')}:</strong> {formData.phone}
                </div>
              )}
              {formData.companyName && (
                <div className="sino-simple-form__review-item-row">
                  <strong>{t('reviewCompany', 'Company')}:</strong> {formData.companyName}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleReviewSection;
