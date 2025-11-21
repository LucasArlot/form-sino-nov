# Tableau de Correspondance : Formulaire Simple ↔ CRM ActiveCampaign

## Champs SELECT identifiés dans le formulaire

| FORM FIELD                         | →   | CRM LABEL                        | CRM ID | TYPE     | MULTIPLE | OPTIONS CRM (exemples clés)                                                                |
| ---------------------------------- | --- | -------------------------------- | ------ | -------- | -------- | ------------------------------------------------------------------------------------------ |
| **country**                        | →   | Country of arrival               | 6      | dropdown | false    | Afghanistan, Albania... France, Germany, Japan... (tous les pays)                          |
| **country** (alt FR)               | →   | Country of Arrival (FR)          | 110    | dropdown | false    | France Metropolitaine, Belgique, Suisse... (liste en français)                             |
| **mode**                           | →   | Service(s) Needed                | 18     | checkbox | true     | Sea, Air, Railway, Express, Sourcing, Warehouse, Local Service, Drop shipping              |
| **incoterm**                       | →   | Purchase incoterm                | 1      | dropdown | false    | CFR (Cost & Freight), EXW (Ex Work), I don't know yet, CIF, FOB, DAT                       |
| **customerType**                   | →   | Customer Type                    | 101    | dropdown | false    | Amazon fba seller, Dropshipper, Ecommerce seller, Importer (wholesaler)                    |
| **origin**                         | →   | Port of departure                | 27     | dropdown | false    | Anhui Province, Guangdong Province, Shanghai, Shenzhen, Ningbo... (tous les ports chinois) |
| **areGoodsReady**                  | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ du formulaire : yes, no_in_1_week, no_in_2_weeks, no_in_1_month, no_date_set)       |
| **annualVolume**                   | →   | Quantity (optional)              | 108    | checkbox | true     | 50 ~ 500, 501 ~ 1000, 1001 ~ 5000, 5001+                                                   |
| **annualVolume** (alt)             | →   | Estimated Volume of Operations   | 184    | checkbox | true     | 50-500, 501-1000, 1001-5000                                                                |
| **isPersonalOrHazardous**          | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ booléen du formulaire)                                                              |
| **shipperType**                    | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ du formulaire : first-time, up-to-10x, more-than-10x, regular)                      |
| **servicesRequested.shipping**     | →   | Service(s) Needed                | 18     | checkbox | true     | Sea, Air, Railway, Express                                                                 |
| **servicesRequested.sourcing**     | →   | Service(s) Needed                | 18     | checkbox | true     | Sourcing                                                                                   |
| **servicesRequested.dropshipping** | →   | Service(s) Needed                | 18     | checkbox | true     | Drop shipping                                                                              |
| **servicesRequested.warehousing**  | →   | Service(s) Needed                | 18     | checkbox | true     | Warehouse                                                                                  |
| **servicesRequested.qc**           | →   | Additional Services Needed       | 144    | listbox  | true     | Quality Control                                                                            |
| **qc.type**                        | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ du formulaire : pre_production, during_production, pre_shipment, factory_audit)     |
| **qc.productionStage**             | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ du formulaire : not_started, in_progress, finished)                                 |
| **warehousing.duration**           | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ du formulaire : lt_1_month, 1_3_months, gt_3_months)                                |
| **warehousing.consolidation**      | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ booléen du formulaire)                                                              |
| **warehousing.extraServices**      | →   | Additional Services Needed       | 144    | listbox  | true     | Repackage, Inventory Management, Other                                                     |
| **dropshipping.hasCatalog**        | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ booléen du formulaire)                                                              |
| **dropshipping.brandingNeeded**    | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ booléen du formulaire)                                                              |
| **chinaVisit.visitType**           | →   | Where do you need our support?   | 170    | dropdown | false    | Canton Fair, Yiwu Market, Both                                                             |
| **chinaVisit.cantonPhase**         | →   | Spring Session                   | 166    | checkbox | true     | Phase 1 (April), Phase 2 (April), Phase 3 (May)                                            |
| **chinaVisit.cantonPhase** (alt)   | →   | Autumn Session                   | 174    | checkbox | true     | Phase 1 (October), Phase 2 (October), Phase 3 (November)                                   |
| **chinaVisit.needGuide**           | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ booléen du formulaire)                                                              |
| **chinaVisit.needTransport**       | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ booléen du formulaire)                                                              |
| **chinaVisit.needHotels**          | →   | ❌ PAS DE CORRESPONDANCE DIRECTE | -      | -        | -        | (Champ booléen du formulaire)                                                              |

## Correspondances avec hésitations

| FORM FIELD                 | POSSIBILITÉ 1             | POSSIBILITÉ 2                        | RECOMMANDATION                                      |
| -------------------------- | ------------------------- | ------------------------------------ | --------------------------------------------------- |
| **country**                | Country of arrival (6)    | Country of Arrival (FR) (110)        | Utiliser (110) si formulaire en français, sinon (6) |
| **annualVolume**           | Quantity (optional) (108) | Estimated Volume of Operations (184) | (108) semble plus adapté pour volume général        |
| **chinaVisit.cantonPhase** | Spring Session (166)      | Autumn Session (174)                 | Dépend de la date sélectionnée                      |

## Notes importantes

1. **Service(s) Needed (ID 18)** : C'est un champ **checkbox multiple** qui couvre plusieurs services :
   - Sea, Air, Railway, Express → correspondent au champ `mode`
   - Sourcing → correspond à `servicesRequested.sourcing`
   - Warehouse → correspond à `servicesRequested.warehousing`
   - Drop shipping → correspond à `servicesRequested.dropshipping`

2. **Champs sans correspondance directe** : Certains champs du formulaire n'ont pas d'équivalent exact dans le CRM :
   - `areGoodsReady`, `shipperType`, `qc.type`, `qc.productionStage`
   - `warehousing.duration`, `warehousing.consolidation`
   - `dropshipping.hasCatalog`, `dropshipping.brandingNeeded`
   - `chinaVisit.needGuide`, `chinaVisit.needTransport`, `chinaVisit.needHotels`

   **Solution** : Ces champs pourraient être envoyés dans des champs texte libres ou des champs personnalisés à créer dans le CRM.

3. **Additional Services Needed (ID 144)** : Champ **listbox multiple** qui peut couvrir :
   - Quality Control → pour `servicesRequested.qc`
   - Repackage, Inventory Management → pour `warehousing.extraServices`
   - Other → pour services spécifiques non listés

4. **Incoterm** : Correspondance exacte trouvée avec "Purchase incoterm" (ID 1), mais les valeurs du formulaire (`EXW`, `FOB`, `CIF`, `DAP`, `DDP`, `not_sure`) doivent être mappées vers les options CRM (`EXW (Ex Work)`, `FOB (Free On Board)`, etc.).

## Prochaines étapes recommandées

1. Valider les correspondances proposées
2. Mapper les valeurs du formulaire vers les options CRM exactes
3. Définir comment gérer les champs sans correspondance directe
4. Créer un mapping de transformation des valeurs (par exemple : `not_sure` → `I don't know yet`)
