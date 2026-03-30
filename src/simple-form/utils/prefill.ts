/**
 * Prefill engine – config-driven URL param parsing + JS API support
 *
 * Replaces ~800 lines of imperative if/else with a declarative config.
 * Supports: URL query params, data-prefill-* attributes, init({ prefill }) API.
 */

import type { SimpleFormData, ServicesRequested } from '../context/types';
import { initialSimpleFormData } from '../context/types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PrefillResult {
  /** Partial form data to merge into state */
  data: Partial<SimpleFormData>;
  /** Set of top-level field paths that were prefilled (for highlight) */
  fields: Set<string>;
  /** Number of prefilled fields */
  count: number;
  /** Source of the prefill data */
  source: 'url' | 'props' | 'attributes' | 'none';
}

type TransformFn = (raw: string) => unknown;

interface FieldMapping {
  /** URL param name (or data-prefill-* suffix) */
  param: string;
  /** Dot-path into SimpleFormData, e.g. "sourcing.productDescription" */
  field: string;
  /** Optional transform applied to the raw string value */
  transform?: TransformFn;
  /** If true, value is appended to existing field value (with " — " separator) */
  append?: boolean;
  /** Restrict accepted values to this allow-list */
  allow?: string[];
}

interface ServiceFlowConfig {
  /** Which services to auto-enable */
  services: Partial<ServicesRequested>;
  /** Which services to force-disable (e.g. shipping: false) */
  disableServices?: Partial<ServicesRequested>;
  /** Additional field mappings specific to this flow */
  params: FieldMapping[];
  /** Extra remarks to build from URL params */
  remarkParams?: Array<{ param: string; label: string; map?: Record<string, string> }>;
}

// ---------------------------------------------------------------------------
// Shared transforms
// ---------------------------------------------------------------------------

const modeTransform: TransformFn = (v) => {
  const map: Record<string, string> = {
    sea: 'Sea',
    air: 'Air',
    rail: 'Railway',
    express: 'Express',
  };
  return map[v.toLowerCase()] ?? v;
};

const budgetTransform: TransformFn = (v) => {
  const map: Record<string, number> = {
    '3-5k': 3000,
    '5-10k': 5000,
    '10-25k': 10000,
    '25-50k': 25000,
    '50k+': 50000,
  };
  return map[v] ?? (Number(v) || null);
};

// ---------------------------------------------------------------------------
// Config: generic field mappings (applied for ALL requests)
// ---------------------------------------------------------------------------

const GENERIC_FIELDS: FieldMapping[] = [
  { param: 'country', field: 'country' },
  { param: 'destCity', field: 'destCity' },
  { param: 'city', field: 'city' },
  { param: 'email', field: 'email' },
  { param: 'phone', field: 'phone' },
  { param: 'firstName', field: 'firstName' },
  { param: 'lastName', field: 'lastName' },
  { param: 'companyName', field: 'companyName' },
  { param: 'mode', field: 'mode', transform: modeTransform },
  { param: 'totalWeight', field: 'totalWeight' },
  { param: 'goodsDescription', field: 'goodsDescription' },
  { param: 'incoterm', field: 'incoterm', allow: ['DDP', 'DAP', 'FOB', 'EXW', 'CIF', 'CFR'] },
  { param: 'remarks', field: 'remarks' },
  { param: 'origin', field: 'origin' },
  { param: 'goodsValue', field: 'goodsValue' },
  { param: 'goodsCurrency', field: 'goodsCurrency', allow: ['USD', 'EUR', 'GBP', 'CNY'] },
  { param: 'customerType', field: 'customerType', allow: ['individual', 'company'] },
  { param: 'shipperType', field: 'shipperType' },
];

// ---------------------------------------------------------------------------
// Config: service flow mappings (applied when ?service=X)
// ---------------------------------------------------------------------------

