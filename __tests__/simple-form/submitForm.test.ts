import { describe, test, expect } from 'vitest';
import { prepareSubmissionPayload } from '../../src/simple-form/utils/submitForm';
import { initialSimpleFormData } from '../../src/simple-form/context/types';

describe('prepareSubmissionPayload', () => {
  test('generates submissionId with country code', () => {
    const formData = {
      ...initialSimpleFormData,
      country: 'FR',
    };

    const result = prepareSubmissionPayload(formData);

    expect(result.submissionId).toMatch(/^form-FR-\d+-[a-z0-9]+$/);
  });

  test('generates timestamp in HKT timezone', () => {
    const result = prepareSubmissionPayload(initialSimpleFormData);

    expect(result.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+08:00$/);
  });

  test('converts country code to name', () => {
    const formData = {
      ...initialSimpleFormData,
      country: 'FR',
    };

    const result = prepareSubmissionPayload(formData);
    const payload = result.payload as Record<string, unknown>;
    const shippingRoute = payload.shippingRoute as Record<string, unknown>;

    expect(shippingRoute.destinationCountry).toBe('France');
  });

  test('builds servicesList from servicesRequested', () => {
    const formData = {
      ...initialSimpleFormData,
      servicesRequested: {
        shipping: true,
        sourcing: true,
        dropshipping: false,
        warehousing: false,
        qc: true,
        chinaVisits: false,
        other: false,
      },
    };

    const result = prepareSubmissionPayload(formData);
    const payload = result.payload as Record<string, unknown>;

    expect(payload.servicesList).toEqual([
      'Shipping from China',
      'Product Sourcing',
      'Quality Control',
    ]);
  });

  test('structures contact information correctly', () => {
    const formData = {
      ...initialSimpleFormData,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+33612345678',
      phoneCountryCode: '+33',
      companyName: 'Acme Corp',
      customerType: 'company' as const,
      shipperType: 'regular',
    };

    const result = prepareSubmissionPayload(formData);
    const payload = result.payload as Record<string, unknown>;
    const contact = payload.contact as Record<string, unknown>;

    expect(contact).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+33612345678',
      phoneCountryCode: '+33',
      companyName: 'Acme Corp',
      customerType: 'company',
      shipperType: 'regular',
    });
  });

  test('structures shippingRoute correctly', () => {
    const formData = {
      ...initialSimpleFormData,
      country: 'FR',
      destCity: 'Paris',
      destZipCode: '75001',
      destLocationType: 'warehouse',
      city: 'Shenzhen',
      zipCode: '518000',
      locationType: 'factory',
      origin: 'YTN', // Yantian port code
      mode: 'Sea',
      incoterm: 'FOB',
    };

    const result = prepareSubmissionPayload(formData);
    const payload = result.payload as Record<string, unknown>;
    const shippingRoute = payload.shippingRoute as Record<string, unknown>;

    expect(shippingRoute.destinationCountry).toBe('France');
    expect(shippingRoute.destinationCity).toBe('Paris');
    expect(shippingRoute.destinationZipCode).toBe('75001');
    expect(shippingRoute.originCity).toBe('Shenzhen');
    expect(shippingRoute.shippingMode).toBe('Sea');
    expect(shippingRoute.incoterm).toBe('FOB');
  });

  test('structures shippingCargo correctly', () => {
    const formData = {
      ...initialSimpleFormData,
      goodsDescription: 'Electronics',
      totalWeight: '1500',
      numberOfUnits: 25,
      goodsValue: '15000',
      goodsCurrency: 'USD',
      areGoodsReady: '2_weeks',
      annualVolume: '1001-5000',
      isPersonalOrHazardous: false,
      dimensions: { length: '60', width: '40', height: '40' },
      weightPerUnit: '60',
      remarks: 'Handle with care',
    };

    const result = prepareSubmissionPayload(formData);
    const payload = result.payload as Record<string, unknown>;
    const shippingCargo = payload.shippingCargo as Record<string, unknown>;

    expect(shippingCargo.goodsDescription).toBe('Electronics');
    expect(shippingCargo.totalWeight).toBe('1500');
    expect(shippingCargo.numberOfUnits).toBe(25);
    expect(shippingCargo.goodsValue).toBe('15000');
    expect(shippingCargo.dimensions).toEqual({ length: '60', width: '40', height: '40' });
    expect(shippingCargo.remarks).toBe('Handle with care');
  });

  test('includes all service objects in payload', () => {
    const result = prepareSubmissionPayload(initialSimpleFormData);
    const payload = result.payload as Record<string, unknown>;

    expect(payload).toHaveProperty('servicesRequested');
    expect(payload).toHaveProperty('sourcing');
    expect(payload).toHaveProperty('warehousing');
    expect(payload).toHaveProperty('dropshipping');
    expect(payload).toHaveProperty('qc');
    expect(payload).toHaveProperty('chinaVisit');
    expect(payload).toHaveProperty('otherProject');
  });
});
