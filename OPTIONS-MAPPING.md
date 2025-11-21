# Mapping des Options : Formulaire → CRM ActiveCampaign

## A) Tableau de remplacement des options

### FORM FIELD: `mode`

**ANCIENNES OPTIONS:**

- Sea
- Air
- Rail
- Express
- not_sure

**OPTIONS CRM APPLIQUÉES:**

- Sea
- Air
- Railway (⚠️ Note: "Rail" → "Railway")
- Express
- (Supprimer "not_sure" - pas d'option correspondante dans CRM)

**CRM ID:** 18 (Service(s) Needed, multiple: true)

---

### FORM FIELD: `incoterm`

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
- CFR (Cost & Freight) ⚠️ Nouveau
- DAT (Delivery at Terminal) ⚠️ Nouveau
- I don't know yet (⚠️ Note: "not_sure" → "I don't know yet")

**CRM ID:** 1 (Purchase incoterm, multiple: false)

---

### FORM FIELD: `customerType`

**ANCIENNES OPTIONS:**

- company
- individual

**OPTIONS CRM APPLIQUÉES:**

- Amazon fba seller
- Dropshipper
- Ecommerce seller
- Importer (wholesaler)

**⚠️ AVERTISSEMENT:** Le champ du formulaire actuel (company/individual) ne correspond PAS exactement aux options CRM. Le CRM utilise des types de clients métier, pas des types d'entités légales.

**CRM ID:** 101 (Customer Type, multiple: false)

---

### FORM FIELD: `annualVolume`

**ANCIENNES OPTIONS:**

- one_shot
- few_per_year
- regular_program

**OPTIONS CRM APPLIQUÉES:**

- 50 ~ 500
- 501 ~ 1000
- 1001 ~ 5000
- 5001+ ⚠️ Nouveau

**CRM ID:** 108 (Quantity (optional), multiple: true)

---

### FORM FIELD: `warehousing.extraServices`

**ANCIENNES OPTIONS:**

- relabeling
- repacking
- kitting
- photo_shooting
- inventory_reports

**OPTIONS CRM APPLIQUÉES:**

- Repackage (⚠️ Note: "repacking" → "Repackage")
- Inventory Management (⚠️ Note: "inventory_reports" → "Inventory Management")
- Shipment Tracking ⚠️ Nouveau
- Quality Control ⚠️ Nouveau
- Returns Handling ⚠️ Nouveau
- Product Photography (⚠️ Note: "photo_shooting" → "Product Photography")
- Product Listing Optimization ⚠️ Nouveau
- Fulfillment by Amazon (FBA) Preparation ⚠️ Nouveau
- Other ⚠️ Nouveau
- (Supprimer: relabeling, kitting - pas de correspondance directe)

**CRM ID:** 144 (Additional Services Needed, multiple: true)

---

### FORM FIELD: `chinaVisit.visitType`

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
- Both ⚠️ Nouveau
- (⚠️ Note: Le CRM ne supporte que 3 options. Les autres options du formulaire n'ont pas de correspondance directe)

**CRM ID:** 170 (Where do you need our support?, multiple: false)

---

### FORM FIELD: `chinaVisit.cantonPhase`

**ANCIENNES OPTIONS:**

- phase_1
- phase_2
- phase_3
- not_sure

**OPTIONS CRM APPLIQUÉES (Spring Session - ID 166):**

- Phase 1 (April) - Electronics, Home Appliances, Building Materials, Industrial Products
- Phase 2 (April) - Consumer Goods, Gifts, Home Decoration
- Phase 3 (May) - Textiles, Garments, Shoes, Office Supplies, Bags, Food, and Healthcare Products

**OPTIONS CRM APPLIQUÉES (Autumn Session - ID 174):**

- Phase 1 (October) - Electronics, Home Appliances, Building Materials, Industrial Products
- Phase 2 (October) - Consumer Goods, Gifts, Home Decoration
- Phase 3 (November) - Textiles, Garments, Shoes, Office Supplies, Bags, Food, and Healthcare Products

**⚠️ AVERTISSEMENT:** Le CRM a 2 champs séparés pour Spring (166) et Autumn (174). Il faudra déterminer quelle session utiliser selon la date ou laisser l'utilisateur choisir.

**CRM ID:** 166 (Spring Session) / 174 (Autumn Session), multiple: true

---

### FORM FIELD: `country`

**ANCIENNES OPTIONS:**

- Liste complète en anglais (Belgium, France, Germany, etc.)
- Code pays ISO (BE, FR, DE, etc.)

**OPTIONS CRM APPLIQUÉES:**

- Liste complète en français (France Metropolitaine, Belgique, Suisse, Luxembourg, Afghanistan, Afrique du Sud, Albanie, Algerie, Andorre, Angola, Arabie Saoudite, Argentine, Armenie, Australie, Autriche, Azerbaidjan, Bahamas, Bahrain, Bangladesh, Belize, Benin, Bermuda, Bhoutan, Bielorussie, Bolivie, Bosnie-Herzegovine, Botswana, Bresil, Brunei, Bulgarie, Burkina Faso, Burundi, Cambodge, Cameroun, Canada, Cap Vert, Chili, Chine, Colombie, Comores, Coree du sud, Costa Rica, Cote D'Ivoire, Tchad, Allemagne, Chypre, Croatie, Cuba, Danemark, Djibouti, Egypte, Emirats Arabes Unis, Etats-Unis, Erythree, Espagne, Estonie, Ethiopie, Fiji, Finlande, Gabon, Gambie, Georgie, Ghana, Gibraltar, Grece, Grenade, Guatemala, Guinee, Guinee-Bissau, Guinee Equatoriale, Guyana, Haiti, Honduras, Hong Kong, Hongrie, Islande, Inde, Indonesie, Irak, Iran, Ireland, Israel, Italie, Jamaique, Japon, Jordanie, Kazakhstan, Kenya, Kiribati, Koweit, Kirghizistan, Laos, Lesotho, Lettonie, Liban, Liberia, Liechtenstein, Lituanie, Macao, Macedoine du Nord, Madagascar, Malawi, Malaisie, Maldives, Mali, Malte, Maroc, Mauritanie, Maurice, Mexique, Moldavie, Monaco, Mongolie, Mozambique, Myanmar, Namibie, Nepal, Nouvelle-Zelande, Nicaragua, Niger, Nigeria, Norvege, Oman, Ouganda, Pakistan, Palaos, Pays-Bas, Panama, Papouasie Nouvelle-Guinee, Paraguay, Perou, Philippines, Pologne, Portugal, Puerto Rico, Qatar, Republique Centrafricaine, Republique democratique du Congo, Republique Tcheque, Roumanie, Russie, Rwanda, Senegal, Seychelles, Sierra Leone, Singapour, Slovaquie, Slovenie, Somalie, Sri Lanka, Soudan, Swaziland, Suede, Taiwan, Tanzanie, Thailande, Timor-Leste, Togo, Tunisie, Turquie, Turkmenistan, Tuvalu, Ukraine, Royaume-Uni, Uruguay, Ouzbekistan, Vanuatu, Venezuela, Viet Nam, Yemen, Zambie, Zimbabwe, Tajikistan, Suriname)

**⚠️ AVERTISSEMENT:** Le champ CRM utilise les noms de pays en français. Il faudra mapper les codes pays ISO vers les noms français ou adapter le champ autocomplete pour utiliser les noms français au lieu des codes.

**CRM ID:** 110 (Country of Arrival (FR), multiple: false)

---

### FORM FIELD: `origin`

**ANCIENNES OPTIONS:**

- Liste de ports/terminaux avec codes (ex: SZX, NGB, etc.)

**OPTIONS CRM APPLIQUÉES:**

- Anhui Province, China
- Hainan Province, China
- Haikou, Hainan, China
- Changde, Hunan, China
- Macau
- Fujian Province, China
- Dongguan, Guangdong, China
- Guangdong Province, China
- Guangzhou, Guangdong, China
- Shenzhen, Guangdong, China
- Zhejiang Province, China
- Fuzhou, Fujian, China
- Foshan, Guangdong, China
- Nanning, Guangxi, China
- Yunnan Province, China
- Jiangmen, Guangdong, China
- Hunan Province, China
- Xiamen, Fujian, China
- Hong Kong
- Guangxi Province, China
- Guilin, Guangxi, China
- Ningbo, Zhejiang, China
- Hefei, Anhui, China
- Jiujiang, Jiangxi, China
- Ganzhou, Jiangxi, China
- Fuzhou, Jiangxi, China
- Zhongshan, Guangdong, China
- Jiangxi Province, China
- Yiwu, Zhejiang, China
- Changsha, Hunan, China
- Kunming, Yunnan, China
- Wuhu, Anhui, China
- Hubei Province, China
- Wuhan, Hubei, China
- Jiangsu Province, China
- Lianyungang, Jiangsu, China
- Nanjing, Jiangsu, China
- Suzhou, Jiangsu, China
- Zhangjiagang, Jiangsu, China
- Xuzhou, Jiangsu, China
- Yancheng, Jiangsu, China
- Jiading, Shanghai, China
- Shanxi Province, China
- Changzhi, Shanxi, China
- Taiyuan, Shanxi, China
- Sichuan Province, China
- Chengdu, Sichuan, China
- Chongqing, Sichuan, China
- Liaoning Province, China
- Dalian, Liaoning, China
- Shenyang, Liaoning, China
- Henan Province, China
- Kaifeng, Henan, China
- Zhengzhou, Henan, China
- Shaanxi Province, China
- Xian, Shaanxi, China
- Shandong Province, China
- Qingdao, Shandong, China
- Yantai, Shandong, China
- Xinjiang, China
- Urumqi, Xinjiang, China
- Yanqing, Beijing, China
- Hebei Province, China
- Shijiazhuang, Hebei, China
- Zhangjiakou, Hebei, China
- Xingang, Tianjin, China
- I don't know
- Beijing, China
- Tianjin, China
- Shanghai, China
- Longyan, Fujian, China
- Nanping, Fujian, China
- Putian, Fujian, China
- Quanzhou, Fujian, China
- Sanming, Fujian, China
- Shaowu, Fujian, China
- Shishi, Fujian, China
- Zhangzhou, Fujian, China

**⚠️ AVERTISSEMENT:** Le CRM utilise des noms de villes/provinces en format texte, pas des codes. Il faudra mapper les codes actuels vers ces noms ou adapter le champ.

**CRM ID:** 27 (Port of departure, multiple: false)

---

## B) Champs sans correspondance CRM

Les champs suivants du formulaire **n'ont PAS de correspondance directe** dans le CRM et doivent être gérés autrement (champs texte libres, champs personnalisés à créer, ou mapping vers des champs existants) :

1. **`areGoodsReady`** - Disponibilité des marchandises
   - Options actuelles: yes, no_in_1_week, no_in_2_weeks, no_in_1_month, no_date_set
2. **`shipperType`** - Fréquence d'expédition
   - Options actuelles: first-time, up-to-10x, more-than-10x, regular
3. **`isPersonalOrHazardous`** - Marchandises personnelles/dangereuses
   - Type: booléen
4. **`qc.type`** - Type d'inspection QC
   - Options actuelles: pre_production, during_production, pre_shipment, factory_audit
5. **`qc.productionStage`** - Étape de production QC
   - Options actuelles: not_started, in_progress, finished
6. **`warehousing.duration`** - Durée de stockage
   - Options actuelles: lt_1_month, 1_3_months, gt_3_months
7. **`warehousing.consolidation`** - Besoin de consolidation
   - Type: booléen
8. **`dropshipping.hasCatalog`** - Avoir un catalogue
   - Type: booléen
9. **`dropshipping.brandingNeeded`** - Besoin d'emballage de marque
   - Type: booléen
10. **`chinaVisit.needGuide`** - Besoin de guide/interprète
    - Type: booléen
11. **`chinaVisit.needTransport`** - Besoin de transport local
    - Type: booléen
12. **`chinaVisit.needHotels`** - Besoin d'aide pour hôtels
    - Type: booléen

---

## C) Champs CRM importants non présents dans le formulaire

Les champs suivants existent dans le CRM mais **ne sont PAS présents dans le formulaire** :

1. **Meeting Time (ID 95)** - Horaire de rendez-vous (GMT +8)
   - Options: 9:30 - 10:00, 10:00 - 10:30, etc.
2. **Budget (optional) (ID 106)** - Budget
   - Options: $100-$500, $500-$1000, $1,000-$5,000, $5,000-$10,000, > $20.000, No decide vet
3. **Where to sell (optional) (ID 109)** - Où vendre
   - Options: Physical store, E-commerce, Distributor, Trade company
   - Type: checkbox (multiple: true)
4. **Which Amazon FBA service are you looking for? (ID 148)** - Service Amazon FBA
   - Options: FBA Preparation Service, Shipping Service, Both Services
5. **Initial Quantity Planned (FBA) (ID 149)** - Quantité initiale FBA
   - Options: 100, 300, 500, 501+
6. **Initial Quantity Planned (Drop Shipping) (ID 150)** - Quantité dropshipping
   - Options: 100 - 500, 501 - 1000, 1001+
7. **Amazon Marketplace (ID 151)** - Marketplace Amazon
   - Options: Amazon.com (USA), Amazon.co.uk (UK), Amazon.de (Germany), etc.
8. **Main Destination Regions (ID 153)** - Régions de destination principales
   - Options: China, Hong Kong, Asia, Africa, Middle East, Europe, Oceania, North America, South America
9. **Estimated Volume of Operations (ID 184)** - Volume estimé d'opérations
   - Options: 50-500, 501-1000, 1001-5000
   - Type: checkbox (multiple: true)
10. **What type of warehouse and fulfillment (ID 185)** - Type d'entrepôt et fulfillment
    - Options: Storage, Inventory Management, Fulfillment by Amazon FBA, Customs Clearance, Last-Mile Delivery, Repackage and other
    - Type: checkbox (multiple: true)

---

## D) Recommandations

1. **Pays (country)**: Créer un mapping des codes ISO vers les noms français du CRM, ou utiliser directement les noms français dans l'autocomplete.

2. **Port d'origine (origin)**: Créer un mapping des codes de ports vers les noms du CRM, ou adapter l'autocomplete pour utiliser les noms du CRM.

3. **Customer Type**: Le formulaire actuel ne correspond pas. Il faudra soit:
   - Ajouter un nouveau champ dans le formulaire avec les options CRM
   - Ou mapper company/individual vers une des options CRM (ex: company → "Ecommerce seller" ou "Importer (wholesaler)")

4. **China Visit Phases**: Implémenter une logique pour déterminer Spring vs Autumn selon la date, ou permettre à l'utilisateur de choisir la session.

5. **Champs sans correspondance**: Envoyer ces valeurs dans des champs texte libres du CRM ou créer des champs personnalisés.

6. **Champs CRM manquants**: Considérer leur ajout au formulaire si pertinent pour le business.