const SERVICE_FLOWS: Record<string, ServiceFlowConfig> = {
  shipping: {
    services: { shipping: true },
    params: [],
  },
  freight: {
    services: { shipping: true },
    params: [],
  },

  sourcing: {
    services: { sourcing: true },
    disableServices: { shipping: false },
    params: [
      { param: 'product', field: 'sourcing.productDescription' },
      { param: 'category', field: 'sourcing.productDescription', append: true },
      { param: 'budget', field: 'sourcing.targetPrice', transform: budgetTransform },
      { param: 'platform', field: 'sourcing.platform' },
      { param: 'referenceLink', field: 'sourcing.referenceLink' },
    ],
    remarkParams: [
      {
        param: 'stage',
        label: 'Stage',
        map: {
          idea: 'Idea / Research',
          samples: 'Need Samples',
          ready: 'Ready to Order',
          switch: 'Switching Supplier',
        },
      },
    ],
  },

  qc: {
    services: { qc: true },
    disableServices: { shipping: false },
    params: [
      {
        param: 'inspectionType',
        field: 'qc.type',
        allow: ['PSI', 'DUPRO', 'PreProd', 'Audit', 'CLI', 'Multiple'],
      },
      {
        param: 'region',
        field: 'qc.factoryCity',
        transform: (v) => {
          const map: Record<string, string> = {
            PRD: 'Guangdong / PRD',
            YRD: 'Shanghai / Zhejiang',
            North: 'Qingdao / North',
            Yiwu: 'Yiwu / Central',
          };
          return map[v] ?? v;
        },
      },
      { param: 'preferredDate', field: 'qc.preferredDate' },
    ],
    remarkParams: [
      { param: 'aql', label: 'AQL' },
      { param: 'product', label: 'Product' },
      { param: 'orderValue', label: 'Order Value' },
    ],
  },
  inspection: {
    services: { qc: true },
    disableServices: { shipping: false },
    params: [],
    remarkParams: [],
  },

  warehousing: {
    services: { warehousing: true },
    disableServices: { shipping: false },
    params: [{ param: 'duration', field: 'warehousing.duration' }],
    remarkParams: [
      { param: 'volume', label: 'Volume' },
      { param: 'frequency', label: 'Frequency' },
      { param: 'suppliers', label: 'Suppliers' },
      { param: 'product', label: 'Product' },
    ],
  },

  dropshipping: {
    services: { dropshipping: true },
    disableServices: { shipping: false },
    params: [
      { param: 'products', field: 'dropshipping.products' },
      { param: 'model', field: 'dropshipping.model' },
      { param: 'customerCountries', field: 'dropshipping.customerCountries' },
    ],
  },

  chinaVisits: {
    services: { chinaVisits: true },
    disableServices: { shipping: false },
    params: [
      { param: 'mainCity', field: 'chinaVisit.mainCity' },
      { param: 'factoryDescription', field: 'chinaVisit.factoryDescription' },
      { param: 'fairName', field: 'chinaVisit.fairName' },
    ],
  },
  canton: {
    services: { chinaVisits: true },
    disableServices: { shipping: false },
    params: [
      { param: 'cantonPhase', field: 'chinaVisit.cantonPhase' },
      { param: 'factoryDescription', field: 'chinaVisit.factoryDescription' },
    ],
  },
  yiwu: {
    services: { chinaVisits: true },
    disableServices: { shipping: false },
    params: [{ param: 'factoryDescription', field: 'chinaVisit.factoryDescription' }],
  },
};

// Alias mappings
SERVICE_FLOWS['factory'] = SERVICE_FLOWS['chinaVisits'];
SERVICE_FLOWS['cantonFair'] = SERVICE_FLOWS['canton'];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Set a value at a dot-path on a target object, e.g. "sourcing.productDescription"
 */
function setPath(
  target: Record<string, unknown>,
  path: string,
  value: unknown,
  append?: boolean
): void {
  const parts = path.split('.');
  let current = target;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }
  const lastKey = parts[parts.length - 1];
  if (append && typeof current[lastKey] === 'string' && current[lastKey]) {
    current[lastKey] = `${current[lastKey]} — ${value}`;
  } else {
    current[lastKey] = value;
  }
}

/**
 * Get a string value from a source map (URL params, attributes, or JS object).
 */
function getParam(source: Map<string, string>, key: string): string | null {
  return source.get(key) ?? null;
}

/**
 * Build a flat Map<string, string> from URL search params.
 */
function parseUrlParams(): Map<string, string> {
  if (typeof window === 'undefined') return new Map();
  const params = new URLSearchParams(window.location.search);
  const map = new Map<string, string>();
  params.forEach((value, key) => {
    map.set(key, value);
  });
  return map;
}

/**
 * Build a flat Map<string, string> from data-prefill-* attributes on a container.
 */
function parseDataAttributes(containerId: string): Map<string, string> {
  if (typeof document === 'undefined') return new Map();
  const container = document.getElementById(containerId);
  if (!container) return new Map();
  const map = new Map<string, string>();
  Array.from(container.attributes).forEach((attr) => {
    if (attr.name.startsWith('data-prefill-')) {
      const key = attr.name
        .replace('data-prefill-', '')
        .replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
      map.set(key, attr.value);
    }
  });
  return map;
}

