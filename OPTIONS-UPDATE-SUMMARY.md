# Résumé des Mises à Jour des Options

## ✅ Modifications Effectuées

### 1. **SimpleQuoteForm.tsx**

#### Champ `mode` (lignes ~1044-1113)

**Modifications:**

- ❌ Supprimé: `not_sure`
- ✅ Modifié: `Rail` → `Railway`
- ✅ Conservé: `Sea`, `Air`, `Express`

**Options CRM appliquées:**

- `Sea`
- `Air`
- `Railway`
- `Express`

**CRM ID:** 18 (Service(s) Needed, multiple: true)

---

#### Champ `incoterm` (lignes ~1127-1193)

**Modifications:**

- ✅ Modifié: `EXW` → `EXW (Ex Work)`
- ✅ Modifié: `FOB` → `FOB (Free On Board)`
- ✅ Modifié: `CIF` → `CIF (Cost Insurance and Freight)`
- ❌ Supprimé: `DAP`, `DDP`
- ✅ Ajouté: `CFR (Cost & Freight)`, `DAT (Delivery at Terminal)`
- ✅ Modifié: `not_sure` → `I don't know yet`

**Options CRM appliquées:**

- `EXW (Ex Work)`
- `FOB (Free On Board)`
- `CIF (Cost Insurance and Freight)`
- `CFR (Cost & Freight)`
- `DAT (Delivery at Terminal)`
- `I don't know yet`

**CRM ID:** 1 (Purchase incoterm, multiple: false)

---

#### Champ `annualVolume` (lignes ~1659-1690)

**Modifications:**

- ❌ Supprimé: `one_shot`, `few_per_year`, `regular_program`
- ✅ Remplacé par les options CRM de quantité

**Options CRM appliquées:**

- `50 ~ 500`
- `501 ~ 1000`
- `1001 ~ 5000`
- `5001+`

**CRM ID:** 108 (Quantity (optional), multiple: true)

---

### 2. **SimpleWarehousingSection.tsx**

#### Champ `warehousing.extraServices` (lignes ~183-222)

**Modifications:**

- ❌ Supprimé: `relabeling`, `kitting`
- ✅ Modifié: `repacking` → `Repackage`
- ✅ Modifié: `inventory_reports` → `Inventory Management`
- ✅ Modifié: `photo_shooting` → `Product Photography`
- ✅ Ajouté: `Shipment Tracking`, `Quality Control`, `Returns Handling`, `Product Listing Optimization`, `Fulfillment by Amazon (FBA) Preparation`, `Other`

**Options CRM appliquées:**

- `Repackage`
- `Shipment Tracking`
- `Inventory Management`
- `Quality Control`
- `Returns Handling`
- `Product Photography`
- `Product Listing Optimization`
- `Fulfillment by Amazon (FBA) Preparation`
- `Other`

**CRM ID:** 144 (Additional Services Needed, multiple: true)

---

### 3. **SimpleChinaVisitSection.tsx**

#### Champ `chinaVisit.visitType` (lignes ~34-71)

**Modifications:**

- ✅ Modifié: `canton_fair` → `Canton Fair`
- ✅ Modifié: `yiwu_market` → `Yiwu Market`
- ✅ Ajouté: `Both`
- ❌ Supprimé: `other_fair`, `factory_visits`, `mixed_trip`, `business_immersion_day`, `supplier_roadshow`, `factory_audit_visit`

**⚠️ NOTE:** Les options supprimées sont toujours supportées dans le code pour l'affichage conditionnel de `fairName`, mais ne sont plus proposées dans la liste de sélection principale.

**Options CRM appliquées:**

- `Canton Fair`
- `Yiwu Market`
- `Both`

**CRM ID:** 170 (Where do you need our support?, multiple: false)

---

#### Champ `chinaVisit.cantonPhase` (lignes ~150-184)

**Modifications:**

- ❌ Supprimé: `phase_1`, `phase_2`, `phase_3`, `not_sure`
- ✅ Remplacé par les descriptions complètes du CRM (Spring Session)

**Options CRM appliquées:**

- `Phase 1 (April) - Electronics, Home Appliances, Building Materials, Industrial Products`
- `Phase 2 (April) - Consumer Goods, Gifts, Home Decoration`
- `Phase 3 (May) - Textiles, Garments, Shoes, Office Supplies, Bags, Food, and Healthcare Products`

