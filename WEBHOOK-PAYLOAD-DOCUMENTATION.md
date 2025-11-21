# Documentation du Payload JSON envoyé à la Webhook

## URL de la Webhook

- **Production:** `https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91`
- **Développement:** `/api/n8n` (proxy local)

## Méthode HTTP

```
POST
Content-Type: application/json
```

## Structure du Payload

Le payload est construit par la fonction `prepareSubmissionPayload()` dans `src/simple-form/utils/submitForm.ts`.

### Champs Principaux

#### Métadonnées de soumission

```json
{
  "submissionId": "form-{COUNTRY_CODE}-{TIMESTAMP}-{RANDOM}",
  "timestamp": "2025-01-15T14:30:45+08:00"
}
```

- `submissionId`: ID unique généré automatiquement (format: `form-{code_pays}-{timestamp}-{random}`)
- `timestamp`: Date et heure au format ISO 8601, fuseau horaire Hong Kong (UTC+8)

---

#### Informations de contact

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+33123456789",
  "phoneCountryCode": "+33",
  "companyName": "Example Company Ltd",
  "customerType": "company" | "individual" | "",
  "shipperType": "first-time" | "up-to-10x" | "more-than-10x" | "regular"
}
```

---

#### Destination et mode de transport

```json
{
  "country": "France",
  "destCity": "Paris",
  "destLocationType": "warehouse" | "port" | "address",
  "destZipCode": "75001",
  "destPort": "",
  "mode": "Sea" | "Air" | "Railway" | "Express",
  "incoterm": "EXW (Ex Work)" | "FOB (Free On Board)" | "CIF (Cost Insurance and Freight)" | "CFR (Cost & Freight)" | "DAT (Delivery at Terminal)" | "I don't know yet",
  "annualVolume": "50 ~ 500" | "501 ~ 1000" | "1001 ~ 5000" | "5001+"
}
```

**⚠️ Notes:**

- `country`: **Converti du code ISO (ex: "FR") vers le nom complet (ex: "France")** par la fonction `prepareSubmissionPayload()`
- `origin`: **Converti du code port/airport (ex: "SZX") vers le nom (ex: "Shenzhen")** par la fonction `prepareSubmissionPayload()`

---

#### Origine en Chine

```json
{
  "origin": "Shenzhen",
  "city": "Shenzhen",
  "locationType": "factory" | "port" | "warehouse" | "residential",
  "zipCode": "518000"
}
```

---

#### Informations sur la marchandise

```json
{
  "goodsDescription": "Electronics and accessories",
  "goodsValue": "25000",
  "goodsCurrency": "USD" | "EUR" | "GBP" | "CNY" | "CAD" | "AUD" | "JPY",
  "isPersonalOrHazardous": false,
  "areGoodsReady": "yes" | "no_in_1_week" | "no_in_2_weeks" | "no_in_1_month" | "no_date_set",
  "specialRequirements": "Fragile goods",
  "remarks": "Need fast delivery"
}
```

---

#### Détails des chargements (`loads`)

**Pour les cartons/palettes (loose cargo):**

```json
{
  "loads": [
    {
      "shippingType": "cartons" | "pallets",
      "numberOfUnits": 100,
      "packageType": "Cartons" | "Pallets",
      "totalWeight": "1200",
      "totalWeightUnit": "KG",
      "dimensions": {
        "length": "50",
        "width": "40",
        "height": "30"
      },
      "dimensionUnit": "CM",
      "weightPerUnit": "12",
      "weightUnit": "KG",
      "totalVolume": "6",
      "totalVolumeUnit": "CBM",
      "calculationType": "by_dimensions" | "by_weight",
      "palletType": ""
    }
  ]
}
```

**Pour les conteneurs:**

```json
{
  "loads": [
    {
      "shippingType": "container",
      "numberOfUnits": 2,
      "containerType": "20ft" | "40ft" | "40ft HC",
      "isOverweight": false,
      "calculationType": "",
      "packageType": "",
      "palletType": "",
      "dimensions": { "length": "", "width": "", "height": "" },
      "dimensionUnit": "CM",
      "weightPerUnit": "",
      "weightUnit": "KG",
      "totalVolume": "",
      "totalVolumeUnit": "CBM",
      "totalWeight": "",
      "totalWeightUnit": "KG"
    }
  ]
}
```

**⚠️ Note:** Les champs non applicables aux conteneurs sont nettoyés/remis à zéro par `prepareSubmissionPayload()`.

---

#### Services demandés

```json
{
  "servicesRequested": {
    "shipping": true | false,
    "sourcing": true | false,
    "dropshipping": true | false,
    "warehousing": true | false,
    "qc": true | false,
    "chinaVisits": true | false,
    "other": true | false
  }
}
```

---

#### Données de sourcing (si `servicesRequested.sourcing === true`)

```json
{
  "sourcing": {
    "productDescription": "Smartphone accessories",
    "referenceLink": "https://example.com/product",
    "targetPrice": 5.50,
    "targetCurrency": "USD",
    "moq": 1000,
    "platform": "Amazon FBA",
    "hasSupplier": true | false | null,
    "notes": "",
    "targetMarkets": "EU, UK, US",
    "requiredCertifications": "CE, RoHS",
    "timeline": "Need samples within 2 weeks",
    "qualityStandards": "ISO 9001",
    "packagingRequirements": "Retail-ready packaging",
    "advancedNotes": "Custom labeling required"
  }
}
```

**⚠️ Note:** Les champs `timeline`, `qualityStandards`, `packagingRequirements`, et `advancedNotes` sont présents dans le formulaire même s'ils ne sont pas dans le type TypeScript officiel.

---

#### Données d'entrepôt (si `servicesRequested.warehousing === true`)

```json
{
  "warehousing": {
    "needed": null,
    "duration": "lt_1_month" | "1_3_months" | "gt_3_months",
    "skuCount": 50,
    "consolidation": true | false | null,
    "extraServices": [
      "Repackage",
      "Shipment Tracking",
      "Inventory Management",
      "Quality Control",
      "Returns Handling",
      "Product Photography",
      "Product Listing Optimization",
      "Fulfillment by Amazon (FBA) Preparation",
      "Other"
    ],
    "specialHandling": "Temperature controlled storage",
    "notes": ""
  }
}
```

**⚠️ Note:** `specialHandling` est présent dans le formulaire même s'il n'est pas dans le type TypeScript officiel.

**⚠️ Note:** Les `extraServices` utilisent maintenant les valeurs exactes du CRM ActiveCampaign.

---

#### Données de dropshipping (si `servicesRequested.dropshipping === true`)

```json
{
  "dropshipping": {
    "products": "Smartphone cases",
    "model": "Shopify store",
    "customerCountries": "US, EU, UK",
    "dailyOrders": 20,
    "hasCatalog": true | false | null,
    "brandingNeeded": true | false | null,
    "notes": ""
  }
}
```

**⚠️ Note:** `products` est présent dans le formulaire même s'il n'est pas dans le type TypeScript officiel.

---

#### Données de contrôle qualité (si `servicesRequested.qc === true`)

```json
{
  "qc": {
    "type": "pre_production" | "during_production" | "pre_shipment" | "factory_audit",
    "productionStage": "not_started" | "in_progress" | "finished",
    "factoryCity": "Shenzhen",
    "preferredDate": "2025-02-01",
    "notes": ""
  }
}
```

---

#### Données de visite en Chine (si `servicesRequested.chinaVisits === true`)

```json
{
  "chinaVisit": {
    "visitType": "Canton Fair" | "Yiwu Market" | "Both",
    "mainCity": "Guangzhou",
    "otherCities": "Shenzhen, Shanghai",
    "fairName": "",
    "cantonPhase": "Phase 1 (April) - Electronics, Home Appliances, Building Materials, Industrial Products" | "Phase 2 (April) - Consumer Goods, Gifts, Home Decoration" | "Phase 3 (May) - Textiles, Garments, Shoes, Office Supplies, Bags, Food, and Healthcare Products",
    "startDate": "2025-04-15",
    "endDate": "2025-04-20",
    "numberOfDays": 5,
    "numberOfTravelers": 2,
    "needInterpreter": true | false | null,
    "needGuide": true | false | null,
    "needTransport": true | false | null,
    "needHotels": true | false | null,
    "languages": "",
    "localTransportNeeds": [],
    "needHotel": true | false | null,
    "mainGoal": "",
    "willShipAfterVisit": null,
    "remarks": "",
    "tripBudget": ""
  }
}
```

**⚠️ Notes:**

- `visitType`: Utilise maintenant les valeurs exactes du CRM ("Canton Fair", "Yiwu Market", "Both")
- `cantonPhase`: Utilise maintenant les descriptions complètes du CRM avec les phases détaillées
- `needGuide`, `needTransport`, `needHotels`: Ces champs sont présents dans le formulaire même s'ils ne sont pas dans le type TypeScript officiel

---

## Exemple de Payload Complet

Un exemple complet est disponible dans `WEBHOOK-PAYLOAD.json`.

## Transformations Effectuées par `prepareSubmissionPayload()`

1. **Conversion du code pays → nom de pays**
   - Exemple: `"FR"` → `"France"`
   - Utilise la liste `COUNTRIES` de `@/data/countries`

2. **Conversion du code port/airport → nom**
   - Exemple: `"SZX"` → `"Shenzhen"`
   - Utilise les listes `SEA_PORTS`, `AIRPORTS`, `RAIL_TERMINALS`

3. **Nettoyage des données de conteneurs**
   - Pour `shippingType === "container"`, les champs non applicables sont remis à zéro

4. **Ajout des métadonnées**
   - `submissionId`: Généré automatiquement
   - `timestamp`: Date/heure au fuseau horaire de Hong Kong (UTC+8)

## Mapping vers CRM ActiveCampaign

Les valeurs suivantes correspondent maintenant **exactement** aux options du CRM ActiveCampaign :

- `mode`: `Sea`, `Air`, `Railway`, `Express`
- `incoterm`: `EXW (Ex Work)`, `FOB (Free On Board)`, `CIF (Cost Insurance and Freight)`, `CFR (Cost & Freight)`, `DAT (Delivery at Terminal)`, `I don't know yet`
- `annualVolume`: `50 ~ 500`, `501 ~ 1000`, `1001 ~ 5000`, `5001+`
- `warehousing.extraServices`: `Repackage`, `Shipment Tracking`, `Inventory Management`, `Quality Control`, `Returns Handling`, `Product Photography`, `Product Listing Optimization`, `Fulfillment by Amazon (FBA) Preparation`, `Other`
- `chinaVisit.visitType`: `Canton Fair`, `Yiwu Market`, `Both`
- `chinaVisit.cantonPhase`: Descriptions complètes des phases (Spring Session)

## Champs à mapper vers CRM

Certains champs du formulaire n'ont pas de correspondance directe dans le CRM et nécessitent un mapping personnalisé :

- `customerType`: "company"/"individual" → CRM attend "Amazon fba seller", "Dropshipper", "Ecommerce seller", "Importer (wholesaler)"
- `country`: Nom en anglais → CRM attend nom en français (ID 110)
- `origin`: Nom de port → CRM attend liste spécifique (ID 27)
- `areGoodsReady`, `shipperType`, `qc.type`, etc. → Pas de correspondance directe

Voir `MATCHING-TABLE.md` et `REMPLACEMENT-OPTIONS.md` pour plus de détails.