/**
 * Build a flat Map<string, string> from a JS object (from init({ prefill })).
 * Flattens nested objects with dot-paths.
 */
function flattenObject(obj: Record<string, unknown>, prefix = ''): Map<string, string> {
  const map = new Map<string, string>();
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (
      value !== null &&
      value !== undefined &&
      typeof value === 'object' &&
      !Array.isArray(value)
    ) {
      const nested = flattenObject(value as Record<string, unknown>, fullKey);
      nested.forEach((v, k) => map.set(k, v));
    } else if (value !== null && value !== undefined) {
      map.set(fullKey, String(value));
    }
  }
  return map;
}

// ---------------------------------------------------------------------------
// Core: apply field mappings
// ---------------------------------------------------------------------------

function applyMappings(
  source: Map<string, string>,
  mappings: FieldMapping[],
  target: Record<string, unknown>,
  fields: Set<string>
): void {
  for (const mapping of mappings) {
    const raw = getParam(source, mapping.param);
    if (raw === null || raw === '') continue;

    if (mapping.allow && !mapping.allow.includes(raw)) continue;

    const value = mapping.transform ? mapping.transform(raw) : raw;
    if (value === null || value === undefined) continue;

    // Validate the value before applying
    const leafField = mapping.field.split('.').pop() ?? mapping.field;
    if (!validatePrefillValue(leafField, value)) continue;

    setPath(target, mapping.field, value, mapping.append);
    fields.add(mapping.field);
  }
}

/**
 * Build remark notes from config
 */
function buildRemarks(
  source: Map<string, string>,
  remarkParams: Array<{ param: string; label: string; map?: Record<string, string> }>
): string {
  const parts: string[] = [];
  for (const rp of remarkParams) {
    const raw = getParam(source, rp.param);
    if (!raw) continue;
    const display = rp.map?.[raw] ?? raw;
    parts.push(`${rp.label}: ${display}`);
  }
  return parts.join(' | ');
}

// ---------------------------------------------------------------------------
// Referrer-based service auto-detection
// ---------------------------------------------------------------------------

