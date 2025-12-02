/**
 * Simple Form Types - Completely independent from the legacy form
 */

// ============================================
// Service-specific data interfaces
// ============================================

export interface ServicesRequested {
  shipping: boolean;
  sourcing: boolean;
  dropshipping: boolean;
  warehousing: boolean;
  qc: boolean;
  chinaVisits: boolean;
  other: boolean;
}

export interface SourcingData {
  productDescription: string;
  referenceLink: string;
  targetPrice: number | null;
  targetCurrency: string;
  moq: number | null;
  platform: string;
  hasSupplier: boolean | null;
  targetMarkets: string;
  requiredCertifications: string;
  timeline?: string;
  qualityStandards?: string;
  packagingRequirements?: string;
  notes?: string;
}

export interface WarehousingData {
  duration: string;
  skuCount: number | null;
  consolidation: boolean | null;
  extraServices: string[];
  notes: string;
}

export interface DropshippingData {
  products: string;
  model: string;
  customerCountries: string;
  dailyOrders: number | null;
  hasCatalog: boolean | null;
  brandingNeeded: boolean | null;
  notes: string;
}

export interface QcData {
  type: string;
  productionStage: string;
  factoryCity: string;
  preferredDate: string;
  notes: string;
}

export interface ChinaVisitData {
  visitType: string[];
  mainCity: string;
  otherCities: string;
  fairName: string;
  factoryDescription: string;
  cantonPhase: string;
  startDate: string;
  endDate: string;
  numberOfDays: number | null;
  numberOfTravelers: number | null;
  needGuide: boolean | null;
  needTransport: boolean | null;
  needHotels: boolean | null;
  notes: string;
}

export interface OtherProjectData {
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
}

// ============================================
// Main SimpleFormData interface
// ============================================

export interface SimpleFormData {
  // Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  companyName: string;
  customerType: 'individual' | 'company' | '';
  shipperType: string;

  // Shipping Route - Destination
  country: string;
  destCity: string;
  destZipCode: string;
  destLocationType: string;

  // Shipping Route - Origin (China)
  origin: string;
  city: string;
  zipCode: string;
  locationType: string;

  // Shipping Mode
  mode: string;
  incoterm: string;

  // Cargo details (direct fields, no loads array)
  goodsDescription: string;
  totalWeight: string;
  numberOfUnits: number;
  dimensions: { length: string; width: string; height: string };
  weightPerUnit: string;
  goodsValue: string;
  goodsCurrency: string;
  areGoodsReady: string;
  annualVolume: string;
  isPersonalOrHazardous: boolean;
  remarks: string;

  // Services
  servicesRequested: ServicesRequested;
  sourcing: SourcingData;
  warehousing: WarehousingData;
  dropshipping: DropshippingData;
  qc: QcData;
  chinaVisit: ChinaVisitData;
  otherProject: OtherProjectData;
}

// ============================================
// Initial state
// ============================================

export const initialSimpleFormData: SimpleFormData = {
  // Contact
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  phoneCountryCode: '+33',
  companyName: '',
  customerType: '',
  shipperType: '',

  // Shipping Route - Destination
  country: '',
  destCity: '',
  destZipCode: '',
  destLocationType: '',

  // Shipping Route - Origin
  origin: '',
  city: '',
  zipCode: '',
  locationType: '',

  // Shipping Mode
  mode: '',
  incoterm: '',

  // Cargo details
  goodsDescription: '',
  totalWeight: '',
  numberOfUnits: 1,
  dimensions: { length: '', width: '', height: '' },
  weightPerUnit: '',
  goodsValue: '',
  goodsCurrency: 'USD',
  areGoodsReady: '',
  annualVolume: '',
  isPersonalOrHazardous: false,
  remarks: '',

  // Services
  servicesRequested: {
    shipping: true,
    sourcing: false,
    dropshipping: false,
    warehousing: false,
    qc: false,
    chinaVisits: false,
    other: false,
  },
  sourcing: {
    productDescription: '',
    referenceLink: '',
    targetPrice: null,
    targetCurrency: 'USD',
    moq: null,
    platform: '',
    hasSupplier: null,
    targetMarkets: '',
    requiredCertifications: '',
    timeline: '',
    qualityStandards: '',
    packagingRequirements: '',
    notes: '',
  },
  warehousing: {
    duration: '',
    skuCount: null,
    consolidation: null,
    extraServices: [],
    notes: '',
  },
  dropshipping: {
    products: '',
    model: '',
    customerCountries: '',
    dailyOrders: null,
    hasCatalog: null,
    brandingNeeded: null,
    notes: '',
  },
  qc: {
    type: '',
    productionStage: '',
    factoryCity: '',
    preferredDate: '',
    notes: '',
  },
  chinaVisit: {
    visitType: [],
    mainCity: '',
    otherCities: '',
    fairName: '',
    factoryDescription: '',
    cantonPhase: '',
    startDate: '',
    endDate: '',
    numberOfDays: null,
    numberOfTravelers: null,
    needGuide: null,
    needTransport: null,
    needHotels: null,
    notes: '',
  },
  otherProject: {
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
  },
};

// ============================================
// Context value type
// ============================================

export interface SimpleFormContextValue {
  formData: SimpleFormData;
  setFormData: React.Dispatch<React.SetStateAction<SimpleFormData>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

// Type alias for component props (replaces Pick<QuoteFormContextValue, ...>)
export type SimpleFormProps = Pick<SimpleFormContextValue, 'formData' | 'setFormData'>;
