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
  notes: string;
  targetMarkets: string;
  requiredCertifications: string;
}

export interface WarehousingData {
  needed: boolean | null;
  duration: string;
  skuCount: number | null;
  consolidation: boolean | null;
  extraServices: string[];
  specialHandling?: string;
  notes: string;
}

export interface DropshippingData {
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
  visitType: string;
  mainCity: string;
  otherCities: string;
  fairName: string;
  cantonPhase: string;
  startDate: string;
  endDate: string;
  numberOfDays: number | null;
  numberOfTravelers: number | null;
  needInterpreter: boolean | null;
  languages: string;
  localTransportNeeds: string[];
  needHotel: boolean | null;
  mainGoal: string;
  willShipAfterVisit: boolean | null;
  remarks: string;
  tripBudget: string;
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

  // Multi-service extensions
  servicesRequested: ServicesRequested;
  sourcing: SourcingData;
  warehousing: WarehousingData;
  dropshipping: DropshippingData;
  qc: QcData;
  chinaVisit: ChinaVisitData;
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
    notes: '',
    targetMarkets: '',
    requiredCertifications: '',
  },
  warehousing: {
    needed: null,
    duration: '',
    skuCount: null,
    consolidation: null,
    extraServices: [],
    notes: '',
  },
  dropshipping: {
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
    visitType: '',
    mainCity: '',
    otherCities: '',
    fairName: '',
    cantonPhase: '',
    startDate: '',
    endDate: '',
    numberOfDays: null,
    numberOfTravelers: null,
    needInterpreter: null,
    languages: '',
    localTransportNeeds: [],
    needHotel: null,
    mainGoal: '',
    willShipAfterVisit: null,
    remarks: '',
    tripBudget: '',
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
