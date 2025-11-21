# Tableau de Remplacement des Options - Formulaire → CRM ActiveCampaign

## FORM FIELD: `mode`

**ANCIENNES OPTIONS:**

- Sea
- Air
- Rail
- Express
- not_sure

**OPTIONS CRM APPLIQUÉES:**

- Sea
- Air
- Railway
- Express

---

## FORM FIELD: `incoterm`

**ANCIENNES OPTIONS:**

- EXW
- FOB
- CIF
- DAP
- DDP
- not_sure

**OPTIONS CRM APPLIQUÉES:**

- EXW (Ex Work)
- FOB (Free On Board)
- CIF (Cost Insurance and Freight)
- CFR (Cost & Freight)
- DAT (Delivery at Terminal)
- I don't know yet

---

## FORM FIELD: `annualVolume`

**ANCIENNES OPTIONS:**

- one_shot
- few_per_year
- regular_program

**OPTIONS CRM APPLIQUÉES:**

- 50 ~ 500
- 501 ~ 1000
- 1001 ~ 5000
- 5001+

---

## FORM FIELD: `warehousing.extraServices`

**ANCIENNES OPTIONS:**

- relabeling
- repacking
- kitting
- photo_shooting
- inventory_reports

**OPTIONS CRM APPLIQUÉES:**

- Repackage
- Shipment Tracking
- Inventory Management
- Quality Control
- Returns Handling
- Product Photography
- Product Listing Optimization
- Fulfillment by Amazon (FBA) Preparation
- Other

---

## FORM FIELD: `chinaVisit.visitType`

**ANCIENNES OPTIONS:**

- canton_fair
- yiwu_market
- other_fair
- factory_visits
- mixed_trip
- business_immersion_day
- supplier_roadshow
- factory_audit_visit

**OPTIONS CRM APPLIQUÉES:**

- Canton Fair
- Yiwu Market
- Both

---

## FORM FIELD: `chinaVisit.cantonPhase`

**ANCIENNES OPTIONS:**

- phase_1
- phase_2
- phase_3
- not_sure

**OPTIONS CRM APPLIQUÉES:**

- Phase 1 (April) - Electronics, Home Appliances, Building Materials, Industrial Products
- Phase 2 (April) - Consumer Goods, Gifts, Home Decoration
- Phase 3 (May) - Textiles, Garments, Shoes, Office Supplies, Bags, Food, and Healthcare Products

---

## ⚠️ AVERTISSEMENTS

### Champs du formulaire sans correspondance CRM

Les champs suivants du formulaire **n'ont PAS de correspondance directe** dans le CRM :

1. `areGoodsReady` - Disponibilité des marchandises
2. `shipperType` - Fréquence d'expédition
3. `customerType` - Type de client (company/individual) - Le CRM utilise des types métier différents
4. `isPersonalOrHazardous` - Marchandises personnelles/dangereuses
5. `qc.type` - Type d'inspection QC
6. `qc.productionStage` - Étape de production QC
7. `warehousing.duration` - Durée de stockage
8. `warehousing.consolidation` - Besoin de consolidation
9. `dropshipping.hasCatalog` - Avoir un catalogue
10. `dropshipping.brandingNeeded` - Besoin d'emballage de marque
11. `chinaVisit.needGuide` - Besoin de guide/interprète
12. `chinaVisit.needTransport` - Besoin de transport local
13. `chinaVisit.needHotels` - Besoin d'aide pour hôtels

**Recommandation:** Envoyer ces valeurs dans des champs texte libres du CRM ou créer des champs personnalisés.

---

### Champs CRM importants non présents dans le formulaire

Les champs suivants existent dans le CRM mais **ne sont PAS présents** dans le formulaire :

1. **Meeting Time (ID 95)** - Horaire de rendez-vous (GMT +8)
   - Options: 9:30 - 10:00, 10:00 - 10:30, 10:30 - 11:00, 11:30 - 12:00, 13:00 - 13:30, 13:30 - 14:00, 14:00 - 14:30, 14:30 - 15:00, 15:00 - 15:30, 15:30 - 16:00, 16:00 - 16:30, 16:30 - 17:00

2. **Budget (optional) (ID 106)** - Budget
   - Options: $100-$500, $500-$1000, $1,000-$5,000, $5,000-$10,000, > $20.000, No decide vet

3. **Where to sell (optional) (ID 109)** - Où vendre
   - Options: Physical store, E-commerce, Distributor, Trade company (multiple: true)

4. **Which Amazon FBA service are you looking for? (ID 148)** - Service Amazon FBA
   - Options: FBA Preparation Service for your Amazon Business, Shipping Service for your Amazon Business, Both Services

5. **Initial Quantity Planned (FBA) (ID 149)** - Quantité initiale FBA
   - Options: 100, 300, 500, 501+

6. **Initial Quantity Planned (Drop Shipping) (ID 150)** - Quantité dropshipping
   - Options: 100 - 500, 501 - 1000, 1001+

7. **Amazon Marketplace (ID 151)** - Marketplace Amazon
   - Options: Amazon.com (USA), Amazon.co.uk (UK), Amazon.de (Germany), Amazon.fr (France), Amazon.it (Italy), Amazon.es (Spain), Amazon.ca (Canada), Amazon.jp (Japan), Amazon.in (India), Other

8. **Main Destination Regions (ID 153)** - Régions de destination principales
   - Options: China, Hong Kong, Asia, Africa, Middle East, Europe, Oceania, North America, South America

9. **Estimated Volume of Operations (ID 184)** - Volume estimé d'opérations
   - Options: 50-500, 501-1000, 1001-5000 (multiple: true)

10. **What type of warehouse and fulfillment (ID 185)** - Type d'entrepôt et fulfillment
    - Options: Storage, Inventory Management, Fulfillment by Amazon FBA, Customs Clearance, Last-Mile Delivery, Repackage and other (multiple: true)

**Recommandation:** Considérer leur ajout au formulaire si pertinent pour le business.
