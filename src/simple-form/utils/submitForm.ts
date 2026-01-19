import type { SimpleFormData } from '../context/types';
import { COUNTRIES } from '@/data/countries';

// Ports, airports, and rail terminals data (from QuoteForm.tsx)
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

/**
 * Prepare the form data payload for submission
 * Converts country codes to names and origin codes to names
 */
export function prepareSubmissionPayload(formData: SimpleFormData): {
  submissionId: string;
  timestamp: string;
  payload: Record<string, unknown>;
} {
  // 1. Prepare the base formData for the payload
  const payloadBase = { ...formData };

  // 2. Convert country code to name for the main payload data
  const countryObj = COUNTRIES.find((c) => c.code === formData.country);
  if (countryObj) {
    payloadBase.country = countryObj.name; // Country name for the payload field
  }

  // 3. Convert origin port/airport code to name
  const allPortsAndAirports = [...SEA_PORTS, ...AIRPORTS, ...RAIL_TERMINALS];
  const originObj = allPortsAndAirports.find((p) => p.code === formData.origin);
  if (originObj) {
    payloadBase.origin = originObj.name;
  }

  // 4. Add submission metadata and finalize payload
  const now = new Date();
  // Get date and time parts for Hong Kong timezone
  // 'en-CA' locale for YYYY-MM-DD format
  const datePartHKT = now.toLocaleDateString('en-CA', { timeZone: 'Asia/Hong_Kong' });
  // 'en-GB' locale for HH:MM:SS format (24-hour)
  const timePartHKT = now.toLocaleTimeString('en-GB', {
    timeZone: 'Asia/Hong_Kong',
    hourCycle: 'h23',
  });

  const submissionTimestampHKT = `${datePartHKT}T${timePartHKT}+08:00`; // Hong Kong is UTC+8

  // Use formData.country (the code) for the ID, if available, otherwise an empty string or placeholder
  const countryCodeForId = formData.country || 'N/A';
  const submissionId = `form-${countryCodeForId}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

  // Transform servicesRequested object into a human-readable list for CRM
  const servicesList: string[] = [];
  if (formData.servicesRequested.shipping) servicesList.push('Shipping from China');
  if (formData.servicesRequested.sourcing) servicesList.push('Product Sourcing');
  if (formData.servicesRequested.dropshipping) servicesList.push('Dropshipping & Fulfillment');
  if (formData.servicesRequested.warehousing) servicesList.push('Warehousing & Consolidation');
  if (formData.servicesRequested.qc) servicesList.push('Quality Control');
  if (formData.servicesRequested.chinaVisits) servicesList.push('China Business Visit');
  if (formData.servicesRequested.other) servicesList.push('Other Project');

  const finalPayload = {
    // Metadata
    submissionId: submissionId,
    timestamp: submissionTimestampHKT,
    servicesList: servicesList,

    // Contact Information
    contact: {
      firstName: payloadBase.firstName,
      lastName: payloadBase.lastName,
      email: payloadBase.email,
      phone: payloadBase.phone,
      phoneCountryCode: payloadBase.phoneCountryCode,
      companyName: payloadBase.companyName,
      customerType: payloadBase.customerType,
      shipperType: payloadBase.shipperType,
    },

    // Shipping Service Details (Main Form)
    shippingRoute: {
      // Route
      destinationCountry: countryObj ? countryObj.name : payloadBase.country,
      destinationCity: payloadBase.destCity,
      destinationZipCode: payloadBase.destZipCode,
      destinationLocationType: payloadBase.destLocationType,

      originCity: payloadBase.city,
      originZipCode: payloadBase.zipCode,
      originLocationType: payloadBase.locationType,
      originPortOfLoading: originObj ? originObj.name : payloadBase.origin,

      // Transport
      shippingMode: payloadBase.mode,
      incoterm: payloadBase.incoterm,
    },

    shippingCargo: {
      // Cargo (Simple Form direct fields)
      goodsDescription: payloadBase.goodsDescription,
      totalWeight: payloadBase.totalWeight,
      numberOfUnits: payloadBase.numberOfUnits,
      goodsValue: payloadBase.goodsValue,
      goodsCurrency: payloadBase.goodsCurrency,
      areGoodsReady: payloadBase.areGoodsReady,
      annualVolume: payloadBase.annualVolume,
      isPersonalOrHazardous: payloadBase.isPersonalOrHazardous,

      // Optional Advanced details
      dimensions: payloadBase.dimensions,
      weightPerUnit: payloadBase.weightPerUnit,
      remarks: payloadBase.remarks,
    },

    // Other Services (as standalone objects)
    servicesRequested: payloadBase.servicesRequested,
    sourcing: payloadBase.sourcing,
    warehousing: payloadBase.warehousing,
    dropshipping: payloadBase.dropshipping,
    qc: payloadBase.qc,
    chinaVisit: payloadBase.chinaVisit,
    otherProject: payloadBase.otherProject,
  };

  return {
    submissionId,
    timestamp: submissionTimestampHKT,
    payload: finalPayload,
  };
}

/**
 * Submit form data to webhook
 * Returns the submission ID on success, throws error on failure
 */
export async function submitFormData(
  payload: Record<string, unknown>,
  onError?: (error: string) => void
): Promise<string> {
  const WEBHOOK_URL_PROD =
    'https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91';
  // const WEBHOOK_URL_TEST = 'https://n8n.srv783609.hstgr.cloud/webhook-test/5e52c71e-b113-4b3c-8c7d-91c78496ea91'; // Configured in vite.config.ts proxy for dev

  // For standalone builds, always use direct URLs (no proxy available)
  // Only use proxy in dev server mode
  const isDevServer = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  // In dev, use proxy which points to TEST. In prod/standalone, use PROD url.
  const webhookUrl = isDevServer ? '/api/n8n' : WEBHOOK_URL_PROD;

  console.log('[submitFormData] Starting submission with payload:', {
    submissionId: payload.submissionId,
    hasEmail: !!payload.email,
    hasPhone: !!payload.phone,
  });

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
    });

    // In no-cors mode, response is opaque (status 0, ok false, type 'opaque').
    // We cannot read the text() or json(), nor check status.
    // We assume if fetch didn't throw, it was sent.

    console.log('[submitFormData] Webhook request sent (opaque response).');

    // NOTE: We cannot verify valid status in no-cors mode, but it bypasses CORS errors.
    console.log(
      '[submitFormData] Submission successful (assumed), submissionId:',
      payload.submissionId
    );
    return payload.submissionId as string;

    console.log('[submitFormData] Webhook succeeded:', response.status);
    console.log('[submitFormData] Submission successful, submissionId:', payload.submissionId);
    return payload.submissionId as string;
  } catch (error) {
    console.error('[submitFormData] Unexpected error during submission:', error);

    // If error is already handled by onError callback, don't show another message
    if (error instanceof Error && error.message.includes('status')) {
      throw error; // Already handled
    }

    // Network error
    if (error instanceof Error && error.name === 'TypeError' && error.message.includes('fetch')) {
      const errorMessage = `Network error: Could not reach our servers. Please check your internet connection and try again.`;
      console.error('[submitFormData] Network error:', error);
      if (onError) {
        onError(errorMessage);
      }
      throw new Error(errorMessage);
    }

    // Fallback error message
    const fallbackMessage =
      'Something went wrong while sending your request. Please try again in a moment or contact us directly.';

    if (onError) {
      onError(fallbackMessage);
    }
    throw new Error(fallbackMessage);
  }
}