**⚠️ NOTE:** Pour l'instant, seules les phases de la session Spring (ID 166) ont été implémentées. L'implémentation des phases d'Automne (ID 174) nécessiterait une logique supplémentaire pour déterminer la session selon la date.

**CRM ID:** 166 (Spring Session, multiple: true) / 174 (Autumn Session, multiple: true)

---

## ⚠️ Champs Non Modifiés (Sans Correspondance CRM)

Les champs suivants **n'ont PAS été modifiés** car ils n'ont pas de correspondance directe dans le CRM :

1. **`areGoodsReady`** - Disponibilité des marchandises
2. **`shipperType`** - Fréquence d'expédition
3. **`customerType`** - Type de client (company/individual vs types métier CRM)
4. **`isPersonalOrHazardous`** - Marchandises personnelles/dangereuses
5. **`qc.type`** - Type d'inspection QC
6. **`qc.productionStage`** - Étape de production QC
7. **`warehousing.duration`** - Durée de stockage
8. **`warehousing.consolidation`** - Besoin de consolidation
9. **`dropshipping.hasCatalog`** - Avoir un catalogue
10. **`dropshipping.brandingNeeded`** - Besoin d'emballage de marque
11. **`chinaVisit.needGuide`** - Besoin de guide/interprète
12. **`chinaVisit.needTransport`** - Besoin de transport local
13. **`chinaVisit.needHotels`** - Besoin d'aide pour hôtels

**Action requise:** Ces valeurs devront être envoyées dans des champs texte libres du CRM ou mappées vers des champs personnalisés à créer.

---

## ⚠️ Champs CRM Manquants dans le Formulaire

Les champs CRM suivants existent mais **ne sont PAS présents dans le formulaire** :

1. **Meeting Time (ID 95)** - Horaire de rendez-vous
2. **Budget (optional) (ID 106)** - Budget
3. **Where to sell (optional) (ID 109)** - Où vendre
4. **Which Amazon FBA service (ID 148)** - Service Amazon FBA
5. **Initial Quantity Planned (FBA) (ID 149)** - Quantité initiale FBA
6. **Initial Quantity Planned (Drop Shipping) (ID 150)** - Quantité dropshipping
7. **Amazon Marketplace (ID 151)** - Marketplace Amazon
8. **Main Destination Regions (ID 153)** - Régions de destination
9. **Estimated Volume of Operations (ID 184)** - Volume estimé d'opérations
10. **What type of warehouse and fulfillment (ID 185)** - Type d'entrepôt

**Action requise:** Considérer leur ajout si pertinent pour le business.

---

## 📝 Notes Importantes

1. **Mode de transport (`mode`):** Le champ est maintenant un select simple au lieu de multi-select. Le CRM attend un multi-select, mais le formulaire actuel ne permet qu'un seul choix. Il faudra adapter la logique de soumission pour envoyer une valeur unique ou changer l'UI en multi-select.

2. **Volume annuel (`annualVolume`):** Le changement est majeur : de "fréquence d'expédition" à "quantité". Il faudra vérifier que cela correspond au besoin métier.

3. **Types de visite Chine:** Le formulaire ne supporte plus que 3 types (Canton Fair, Yiwu Market, Both) alors qu'il en supportait 8. Les autres types sont toujours acceptés dans le code mais ne sont plus proposés à l'utilisateur.

4. **Phases Canton Fair:** Seule la session Spring est implémentée. L'implémentation de l'Automne nécessiterait une logique de détection de session basée sur la date.

5. **Pays (`country`):** Non modifié dans cette étape. Le CRM attend des noms en français, alors que le formulaire utilise actuellement des codes ISO et des noms en anglais. Un mapping supplémentaire sera nécessaire.

6. **Port d'origine (`origin`):** Non modifié dans cette étape. Le CRM attend des noms de villes/provinces, alors que le formulaire utilise actuellement des codes de ports. Un mapping supplémentaire sera nécessaire.

---

## 🔄 Actions Suivantes Recommandées

1. ✅ **Tester** les modifications pour s'assurer que l'UI fonctionne correctement
2. ⚠️ **Adapter la logique de soumission** pour mapper les nouvelles valeurs vers le CRM
3. ⚠️ **Créer un mapping** pour les champs `country` et `origin`
4. ⚠️ **Décider** comment gérer les champs sans correspondance CRM
5. ⚠️ **Considérer** l'ajout des champs CRM manquants si pertinent
6. ⚠️ **Implémenter** la logique pour déterminer Spring vs Autumn pour les phases Canton Fair