const REFERRER_SERVICE_MAP: Array<{ pattern: RegExp; service: keyof ServicesRequested }> = [
  { pattern: /\/services\/supplier-sourcing/i, service: 'sourcing' },
  { pattern: /\/services\/quality-control/i, service: 'qc' },
  { pattern: /\/services\/warehousing/i, service: 'warehousing' },
  { pattern: /\/services\/consolidation/i, service: 'warehousing' },
  { pattern: /\/services\/canton-fair/i, service: 'chinaVisits' },
  { pattern: /\/services\/yiwu-market/i, service: 'chinaVisits' },
  { pattern: /\/services\/factory-visits/i, service: 'chinaVisits' },
  { pattern: /\/services\/amazon-fba-prep/i, service: 'shipping' },
  { pattern: /\/services\/labeling-packaging/i, service: 'shipping' },
  { pattern: /\/services\/compliance-docs/i, service: 'shipping' },
  { pattern: /\/services\/photo-video-reports/i, service: 'qc' },
  { pattern: /\/services\/negotiation-samples/i, service: 'sourcing' },
  { pattern: /\/services\/supplier-verification/i, service: 'sourcing' },
  { pattern: /\/services\/freight-forwarding/i, service: 'shipping' },
  { pattern: /\/shipping\//i, service: 'shipping' },
  { pattern: /\/shipping-from-china/i, service: 'shipping' },
  { pattern: /sourcing/i, service: 'sourcing' },
  { pattern: /inspection|quality/i, service: 'qc' },
  { pattern: /dropshipping|fulfillment/i, service: 'dropshipping' },
];

function detectServiceFromReferrer(): keyof ServicesRequested | null {
  if (typeof document === 'undefined') return null;
  const referrer = document.referrer;
  if (!referrer) return null;

  try {
    const refUrl = new URL(referrer);
    const path = refUrl.pathname;
    for (const { pattern, service } of REFERRER_SERVICE_MAP) {
      if (pattern.test(path)) return service;
    }
  } catch {
    // invalid referrer URL
  }
  return null;
}

// ---------------------------------------------------------------------------
// Prefill validation
// ---------------------------------------------------------------------------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_MODES = ['Sea', 'Air', 'Railway', 'Express'];
const VALID_INCOTERMS = ['DDP', 'DAP', 'FOB', 'EXW', 'CIF', 'CFR', 'DAT'];
const VALID_CUSTOMER_TYPES = ['individual', 'company', ''];
const VALID_CURRENCIES = ['USD', 'EUR', 'GBP', 'CNY'];

function validatePrefillValue(field: string, value: unknown): boolean {
  if (value === null || value === undefined || value === '') return false;
  const str = String(value);

  switch (field) {
    case 'email':
      return EMAIL_RE.test(str);
    case 'mode':
      return VALID_MODES.includes(str);
    case 'incoterm':
      return VALID_INCOTERMS.includes(str);
    case 'customerType':
      return VALID_CUSTOMER_TYPES.includes(str);
    case 'goodsCurrency':
      return VALID_CURRENCIES.includes(str);
    case 'totalWeight':
      return str.length > 0 && !isNaN(Number(str.replace(/[, ]/g, '')));
    case 'goodsValue':
      return str.length > 0 && !isNaN(Number(str.replace(/[, ]/g, '')));
    default:
      return str.length > 0 && str.length < 2000;
  }
}

// ---------------------------------------------------------------------------
// Public: buildPrefill
// ---------------------------------------------------------------------------

/**
 * Build prefill data from all available sources.
 * Priority: init props > URL params > data attributes > referrer detection.
 */
export function buildPrefill(options?: {
  containerId?: string;
  initPrefill?: Record<string, unknown>;
}): PrefillResult {
  const empty: PrefillResult = { data: {}, fields: new Set(), count: 0, source: 'none' };

  // 1. Collect sources (highest priority first)
  let source: Map<string, string>;
  let prefillSource: PrefillResult['source'];

  if (options?.initPrefill && Object.keys(options.initPrefill).length > 0) {
    source = flattenObject(options.initPrefill);
    prefillSource = 'props';
  } else {
    const urlParams = parseUrlParams();
    const attrParams = options?.containerId
      ? parseDataAttributes(options.containerId)
      : new Map<string, string>();

    if (urlParams.size > 0) {
      // Merge: URL wins over attributes
      attrParams.forEach((v, k) => {
        if (!urlParams.has(k)) urlParams.set(k, v);
      });
      source = urlParams;
      prefillSource = 'url';
    } else if (attrParams.size > 0) {
      source = attrParams;
      prefillSource = 'attributes';
    } else {
      // No explicit prefill sources — try referrer-based auto-detect
      const autoService = detectServiceFromReferrer();
      if (autoService) {
        source = new Map([['service', autoService]]);
        prefillSource = 'url';
      } else {
        return empty;
      }
    }
  }

  if (source.size === 0) return empty;

  const target: Record<string, unknown> = {};
  const fields = new Set<string>();

  // 2. Apply generic field mappings
  applyMappings(source, GENERIC_FIELDS, target, fields);

  // Auto-set origin to China when city is provided but origin is not
  if (fields.has('city') && !fields.has('origin')) {
    target.origin = 'China';
    fields.add('origin');
  }

  // 3. Handle services selection
  const serviceParam = getParam(source, 'service')?.toLowerCase();
  const servicesParam = getParam(source, 'services') || getParam(source, 'addons');

  let servicesRequested: Partial<ServicesRequested> = {};
  let hasServiceSelection = false;

  // Single service param (?service=sourcing)
  if (serviceParam && SERVICE_FLOWS[serviceParam]) {
    const flow = SERVICE_FLOWS[serviceParam];
    servicesRequested = { ...initialSimpleFormData.servicesRequested, ...flow.services };
    if (flow.disableServices) {
      servicesRequested = { ...servicesRequested, ...flow.disableServices };
    }
    hasServiceSelection = true;

    // Apply flow-specific field mappings
    applyMappings(source, flow.params, target, fields);

    // Build flow-specific remarks
    if (flow.remarkParams && flow.remarkParams.length > 0) {
      const remarkStr = buildRemarks(source, flow.remarkParams);
      if (remarkStr) {
        // Merge into the service-specific notes field
        const notesField = getNotesFieldForService(serviceParam);
        if (notesField) {
          setPath(target, notesField, remarkStr);
          fields.add(notesField);
        }
      }
    }
  }

  // Comma-separated services (?services=sourcing,qc)
  if (servicesParam) {
    const list = servicesParam
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
    const svcMap: Record<string, keyof ServicesRequested> = {
      shipping: 'shipping',
      freight: 'shipping',
      sourcing: 'sourcing',
      dropshipping: 'dropshipping',
      fulfillment: 'dropshipping',
      warehousing: 'warehousing',
      qc: 'qc',
      inspection: 'qc',
      quality: 'qc',
      china: 'chinaVisits',
      visit: 'chinaVisits',
      trip: 'chinaVisits',
    };
    for (const item of list) {
      for (const [keyword, svcKey] of Object.entries(svcMap)) {
        if (item.includes(keyword)) {
          servicesRequested[svcKey] = true;
          hasServiceSelection = true;
        }
      }
    }
  }

  if (hasServiceSelection) {
    target.servicesRequested = { ...initialSimpleFormData.servicesRequested, ...servicesRequested };
    fields.add('servicesRequested');
  }

  // 4. Handle extra remarks from generic params
  const extraRemarks: string[] = [];
  const remarkSources = [
    { param: 'loadType', label: 'Load Type', transform: (v: string) => v.toUpperCase() },
    { param: 'cargoDetails', label: 'Cargo Details' },
    { param: 'carrier', label: 'Preferred Carrier', transform: (v: string) => v.toUpperCase() },
    {
      param: 'urgency',
      label: 'Urgency',
      transform: (v: string) => (v === 'express' ? 'Express (1-3 days)' : 'Standard (5-7 days)'),
    },
    { param: 'cargo', label: 'Cargo Type' },
    { param: 'segment', label: 'Business Type' },
  ];
  for (const rs of remarkSources) {
    const raw = getParam(source, rs.param);
    if (!raw) continue;
    const display = rs.transform ? rs.transform(raw) : raw;
    extraRemarks.push(`${rs.label}: ${display}`);
  }
  if (extraRemarks.length > 0) {
    const existing = (target.remarks as string) ?? '';
    target.remarks = [existing, ...extraRemarks].filter(Boolean).join('\n');
    fields.add('remarks');
  }

  // 5. Clean URL params after reading (avoid double-apply on re-mount)
  if (prefillSource === 'url' && typeof window !== 'undefined') {
    window.history.replaceState({}, '', window.location.pathname);
  }

  return {
    data: target as Partial<SimpleFormData>,
    fields,
    count: fields.size,
    source: prefillSource,
  };
}

// ---------------------------------------------------------------------------
// Helper: map service key to its notes field
// ---------------------------------------------------------------------------

function getNotesFieldForService(serviceKey: string): string | null {
  const map: Record<string, string> = {
    sourcing: 'sourcing.notes',
    qc: 'qc.notes',
    inspection: 'qc.notes',
    warehousing: 'warehousing.notes',
    dropshipping: 'dropshipping.notes',
    chinaVisits: 'chinaVisit.notes',
    canton: 'chinaVisit.notes',
    cantonFair: 'chinaVisit.notes',
    yiwu: 'chinaVisit.notes',
    factory: 'chinaVisit.notes',
  };
  return map[serviceKey] ?? null;
}

// ---------------------------------------------------------------------------
// Helper: human-readable labels for prefilled fields
// ---------------------------------------------------------------------------

export const FIELD_LABELS: Record<string, string> = {
  country: 'Country',
  destCity: 'Destination city',
  city: 'Origin city',
  origin: 'Origin',
  email: 'Email',
  phone: 'Phone',
  firstName: 'First name',
  lastName: 'Last name',
  companyName: 'Company',
  mode: 'Shipping mode',
  totalWeight: 'Weight',
  goodsDescription: 'Product',
  incoterm: 'Incoterm',
  goodsValue: 'Goods value',
  goodsCurrency: 'Currency',
  customerType: 'Customer type',
  shipperType: 'Shipper type',
  remarks: 'Remarks',
  servicesRequested: 'Services',
  'sourcing.productDescription': 'Product',
  'sourcing.targetPrice': 'Budget',
  'sourcing.platform': 'Platform',
  'sourcing.referenceLink': 'Reference link',
  'sourcing.notes': 'Details',
  'qc.type': 'Inspection type',
  'qc.factoryCity': 'Region',
  'qc.preferredDate': 'Preferred date',
  'qc.notes': 'Details',
  'warehousing.duration': 'Duration',
  'warehousing.notes': 'Details',
  'dropshipping.products': 'Products',
  'dropshipping.model': 'Model',
  'dropshipping.customerCountries': 'Target countries',
  'dropshipping.notes': 'Details',
  'chinaVisit.mainCity': 'City',
  'chinaVisit.fairName': 'Fair',
  'chinaVisit.cantonPhase': 'Phase',
  'chinaVisit.factoryDescription': 'Product/factory',
  'chinaVisit.notes': 'Details',
};

export const SERVICE_LABELS: Record<keyof ServicesRequested, string> = {
  shipping: 'Shipping',
  sourcing: 'Sourcing',
  dropshipping: 'Dropshipping',
  warehousing: 'Warehousing',
  qc: 'Quality Control',
  chinaVisits: 'China Visits',
  other: 'Other',
};

// ---------------------------------------------------------------------------
// Helper: group prefilled fields by category for the banner
// ---------------------------------------------------------------------------

export interface PrefillGroup {
  label: string;
  items: Array<{ field: string; label: string; value: string }>;
}

export function groupPrefillFields(
  data: Partial<SimpleFormData>,
  fields: Set<string>
): PrefillGroup[] {
  const groups: PrefillGroup[] = [];

  // Services
  if (fields.has('servicesRequested') && data.servicesRequested) {
    const selected = Object.entries(data.servicesRequested)
      .filter(([, v]) => v)
      .map(([k]) => SERVICE_LABELS[k as keyof ServicesRequested] ?? k);
    if (selected.length > 0) {
      groups.push({
        label: 'Services',
        items: [{ field: 'servicesRequested', label: 'Services', value: selected.join(', ') }],
      });
    }
  }

  // Sourcing
  const sourcingItems = collectGroupItems(data, fields, 'sourcing.');
  if (sourcingItems.length > 0) groups.push({ label: 'Sourcing', items: sourcingItems });

  // Shipping / Route
  const routeFields = [
    'country',
    'destCity',
    'city',
    'origin',
    'mode',
    'incoterm',
    'totalWeight',
    'goodsDescription',
  ];
  const routeItems = routeFields
    .filter((f) => fields.has(f))
    .map((f) => ({
      field: f,
      label: FIELD_LABELS[f] ?? f,
      value: formatValue(f, (data as Record<string, unknown>)[f]),
    }))
    .filter((item) => item.value);
  if (routeItems.length > 0) groups.push({ label: 'Route & Shipping', items: routeItems });

  // QC
  const qcItems = collectGroupItems(data, fields, 'qc.');
  if (qcItems.length > 0) groups.push({ label: 'Quality Control', items: qcItems });

  // Warehousing
  const whItems = collectGroupItems(data, fields, 'warehousing.');
  if (whItems.length > 0) groups.push({ label: 'Warehousing', items: whItems });

  // Dropshipping
  const dsItems = collectGroupItems(data, fields, 'dropshipping.');
  if (dsItems.length > 0) groups.push({ label: 'Dropshipping', items: dsItems });

  // China visits
  const cvItems = collectGroupItems(data, fields, 'chinaVisit.');
  if (cvItems.length > 0) groups.push({ label: 'China Visit', items: cvItems });

  // Contact
  const contactFields = ['email', 'phone', 'firstName', 'lastName', 'companyName'];
  const contactItems = contactFields
    .filter((f) => fields.has(f))
    .map((f) => ({
      field: f,
      label: FIELD_LABELS[f] ?? f,
      value: String((data as Record<string, unknown>)[f] ?? ''),
    }))
    .filter((item) => item.value);
  if (contactItems.length > 0) groups.push({ label: 'Contact', items: contactItems });

  return groups;
}

function collectGroupItems(
  data: Partial<SimpleFormData>,
  fields: Set<string>,
  prefix: string
): PrefillGroup['items'] {
  const topKey = prefix.replace('.', '') as keyof SimpleFormData;
  const nested = data[topKey];
  if (!nested || typeof nested !== 'object') return [];

  return Array.from(fields)
    .filter((f) => f.startsWith(prefix))
    .map((f) => {
      const subKey = f.slice(prefix.length);
      const value = (nested as Record<string, unknown>)[subKey];
      return {
        field: f,
        label: FIELD_LABELS[f] ?? subKey,
        value: formatValue(f, value),
      };
    })
    .filter((item) => item.value);
}

function formatValue(field: string, value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'number') {
    if (field.includes('Price') || field.includes('budget')) {
      return `$${value.toLocaleString()}`;
    }
    return String(value);
  }
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return String(value);
}
