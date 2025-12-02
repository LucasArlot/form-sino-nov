# Simple Form - Payload JSON envoyé à n8n

Ce document décrit la structure **complète** du payload JSON envoyé au webhook n8n lors de la soumission du formulaire simple.

> **Dernière mise à jour :** Décembre 2025 (après séparation du simple form)

---

## 📋 Structure générale du payload

Le payload est organisé en sections logiques :

```
{
  submissionId,
  timestamp,
  servicesList,
  contact: { ... },
  shippingRoute: { ... },
  shippingCargo: { ... },
  servicesRequested: { ... },
  sourcing: { ... },
  warehousing: { ... },
  dropshipping: { ... },
  qc: { ... },
  chinaVisit: { ... },
  otherProject: { ... }
}
```

---

## 🔖 Métadonnées (toujours présentes)

| Champ          | Type       | Description                           | Exemple                                       |
| -------------- | ---------- | ------------------------------------- | --------------------------------------------- |
| `submissionId` | `string`   | ID unique de soumission               | `"form-FR-1733150000000-x7k2m"`               |
| `timestamp`    | `string`   | Date/heure de soumission (HKT, UTC+8) | `"2025-12-02T15:30:00+08:00"`                 |
| `servicesList` | `string[]` | Liste lisible des services demandés   | `["Shipping from China", "Product Sourcing"]` |

---

## 👤 Contact (`contact`)

| Champ              | Type     | Obligatoire | Description                 | Exemple                       |
| ------------------ | -------- | ----------- | --------------------------- | ----------------------------- |
| `firstName`        | `string` | ✅ Oui      | Prénom                      | `"John"`                      |
| `lastName`         | `string` | Non         | Nom de famille              | `"Doe"`                       |
| `email`            | `string` | ✅ Oui      | Email                       | `"john.doe@example.com"`      |
| `phone`            | `string` | ✅ Oui      | Numéro de téléphone complet | `"+33612345678"`              |
| `phoneCountryCode` | `string` | Non         | Code pays du téléphone      | `"+33"`                       |
| `companyName`      | `string` | Non         | Nom de l'entreprise         | `"Acme Corp"`                 |
| `customerType`     | `string` | Non         | Type de client              | `"company"` ou `"individual"` |
| `shipperType`      | `string` | Non         | Fréquence d'expédition      | Voir options ci-dessous       |

**Options `customerType`** : `"company"`, `"individual"`, `""`

**Options `shipperType`** : `"first-time"`, `"few-times"`, `"regular"`, `"frequent"`, `""`

---

## 🌍 Route d'expédition (`shippingRoute`)

| Champ                     | Type     | Obligatoire | Description                       | Exemple                              |
| ------------------------- | -------- | ----------- | --------------------------------- | ------------------------------------ |
| `destinationCountry`      | `string` | ✅ Oui      | Pays de destination (nom complet) | `"France"`                           |
| `destinationCity`         | `string` | ✅ Oui      | Ville de destination              | `"Paris"`                            |
| `destinationZipCode`      | `string` | Non         | Code postal de destination        | `"75001"`                            |
| `destinationLocationType` | `string` | Non         | Type de lieu de livraison         | `"port"`, `"warehouse"`, `"address"` |
| `originCity`              | `string` | Non         | Ville d'origine en Chine          | `"Shenzhen"`                         |
| `originZipCode`           | `string` | Non         | Code postal d'origine             | `"518000"`                           |
| `originLocationType`      | `string` | Non         | Type de lieu d'enlèvement         | `"factory"`, `"port"`, `"warehouse"` |
| `originPortOfLoading`     | `string` | Non         | Port/aéroport de chargement       | `"Yantian"`                          |
| `shippingMode`            | `string` | Non         | Mode de transport                 | Voir options ci-dessous              |
| `incoterm`                | `string` | Non         | Terme Incoterm                    | Voir options ci-dessous              |

**Options `shippingMode`** : `"Sea"`, `"Air"`, `"Rail"`, `"Express"`, `""`

**Options `incoterm`** : `"EXW"`, `"FOB"`, `"CIF"`, `"CFR"`, `"DAT"`, `"not_sure"`, `""`

---

## 📦 Cargo (`shippingCargo`)

