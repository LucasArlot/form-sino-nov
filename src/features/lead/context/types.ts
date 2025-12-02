export interface LoadDetails {
  shippingType: 'loose' | 'container' | 'unsure' | '';
  calculationType: 'unit' | 'total';
  packageType: 'pallets' | 'boxes' | '';
  numberOfUnits: number;
  palletType: string;
  dimensions: { length: string; width: string; height: string };
  dimensionUnit: string;
  weightPerUnit: string;
  weightUnit: string;
  totalVolume: string;
  totalVolumeUnit: string;
  totalWeight: string;
  totalWeightUnit: string;
  containerType: "20'" | "40'" | "40'HC" | "45'HC";
  isOverweight: boolean;
  specialRequirements?: string[];
  goodsDescription?: string;
  urgency?: string;
}

export const initialLoadDetails: LoadDetails = {
  shippingType: '',
  calculationType: 'total',
  packageType: 'pallets',
  numberOfUnits: 1,
  palletType: 'non_specified',
  dimensions: { length: '', width: '', height: '' },
  dimensionUnit: 'CM',
  weightPerUnit: '',
  weightUnit: 'KG',
  totalVolume: '',
  totalVolumeUnit: 'CBM',
  totalWeight: '',
  totalWeightUnit: 'KG',
  containerType: "20'",
  isOverweight: false,
  specialRequirements: [],
  goodsDescription: '',
  urgency: '',
};

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

export interface FormData {
  country: string;
  origin: string;
  mode: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  customerType?: 'individual' | 'company' | '';
  locationType: string;
  city: string;
  zipCode: string;
  destLocationType: string;
  destCity: string;
  destZipCode: string;
  destPort: string;
  firstName: string;
  lastName: string;
  companyName: string;
  shipperType: string;
  loads: LoadDetails[];
  goodsValue: string;
  goodsCurrency: string;
  isPersonalOrHazardous: boolean;
  areGoodsReady: string;
  goodsDescription: string;
  specialRequirements: string;
  remarks: string;

  // Shipping meta
  incoterm: string;
  annualVolume: string;

  // Simple form cargo fields (direct, no loads array)
  totalWeight: string;
  numberOfUnits: number;
  dimensions: { length: string; width: string; height: string };
  weightPerUnit: string;

  // Multi-service extensions
  servicesRequested: ServicesRequested;
  sourcing: SourcingData;
  warehousing: WarehousingData;
  dropshipping: DropshippingData;
  qc: QcData;
  chinaVisit: ChinaVisitData;
  otherProject: OtherProjectData;
}

export const initialFormData: FormData = {
  country: '',
  origin: '',
  mode: '',
  email: '',
  phone: '',
  phoneCountryCode: '+234',
  customerType: '',
  locationType: '',
  city: '',
  zipCode: '',
  destLocationType: '',
  destCity: '',
  destZipCode: '',
  destPort: '',
  firstName: '',
  lastName: '',
  companyName: '',
  shipperType: '',
  loads: [JSON.parse(JSON.stringify(initialLoadDetails))],
  goodsValue: '',
  goodsCurrency: 'USD',
  isPersonalOrHazardous: false,
  areGoodsReady: 'yes',
  goodsDescription: '',
  specialRequirements: '',
  remarks: '',

  incoterm: '',
  annualVolume: '',

  // Simple form cargo fields
  totalWeight: '',
  numberOfUnits: 1,
  dimensions: { length: '', width: '', height: '' },
  weightPerUnit: '',

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

export interface FieldValid {
  country: boolean | null;
  origin: boolean | null;
  mode: boolean | null;
  email: boolean | null;
  phone: boolean | null;
  phoneCountryCode: boolean | null;
  city: boolean | null;
  zipCode: boolean | null;
  destCity: boolean | null;
  destZipCode: boolean | null;
  destPort: boolean | null;
  firstName: boolean | null;
  lastName: boolean | null;
  companyName: boolean | null;
  shipperType: boolean | null;
  goodsValue: boolean | null;
  destLocationType: boolean | null;
}

export const initialFieldValid: FieldValid = {
  country: null,
  origin: null,
  mode: null,
  email: null,
  phone: null,
  phoneCountryCode: null,
  city: null,
  zipCode: null,
  destCity: null,
  destZipCode: null,
  destPort: null,
  firstName: null,
  lastName: null,
  companyName: null,
  shipperType: null,
  goodsValue: null,
  destLocationType: null,
};