| Champ                   | Type      | Obligatoire | Description                    | Exemple                                               |
| ----------------------- | --------- | ----------- | ------------------------------ | ----------------------------------------------------- |
| `goodsDescription`      | `string`  | Non         | Description des marchandises   | `"Electronics, LED lights"`                           |
| `totalWeight`           | `string`  | ✅ Oui      | Poids total en kg              | `"1500"`                                              |
| `numberOfUnits`         | `number`  | Non         | Nombre de cartons/palettes     | `25`                                                  |
| `goodsValue`            | `string`  | Non         | Valeur estimée                 | `"15000"`                                             |
| `goodsCurrency`         | `string`  | Non         | Devise                         | `"USD"`, `"EUR"`                                      |
| `areGoodsReady`         | `string`  | Non         | Disponibilité des marchandises | Voir options ci-dessous                               |
| `annualVolume`          | `string`  | Non         | Volume annuel estimé           | Voir options ci-dessous                               |
| `isPersonalOrHazardous` | `boolean` | Non         | Effets personnels ou dangereux | `false`                                               |
| `dimensions`            | `object`  | Non         | Dimensions par unité           | `{ "length": "120", "width": "80", "height": "150" }` |
| `weightPerUnit`         | `string`  | Non         | Poids par unité (kg)           | `"25"`                                                |
| `remarks`               | `string`  | Non         | Remarques spéciales            | `"Fragile, handle with care"`                         |

**Options `areGoodsReady`** : `"ready"`, `"1_week"`, `"2_weeks"`, `"1_month"`, `"no_date"`, `""`

**Options `annualVolume`** : `"50-500"`, `"501-1000"`, `"1001-5000"`, `"5001+"`, `""`

---

## 🛍️ Services demandés (`servicesRequested`)

| Champ          | Type      | Description                 |
| -------------- | --------- | --------------------------- |
| `shipping`     | `boolean` | Expédition depuis la Chine  |
| `sourcing`     | `boolean` | Sourcing produit            |
| `dropshipping` | `boolean` | Dropshipping & Fulfillment  |
| `warehousing`  | `boolean` | Entreposage & Consolidation |
| `qc`           | `boolean` | Contrôle qualité            |
| `chinaVisits`  | `boolean` | Visite en Chine             |
| `other`        | `boolean` | Autre projet                |

---

## 🔍 Sourcing (`sourcing`)

Présent si `servicesRequested.sourcing === true`

| Champ                    | Type              | Description                       | Exemple                   |
| ------------------------ | ----------------- | --------------------------------- | ------------------------- |
| `productDescription`     | `string`          | Description du produit recherché  | `"LED strip lights 5050"` |
| `referenceLink`          | `string`          | Lien de référence (Alibaba, etc.) | `"https://..."`           |
| `targetPrice`            | `number \| null`  | Prix cible par unité              | `2.5`                     |
| `targetCurrency`         | `string`          | Devise du prix                    | `"USD"`                   |
| `moq`                    | `number \| null`  | Quantité minimale souhaitée       | `1000`                    |
| `platform`               | `string`          | Plateforme actuelle               | `"Alibaba"`, `"1688"`     |
| `hasSupplier`            | `boolean \| null` | A déjà un fournisseur             | `true`, `false`, `null`   |
| `targetMarkets`          | `string`          | Marchés cibles                    | `"Europe, USA"`           |
| `requiredCertifications` | `string`          | Certifications requises           | `"CE, RoHS"`              |
| `timeline`               | `string`          | Urgence/délai                     | `"ASAP"`, `"1-2 months"`  |
| `qualityStandards`       | `string`          | Standards qualité                 | `"ISO 9001"`              |
| `packagingRequirements`  | `string`          | Exigences packaging               | `"Custom box with logo"`  |
| `notes`                  | `string`          | Notes additionnelles              | `"..."`                   |

---

## 📦 Warehousing (`warehousing`)

Présent si `servicesRequested.warehousing === true`

| Champ           | Type              | Description                      | Exemple                                  |
| --------------- | ----------------- | -------------------------------- | ---------------------------------------- |
| `duration`      | `string`          | Durée de stockage                | `"1-3_months"`, `"3-6_months"`           |
| `skuCount`      | `number \| null`  | Nombre de SKU                    | `50`                                     |
| `consolidation` | `boolean \| null` | Consolidation multi-fournisseurs | `true`                                   |
| `extraServices` | `string[]`        | Services supplémentaires         | `["labeling", "repackaging", "kitting"]` |
| `notes`         | `string`          | Notes                            | `"..."`                                  |

**Options `extraServices`** : `"labeling"`, `"repackaging"`, `"kitting"`, `"photos"`, `"returns"`

---

## 🚚 Dropshipping (`dropshipping`)

Présent si `servicesRequested.dropshipping === true`

| Champ               | Type              | Description                     | Exemple                                      |
| ------------------- | ----------------- | ------------------------------- | -------------------------------------------- |
| `products`          | `string`          | Type de produits                | `"Electronics, accessories"`                 |
| `model`             | `string`          | Modèle business                 | `"shopify"`, `"amazon_fba"`, `"own_website"` |
| `customerCountries` | `string`          | Pays des clients finaux         | `"France, Germany, Spain"`                   |
| `dailyOrders`       | `number \| null`  | Commandes quotidiennes estimées | `50`                                         |
| `hasCatalog`        | `boolean \| null` | A déjà un catalogue produit     | `true`                                       |
| `brandingNeeded`    | `boolean \| null` | Besoin de packaging brandé      | `true`                                       |
| `notes`             | `string`          | Notes                           | `"..."`                                      |

---

## ✅ QC - Contrôle qualité (`qc`)

Présent si `servicesRequested.qc === true`

| Champ             | Type     | Description                | Exemple                                                    |
| ----------------- | -------- | -------------------------- | ---------------------------------------------------------- |
| `type`            | `string` | Type d'inspection          | `"pre_shipment"`, `"during_production"`, `"factory_audit"` |
| `productionStage` | `string` | Stade de production        | `"not_started"`, `"in_progress"`, `"completed"`            |
| `factoryCity`     | `string` | Ville de l'usine en Chine  | `"Shenzhen"`                                               |
| `preferredDate`   | `string` | Date préférée (YYYY-MM-DD) | `"2025-02-15"`                                             |
| `notes`           | `string` | Notes                      | `"..."`                                                    |

---

## 🇨🇳 China Visit (`chinaVisit`)

Présent si `servicesRequested.chinaVisits === true`

| Champ                | Type              | Description                       | Exemple                               |
| -------------------- | ----------------- | --------------------------------- | ------------------------------------- |
| `visitType`          | `string[]`        | Types de visite (multi-sélection) | `["canton_fair", "factory_visits"]`   |
| `mainCity`           | `string`          | Ville principale                  | `"Guangzhou"`                         |
| `otherCities`        | `string`          | Autres villes à visiter           | `"Shenzhen, Yiwu"`                    |
| `fairName`           | `string`          | Nom du salon (si "other")         | `"Hong Kong Electronics Fair"`        |
| `factoryDescription` | `string`          | Description usines à visiter      | `"LED manufacturers"`                 |
| `cantonPhase`        | `string`          | Phase Canton Fair                 | `"phase_1"`, `"phase_2"`, `"phase_3"` |
| `startDate`          | `string`          | Date de début (YYYY-MM-DD)        | `"2025-04-15"`                        |
| `endDate`            | `string`          | Date de fin (YYYY-MM-DD)          | `"2025-04-20"`                        |
| `numberOfDays`       | `number \| null`  | Nombre de jours sur place         | `5`                                   |
| `numberOfTravelers`  | `number \| null`  | Nombre de voyageurs               | `2`                                   |
| `needGuide`          | `boolean \| null` | Besoin guide/interprète           | `true`                                |
| `needTransport`      | `boolean \| null` | Besoin transport local            | `true`                                |
| `needHotels`         | `boolean \| null` | Besoin aide réservation hôtel     | `false`                               |
| `notes`              | `string`          | Notes (visa, budget, etc.)        | `"..."`                               |

**Options `visitType`** : `"canton_fair"`, `"yiwu_market"`, `"factory_visits"`, `"other_fair"`

---

## 📝 Other Project (`otherProject`)

Présent si `servicesRequested.other === true`

| Champ         | Type     | Description           | Exemple                                     |
| ------------- | -------- | --------------------- | ------------------------------------------- |
| `projectType` | `string` | Type de projet        | `"consulting"`, `"custom"`, `"partnership"` |
| `description` | `string` | Description du projet | `"..."`                                     |
| `budget`      | `string` | Budget estimé         | `"5000-10000 USD"`                          |
| `timeline`    | `string` | Délai souhaité        | `"Q1 2025"`                                 |

---

## 📄 Exemple de payload complet

```json
{
  "submissionId": "form-FR-1733150000000-x7k2m",
  "timestamp": "2025-12-02T15:30:00+08:00",
  "servicesList": ["Shipping from China", "Product Sourcing"],

  "contact": {
    "firstName": "Jean",
    "lastName": "Dupont",
    "email": "jean.dupont@example.com",
    "phone": "+33612345678",
    "phoneCountryCode": "+33",
    "companyName": "Import France SARL",
    "customerType": "company",
    "shipperType": "few-times"
  },

  "shippingRoute": {
    "destinationCountry": "France",
    "destinationCity": "Paris",
    "destinationZipCode": "75001",
    "destinationLocationType": "warehouse",
    "originCity": "Shenzhen",
    "originZipCode": "",
    "originLocationType": "factory",
    "originPortOfLoading": "Yantian",
    "shippingMode": "Sea",
    "incoterm": "FOB"
  },

  "shippingCargo": {
    "goodsDescription": "LED strip lights and controllers",
    "totalWeight": "1500",
    "numberOfUnits": 25,
    "goodsValue": "15000",
    "goodsCurrency": "USD",
    "areGoodsReady": "2_weeks",
    "annualVolume": "1001-5000",
    "isPersonalOrHazardous": false,
    "dimensions": { "length": "60", "width": "40", "height": "40" },
    "weightPerUnit": "60",
    "remarks": "Fragile electronics, please handle with care"
  },

  "servicesRequested": {
    "shipping": true,
    "sourcing": true,
    "dropshipping": false,
    "warehousing": false,
    "qc": false,
    "chinaVisits": false,
    "other": false
  },

  "sourcing": {
    "productDescription": "High quality 5050 LED strips",
    "referenceLink": "https://alibaba.com/example",
    "targetPrice": 2.5,
    "targetCurrency": "USD",
    "moq": 1000,
    "platform": "Alibaba",
    "hasSupplier": false,
    "targetMarkets": "France, Germany",
    "requiredCertifications": "CE, RoHS",
    "timeline": "1-2 months",
    "qualityStandards": "",
    "packagingRequirements": "",
    "notes": ""
  },

  "warehousing": {
    "duration": "",
    "skuCount": null,
    "consolidation": null,
    "extraServices": [],
    "notes": ""
  },

  "dropshipping": {
    "products": "",
    "model": "",
    "customerCountries": "",
    "dailyOrders": null,
    "hasCatalog": null,
    "brandingNeeded": null,
    "notes": ""
  },

  "qc": {
    "type": "",
    "productionStage": "",
    "factoryCity": "",
    "preferredDate": "",
    "notes": ""
  },

  "chinaVisit": {
    "visitType": [],
    "mainCity": "",
    "otherCities": "",
    "fairName": "",
    "factoryDescription": "",
    "cantonPhase": "",
    "startDate": "",
    "endDate": "",
    "numberOfDays": null,
    "numberOfTravelers": null,
    "needGuide": null,
    "needTransport": null,
    "needHotels": null,
    "notes": ""
  },

  "otherProject": {
    "projectType": "",
    "description": "",
    "budget": "",
    "timeline": ""
  }
}
```

---

## ⚠️ Notes importantes

1. **Structure groupée** : Les champs sont organisés en objets logiques (`contact`, `shippingRoute`, `shippingCargo`) pour faciliter le mapping dans n8n.

2. **Pas de tableau `loads`** : Le simple form utilise des champs directs (`totalWeight`, `numberOfUnits`, `dimensions`) au lieu d'un tableau `loads[]`.

3. **Transformations automatiques** :
   - `destinationCountry` : Code pays → Nom complet (ex: `"FR"` → `"France"`)
   - `originPortOfLoading` : Code port → Nom (ex: `"YTN"` → `"Yantian"`)

4. **Champs toujours présents** : Tous les objets de service (`sourcing`, `warehousing`, etc.) sont toujours envoyés, même vides, pour simplifier le traitement côté n8n.

5. **Valeurs vides** :
   - Strings : `""`
   - Numbers : `null`
   - Booleans : `null` (tri-state: oui/non/non répondu)
   - Arrays : `[]`

---

## 🔗 Fichiers source

- Types : `src/simple-form/context/types.ts`
- Génération payload : `src/simple-form/utils/submitForm.ts`
- Formulaire : `src/simple-form/SimpleQuoteForm.tsx`
