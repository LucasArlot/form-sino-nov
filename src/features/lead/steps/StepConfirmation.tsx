import React from 'react';
import FormStep from '../FormStep';
import { useQuoteForm } from '@/features/lead/context/useQuoteForm';
import { initialLoadDetails } from '@/features/lead/context/types';
import { COUNTRIES } from '@/data/countries';
import CustomDropdown from '@/shared/components/CustomDropdown';

const LANGUAGE_OPTIONS: Array<{ value: string; label: string }> = [
  { value: 'en', label: '🇺🇸 English' },
  { value: 'fr', label: '🇫🇷 Français' },
  { value: 'zh', label: '🇨🇳 中文' },
  { value: 'de', label: '🇩🇪 Deutsch' },
  { value: 'es', label: '🇪🇸 Español' },
  { value: 'it', label: '🇮🇹 Italiano' },
  { value: 'nl', label: '🇳🇱 Nederlands' },
  { value: 'ar', label: '🇸🇦 العربية' },
  { value: 'pt', label: '🇵🇹 Português' },
  { value: 'tr', label: '🇹🇷 Türkçe' },
  { value: 'ru', label: '🇷🇺 Русский' },
];

type StepConfirmationProps = {
  submissionId: string;
  setSubmissionId: React.Dispatch<React.SetStateAction<string>>;
  showToast: (message: string) => void;
};

const StepConfirmation: React.FC<StepConfirmationProps> = ({
  submissionId,
  setSubmissionId,
  showToast,
}) => {
  const {
    currentStep,
    userLang,
    formData,
    setFormData,
    setFieldValid,
    setCurrentStep,
    getText: ctxGetText,
    setUserLang,
  } = useQuoteForm();

  const DEFAULT_EN_TEXT: Record<string, string> = {
    confirmationTitle: ctxGetText('confirmationTitle', 'Quote Request Confirmed'),
    confirmationSubtitle: ctxGetText(
      'confirmationSubtitle',
      'Your request has been successfully submitted'
    ),
    referenceNumber: 'Reference Number',
    yourRequest: 'Your Request Summary',
    shipmentDetails: 'Shipment Details',
    contactDetails: 'Contact Details',
    nextSteps: 'Next Steps',
    step1: 'Request received',
    step1Time: 'Now',
    step2: 'Analysis & pricing',
    step2Time: 'Within 4 business hours',
    step3: 'Sales contact',
    step3Time: 'Within 24 hours',
    step4: 'Detailed quote',
    step4Time: 'Within 48 hours',
    mode: 'Mode',
    shipment: 'shipment',
    shipments: 'shipments',
    aboutSino: 'About SINO Shipping & FS International',
    aboutSubtitle: 'Your request is in expert hands',
    sinoDescription:
      'SINO Shipping, launched in 2018 by French entrepreneurs, became part of FS International in 2021. This partnership combines Western customer-focused approach with deep Chinese local expertise.',
    fsDescription:
      'FS International, founded in Hong Kong in September 1989, is one of the most trusted names in global logistics and transportation in the region.',
    ourExpertise: 'Our Expertise',
    expertise1: 'Maritime, air, rail & multimodal transport',
    expertise2: 'E-commerce solutions (Amazon FBA, dropshipping)',
    expertise3: 'Sourcing & quality control',
    expertise4: 'Complete logistics services',
    impactInNumbers: 'Our Impact in Numbers',
    impactDescription: 'Delivering excellence across China with proven results and trusted service',
    satisfiedCustomers: 'Satisfied Customers',
    customerSatisfaction: 'Customer Satisfaction',
    teamMembers: 'Team Members',
    oceanVolume: 'TEU Ocean Volume',
    officesInChina: 'Offices in China',
    cfsFacilities: 'M² CFS Facilities',
    globalNetwork: 'Global Network',
    networkDescription: 'Strategic offices in key logistics hubs:',
    chinaOffices: 'China: Shanghai, Shenzhen, Guangzhou, Ningbo, Tianjin, Qingdao, Xiamen',
    hkOffice: 'Hong Kong: 1/F, Block C, Sea View Estate, 8 Watson Road, North Point',
    websites: 'Websites',
    needHelp: 'Need Help?',
    community: 'Community',
    contactEmail: 'Contact email',
    available: 'available',
    businessHours: '9am-6pm (China time)',
    actions: 'Quick Actions',
    newRequest: 'Make another request',
    thankYouTitle: 'Thank you for your trust!',
    thankYouMessage:
      'Your request will be handled with the utmost care by our international transport experts.',
  };

  const DEFAULT_DE_TEXT: Record<string, string> = {
    confirmationTitle: 'Angebotsanfrage Bestätigt',
    confirmationSubtitle: 'Ihre Anfrage wurde erfolgreich übermittelt',
    referenceNumber: 'Referenznummer',
    yourRequest: 'Ihre Anfragezusammenfassung',
    shipmentDetails: 'Sendungsdetails',
    contactDetails: 'Kontaktdaten',
    nextSteps: 'Nächste Schritte',
    step1: 'Anfrage erhalten',
    step1Time: 'Jetzt',
    step2: 'Analyse und Kalkulation',
    step2Time: 'Innerhalb von 4 Geschäftsstunden',
    step3: 'Vertriebskontakt',
    step3Time: 'Innerhalb von 24 Stunden',
    step4: 'Detailliertes Angebot',
    step4Time: 'Innerhalb von 48 Stunden',
    mode: 'Modus',
    shipment: 'Sendung',
    shipments: 'Sendungen',
    aboutSino: 'Über SINO Shipping & FS International',
    aboutSubtitle: 'Ihre Anfrage ist in Expertenhänden',
    sinoDescription:
      'SINO Shipping, 2018 von französischen Unternehmern gegründet, wurde 2021 Teil von FS International. Diese Partnerschaft verbindet einen westlich kundenorientierten Ansatz mit tiefgehender lokaler China-Expertise.',
    fsDescription:
      'FS International, gegründet in Hongkong im September 1989, ist einer der vertrauenswürdigsten Namen für globale Logistik und Transport in der Region.',
    ourExpertise: 'Unsere Expertise',
    expertise1: 'See-, Luft-, Bahn- und multimodaler Transport',
    expertise2: 'E‑Commerce‑Lösungen (Amazon FBA, Dropshipping)',
    expertise3: 'Beschaffung & Qualitätskontrolle',
    expertise4: 'Umfassende Logistikservices',
    impactInNumbers: 'Unser Einfluss in Zahlen',
    impactDescription: 'Exzellenz in China mit nachweisbaren Ergebnissen und verlässlichem Service',
    satisfiedCustomers: 'Zufriedene Kunden',
    customerSatisfaction: 'Kundenzufriedenheit',
    teamMembers: 'Teammitglieder',
    oceanVolume: 'TEU Seefrachtvolumen',
    officesInChina: 'Büros in China',
    cfsFacilities: 'm² CFS‑Anlagen',
    globalNetwork: 'Globales Netzwerk',
    networkDescription: 'Strategische Büros in wichtigen Logistikhubs:',
    chinaOffices: 'China: Shanghai, Shenzhen, Guangzhou, Ningbo, Tianjin, Qingdao, Xiamen',
    hkOffice: 'Hongkong: 1. Stock, Block C, Sea View Estate, 8 Watson Road, North Point',
    websites: 'Websites',
    needHelp: 'Benötigen Sie Hilfe?',
    community: 'Community',
    contactEmail: 'Kontakt‑E‑Mail',
    available: 'erreichbar',
    businessHours: '9–18 Uhr (China‑Zeit)',
    actions: 'Schnellaktionen',
    newRequest: 'Weitere Anfrage stellen',
    thankYouTitle: 'Vielen Dank für Ihr Vertrauen!',
    thankYouMessage:
      'Ihre Anfrage wird von unseren internationalen Transportexperten mit größter Sorgfalt bearbeitet.',
  };

  const DEFAULT_ES_TEXT: Record<string, string> = {
    confirmationTitle: 'Solicitud de Cotización Confirmada',
    confirmationSubtitle: 'Su solicitud ha sido enviada exitosamente',
    referenceNumber: 'Número de Referencia',
    yourRequest: 'Resumen de Su Solicitud',
    shipmentDetails: 'Detalles del Envío',
    contactDetails: 'Detalles de Contacto',
    nextSteps: 'Próximos Pasos',
    step1: 'Solicitud recibida',
    step1Time: 'Ahora',
    step2: 'Análisis y cotización',
    step2Time: 'En 4 horas laborales',
    step3: 'Contacto comercial',
    step3Time: 'En 24 horas',
    step4: 'Cotización detallada',
    step4Time: 'En 48 horas',
    mode: 'Modo',
    shipment: 'envío',
    shipments: 'envíos',
    aboutSino: 'Acerca de SINO Shipping & FS International',
    aboutSubtitle: 'Su solicitud está en manos expertas',
    sinoDescription:
      'SINO Shipping, lanzado en 2018 por emprendedores franceses, se convirtió en parte de FS International en 2021. Esta asociación combina el enfoque occidental centrado en el cliente con una profunda experiencia local en China.',
    fsDescription:
      'FS International, fundada en Hong Kong en septiembre de 1989, es uno de los nombres más confiables en logística y transporte global de la región.',
    ourExpertise: 'Nuestra Experiencia',
    expertise1: 'Transporte marítimo, aéreo, ferroviario y multimodal',
    expertise2: 'Soluciones de comercio electrónico (Amazon FBA, dropshipping)',
    expertise3: 'Abastecimiento y control de calidad',
    expertise4: 'Servicios logísticos completos',
    impactInNumbers: 'Nuestro Impacto en Números',
    impactDescription:
      'Ofreciendo excelencia en China con resultados probados y servicio confiable',
    satisfiedCustomers: 'Clientes Satisfechos',
    customerSatisfaction: 'Satisfacción del Cliente',
    teamMembers: 'Miembros del Equipo',
    oceanVolume: 'Volumen Oceánico TEU',
    officesInChina: 'Oficinas en China',
    cfsFacilities: 'Instalaciones CFS M²',
    globalNetwork: 'Red Global',
    networkDescription: 'Oficinas estratégicas en centros logísticos clave:',
    chinaOffices: 'China: Shanghai, Shenzhen, Guangzhou, Ningbo, Tianjin, Qingdao, Xiamen',
    hkOffice: 'Hong Kong: 1.º piso, Bloque C, Sea View Estate, 8 Watson Road, North Point',
    websites: 'Sitios web',
    needHelp: '¿Necesita Ayuda?',
    community: 'Comunidad',
    contactEmail: 'Correo electrónico de contacto',
    available: 'disponible',
    businessHours: '9:00–18:00 (hora de China)',
    actions: 'Acciones Rápidas',
    newRequest: 'Hacer otra solicitud',
    thankYouTitle: '¡Gracias por su confianza!',
    thankYouMessage:
      'Su solicitud será manejada con el máximo cuidado por nuestros expertos en transporte internacional.',
  };

  const DEFAULT_IT_TEXT: Record<string, string> = {
    confirmationTitle: 'Richiesta di Preventivo Confermata',
    confirmationSubtitle: 'La vostra richiesta è stata inviata con successo',
    referenceNumber: 'Numero di Riferimento',
    yourRequest: 'Riepilogo della Vostra Richiesta',
    shipmentDetails: 'Dettagli della Spedizione',
    contactDetails: 'Dettagli di Contatto',
    nextSteps: 'Prossimi Passi',
    step1: 'Richiesta ricevuta',
    step1Time: 'Ora',
    step2: 'Analisi e quotazione',
    step2Time: 'Entro 4 ore lavorative',
    step3: 'Contatto commerciale',
    step3Time: 'Entro 24 ore',
    step4: 'Preventivo dettagliato',
    step4Time: 'Entro 48 ore',
    mode: 'Modalità',
    shipment: 'spedizione',
    shipments: 'spedizioni',
    aboutSino: 'Su SINO Shipping & FS International',
    aboutSubtitle: 'La vostra richiesta è in mani esperte',
    sinoDescription:
      "SINO Shipping, lanciata nel 2018 da imprenditori francesi, è diventata parte di FS International nel 2021. Questa partnership combina l'approccio occidentale orientato al cliente con una profonda expertise locale in Cina.",
    fsDescription:
      'FS International, fondata a Hong Kong nel settembre 1989, è uno dei nomi più affidabili nella logistica e nel trasporto globale nella regione.',
    ourExpertise: 'La Nostra Esperienza',
    expertise1: 'Trasporto marittimo, aereo, ferroviario e multimodale',
    expertise2: 'Soluzioni e‑commerce (Amazon FBA, dropshipping)',
    expertise3: 'Sourcing e controllo qualità',
    expertise4: 'Servizi logistici completi',
    impactInNumbers: 'Il Nostro Impatto in Numeri',
    impactDescription: 'Offrendo eccellenza in Cina con risultati comprovati e servizio affidabile',
    satisfiedCustomers: 'Clienti Soddisfatti',
    customerSatisfaction: 'Soddisfazione del Cliente',
    teamMembers: 'Membri del Team',
    oceanVolume: 'Volume Marittimo TEU',
    officesInChina: 'Uffici in Cina',
    cfsFacilities: 'M² Strutture CFS',
    globalNetwork: 'Rete Globale',
    networkDescription: 'Uffici strategici nei principali hub logistici:',
    chinaOffices: 'Cina: Shanghai, Shenzhen, Guangzhou, Ningbo, Tianjin, Qingdao, Xiamen',
    hkOffice: 'Hong Kong: 1º piano, Blocco C, Sea View Estate, 8 Watson Road, North Point',
    websites: 'Siti web',
    needHelp: 'Serve Aiuto?',
    community: 'Comunità',
    contactEmail: 'Email di contatto',
    available: 'disponibile',
    businessHours: '9:00–18:00 (ora della Cina)',
    actions: 'Azioni Rapide',
    newRequest: "Fare un'altra richiesta",
    thankYouTitle: 'Grazie per la vostra fiducia!',
    thankYouMessage:
      'La vostra richiesta sarà gestita con la massima cura dai nostri esperti di trasporto internazionale.',
  };

  const DEFAULT_NL_TEXT: Record<string, string> = {
    confirmationTitle: 'Offerteaanvraag Bevestigd',
    confirmationSubtitle: 'Uw aanvraag is succesvol verzonden',
    referenceNumber: 'Referentienummer',
    yourRequest: 'Samenvatting van Uw Aanvraag',
    shipmentDetails: 'Zendingdetails',
    contactDetails: 'Contactgegevens',
    nextSteps: 'Volgende Stappen',
    step1: 'Aanvraag ontvangen',
    step1Time: 'Nu',
    step2: 'Analyse en prijsopgave',
    step2Time: 'Binnen 4 werkuren',
    step3: 'Salescontact',
    step3Time: 'Binnen 24 uur',
    step4: 'Gedetailleerde offerte',
    step4Time: 'Binnen 48 uur',
    mode: 'Vervoerswijze',
    shipment: 'zending',
    shipments: 'zendingen',
    aboutSino: 'Over SINO Shipping & FS International',
    aboutSubtitle: 'Uw aanvraag wordt afgehandeld door experts',
    sinoDescription:
      'SINO Shipping werd opgericht in 2018 door Franse ondernemers en werd in 2021 onderdeel van FS International. Deze samenwerking combineert een westerse klantgerichte benadering met diepe lokale expertise in China.',
    fsDescription:
      'FS International werd opgericht in september 1989 in Hongkong en is een van de meest vertrouwde namen voor wereldwijde logistiek en transport in de regio.',
    ourExpertise: 'Onze Expertise',
    expertise1: 'Zee-, lucht-, spoor- en multimodaal transport',
    expertise2: 'E‑commerceoplossingen (Amazon FBA, dropshipping)',
    expertise3: 'Sourcing en kwaliteitscontrole',
    expertise4: 'Volledige logistieke diensten',
    impactInNumbers: 'Onze Impact in Cijfers',
    impactDescription: 'Excellentie leveren in China met bewezen resultaten en betrouwbare service',
    satisfiedCustomers: 'Tevreden Klanten',
    customerSatisfaction: 'Klanttevredenheid',
    teamMembers: 'Teamleden',
    oceanVolume: 'TEU Zeevracht Volume',
    officesInChina: 'Kantoren in China',
    cfsFacilities: 'M² CFS Faciliteiten',
    globalNetwork: 'Wereldwijd Netwerk',
    networkDescription:
      'Met strategische kantoren in China en Hongkong zijn we ideaal gepositioneerd om uw zendingen efficiënt af te handelen.',
    chinaOffices: 'China: Shanghai, Shenzhen, Guangzhou, Ningbo, Tianjin, Qingdao, Xiamen',
    hkOffice: 'Hongkong: 1e verdieping, Blok C, Sea View Estate, 8 Watson Road, North Point',
    websites: 'Websites',
    needHelp: 'Hulp Nodig?',
    community: 'Community',
    contactEmail: 'Contact e‑mail',
    available: 'bereikbaar',
    businessHours: '09:00–18:00 (Chinese tijd)',
    actions: 'Snelle Acties',
    newRequest: 'Nieuwe Aanvraag Indienen',
    thankYouTitle: 'Dank u voor uw vertrouwen!',
    thankYouMessage:
      'Uw verzoek wordt met de grootste zorg behandeld door onze internationale transportexperts.',
  };

  const DEFAULT_ZH_TEXT: Record<string, string> = {
    confirmationTitle: '报价申请已确认',
    confirmationSubtitle: '您的申请已成功提交',
    referenceNumber: '参考编号',
    yourRequest: '您的申请摘要',
    shipmentDetails: '货运详情',
    contactDetails: '联系方式',
    nextSteps: '后续步骤',
    step1: '申请已接收',
    step1Time: '现在',
    step2: '分析与报价',
    step2Time: '4个工作小时内',
    step3: '商务联系',
    step3Time: '24小时内',
    step4: '详细报价',
    step4Time: '48小时内',
    mode: '运输方式',
    shipment: '货运',
    shipments: '货运',
    aboutSino: '关于SINO Shipping & FS International',
    aboutSubtitle: '您的申请由专家处理',
    sinoDescription:
      'SINO Shipping由法国企业家于2018年创立，2021年成为FS International的一部分。这种合作结合了西方以客户为中心的方法和深厚的中国本地专业知识。',
    fsDescription:
      'FS International成立于1989年9月在香港，是该地区全球物流和运输最值得信赖的品牌之一。',
    ourExpertise: '我们的专业能力',
    expertise1: '海运、空运、铁路和多式联运',
    expertise2: '电子商务解决方案（亚马逊FBA、代发货）',
    expertise3: '采购和质量控制',
    expertise4: '完整的物流服务',
    impactInNumbers: '我们的数字影响力',
    impactDescription: '在中国提供卓越服务，拥有经过验证的结果和可信赖的服务',
    satisfiedCustomers: '满意客户',
    customerSatisfaction: '客户满意度',
    teamMembers: '团队成员',
    oceanVolume: 'TEU海运量',
    officesInChina: '中国办公室',
    cfsFacilities: 'CFS设施平方米',
    globalNetwork: '全球网络',
    networkDescription: '在主要物流枢纽的战略办事处：',
    chinaOffices: '中国：上海、深圳、广州、宁波、天津、青岛、厦门',
    hkOffice: '香港：北角华森道8号 Sea View Estate C座 1楼',
    websites: '网站',
    needHelp: '需要帮助?',
    community: '社区',
    contactEmail: '联系邮箱',
    available: '在线时间',
    businessHours: '9:00–18:00（中国时间）',
    actions: '快速操作',
    newRequest: '提交新申请',
    thankYouTitle: '感谢您的信任！',
    thankYouMessage: '您的请求将由我们的国际运输专家精心处理。',
  };

  const DEFAULT_AR_TEXT: Record<string, string> = {
    confirmationTitle: 'تأكيد طلب عرض السعر',
    confirmationSubtitle: 'تم إرسال طلبكم بنجاح',
    referenceNumber: 'رقم المرجع',
    yourRequest: 'ملخص طلبكم',
    shipmentDetails: 'تفاصيل الشحنة',
    contactDetails: 'تفاصيل الاتصال',
    nextSteps: 'الخطوات التالية',
    step1: 'تم استلام الطلب',
    step1Time: 'الآن',
    step2: 'التحليل والتسعير',
    step2Time: 'خلال 4 ساعات عمل',
    step3: 'التواصل التجاري',
    step3Time: 'خلال 24 ساعة',
    step4: 'عرض سعر مفصل',
    step4Time: 'خلال 48 ساعة',
    mode: 'طريقة النقل',
    shipment: 'شحنة',
    shipments: 'شحنات',
    aboutSino: 'حول SINO Shipping & FS International',
    aboutSubtitle: 'طلبكم بيد خبراء',
    sinoDescription:
      'تأسست SINO Shipping عام 2018 على يد رواد أعمال فرنسيين، وأصبحت جزءًا من FS International في 2021. يجمع هذا التعاون بين نهج غربي متمحور حول العميل وخبرة محلية صينية عميقة.',
    fsDescription:
      'تأسست FS International في هونغ كونغ في سبتمبر 1989، وهي من الأسماء الأكثر موثوقية في مجال الخدمات اللوجستية والنقل العالمي في المنطقة.',
    ourExpertise: 'خبرتنا',
    expertise1: 'الشحن البحري والجوي والسككي والمتعدد الوسائط',
    expertise2: 'حلول التجارة الإلكترونية (Amazon FBA، دروبشيبينغ)',
    expertise3: 'التوريد ومراقبة الجودة',
    expertise4: 'خدمات لوجستية متكاملة',
    impactInNumbers: 'تأثيرنا بالأرقام',
    impactDescription: 'تقديم التميز في الصين بنتائج مثبتة وخدمة موثوقة',
    satisfiedCustomers: 'عملاء راضون',
    customerSatisfaction: 'رضا العملاء',
    teamMembers: 'أعضاء الفريق',
    oceanVolume: 'حجم الشحن البحري TEU',
    officesInChina: 'مكاتب في الصين',
    cfsFacilities: 'مرافق CFS بالمتر المربع',
    globalNetwork: 'الشبكة العالمية',
    networkDescription: 'مكاتب استراتيجية في أهم مراكز الخدمات اللوجستية:',
    chinaOffices: 'الصين: شنغهاي، شينزين، غوانزو، نينغبو، تيانجين، تشينغداو، شيامن',
    hkOffice: 'هونغ كونغ: الطابق الأول، المبنى C، Sea View Estate، 8 Watson Road، نورث بوينت',
    websites: 'المواقع',
    needHelp: 'تحتاجون مساعدة؟',
    community: 'المجتمع',
    contactEmail: 'البريد الإلكتروني للتواصل',
    available: 'ساعات العمل',
    businessHours: '9:00–18:00 (بتوقيت الصين)',
    actions: 'إجراءات سريعة',
    newRequest: 'تقديم طلب جديد',
    thankYouTitle: 'شكراً لثقتكم!',
    thankYouMessage: 'سيتم التعامل مع طلبكم بأقصى درجات العناية من قبل خبراء النقل الدولي لدينا.',
  };

  const DEFAULT_PT_TEXT: Record<string, string> = {
    confirmationTitle: 'Solicitação de Cotação Confirmada',
    confirmationSubtitle: 'Sua solicitação foi enviada com sucesso',
    referenceNumber: 'Número de Referência',
    yourRequest: 'Resumo da Sua Solicitação',
    shipmentDetails: 'Detalhes da Remessa',
    contactDetails: 'Detalhes de Contato',
    nextSteps: 'Próximos Passos',
    step1: 'Solicitação recebida',
    step1Time: 'Agora',
    step2: 'Análise e cotação',
    step2Time: 'Em 4 horas úteis',
    step3: 'Contato comercial',
    step3Time: 'Em 24 horas',
    step4: 'Cotação detalhada',
    step4Time: 'Em 48 horas',
    mode: 'Modalidade',
    shipment: 'remessa',
    shipments: 'remessas',
    aboutSino: 'Sobre a SINO Shipping & FS International',
    aboutSubtitle: 'Sua solicitação é tratada por especialistas',
    sinoDescription:
      'A SINO Shipping foi fundada em 2018 por empreendedores franceses e tornou-se parte da FS International em 2021. Esta colaboração combina uma abordagem ocidental centrada no cliente com profunda expertise local na China.',
    fsDescription:
      'A FS International foi fundada em setembro de 1989 em Hong Kong, sendo uma das marcas mais confiáveis para logística e transporte global na região.',
    ourExpertise: 'Nossa Expertise',
    expertise1: 'Frete marítimo, aéreo, ferroviário e multimodal',
    expertise2: 'Soluções de e-commerce (Amazon FBA, dropshipping)',
    expertise3: 'Sourcing e controle de qualidade',
    expertise4: 'Serviços logísticos completos',
    impactInNumbers: 'Nosso Impacto em Números',
    impactDescription:
      'Entregando excelência na China com resultados comprovados e serviço confiável',
    satisfiedCustomers: 'Clientes Satisfeitos',
    customerSatisfaction: 'Satisfação do Cliente',
    teamMembers: 'Membros da Equipe',
    oceanVolume: 'Volume Marítimo TEU',
    officesInChina: 'Escritórios na China',
    cfsFacilities: 'M² Instalações CFS',
    globalNetwork: 'Rede Global',
    networkDescription:
      'Com escritórios estratégicos na China e Hong Kong, estamos idealmente posicionados para atender suas remessas com eficiência.',
    chinaOffices: 'China: Shanghai, Shenzhen, Guangzhou, Ningbo, Tianjin, Qingdao, Xiamen',
    hkOffice: 'Hong Kong: 1º andar, Bloco C, Sea View Estate, 8 Watson Road, North Point',
    websites: 'Sites',
    needHelp: 'Precisa de Ajuda?',
    community: 'Comunidade',
    contactEmail: 'E-mail de contato',
    available: 'disponível',
    businessHours: '9h–18h (horário da China)',
    actions: 'Ações Rápidas',
    newRequest: 'Enviar Nova Solicitação',
    thankYouTitle: 'Obrigado pela sua confiança!',
    thankYouMessage:
      'Sua solicitação será tratada com o máximo cuidado por nossos especialistas em transporte internacional.',
  };

  const DEFAULT_TR_TEXT: Record<string, string> = {
    confirmationTitle: 'Teklif Talebi Onaylandı',
    confirmationSubtitle: 'Talebiniz başarıyla gönderildi',
    referenceNumber: 'Referans Numarası',
    yourRequest: 'Talebinizin Özeti',
    shipmentDetails: 'Gönderi Detayları',
    contactDetails: 'İletişim Bilgileri',
    nextSteps: 'Sonraki Adımlar',
    step1: 'Talep alındı',
    step1Time: 'Şimdi',
    step2: 'Analiz ve fiyatlandırma',
    step2Time: '4 iş saati içinde',
    step3: 'Satış iletişimi',
    step3Time: '24 saat içinde',
    step4: 'Ayrıntılı teklif',
    step4Time: '48 saat içinde',
    mode: 'Taşıma Şekli',
    shipment: 'gönderi',
    shipments: 'gönderiler',
    aboutSino: 'SINO Shipping & FS International Hakkında',
    aboutSubtitle: 'Talebiniz uzmanlarımız tarafından işleniyor',
    sinoDescription:
      "SINO Shipping 2018 yılında Fransız girişimciler tarafından kuruldu ve 2021'de FS International'ın bir parçası oldu. Bu iş birliği, müşteri odaklı Batılı yaklaşımı derin yerel Çin uzmanlığıyla birleştirir.",
    fsDescription:
      "FS International, Eylül 1989'da Hong Kong'da kuruldu ve bölgede küresel lojistik ve taşımacılığın en güvenilir isimlerinden biridir.",
    ourExpertise: 'Uzmanlığımız',
    expertise1: 'Deniz, hava, demiryolu ve multimodal taşımacılık',
    expertise2: 'E-ticaret çözümleri (Amazon FBA, dropshipping)',
    expertise3: 'Tedarik ve kalite kontrol',
    expertise4: 'Kapsamlı lojistik hizmetleri',
    impactInNumbers: 'Rakamlarla Etkimiz',
    impactDescription: "Kanıtlanmış sonuçlar ve güvenilir hizmetle Çin'de mükemmellik sunuyoruz",
    satisfiedCustomers: 'Memnun Müşteriler',
    customerSatisfaction: 'Müşteri Memnuniyeti',
    teamMembers: 'Takım Üyeleri',
    oceanVolume: 'TEU Deniz Hacmi',
    officesInChina: "Çin'deki Ofisler",
    cfsFacilities: 'M² CFS Tesisleri',
    globalNetwork: 'Küresel Ağ',
    networkDescription:
      "Çin ve Hong Kong'daki stratejik ofislerimizle, gönderilerinizi verimli şekilde ele almak için ideal konumdayız.",
    chinaOffices: 'Çin: Şanghay, Shenzhen, Guangzhou, Ningbo, Tianjin, Qingdao, Xiamen',
    hkOffice: 'Hong Kong: 1. kat, C Blok, Sea View Estate, 8 Watson Road, North Point',
    websites: 'Web Siteleri',
    needHelp: 'Yardıma İhtiyacınız Var?',
    community: 'Topluluk',
    contactEmail: 'İletişim e-postası',
    available: 'çalışma saatleri',
    businessHours: '09:00–18:00 (Çin saati)',
    actions: 'Hızlı İşlemler',
    newRequest: 'Yeni Talep Gönder',
    thankYouTitle: 'Güveniniz için teşekkürler!',
    thankYouMessage:
      'Talebiniz uluslararası taşımacılık uzmanlarımız tarafından en büyük özenle işlenecektir.',
  };

  const DEFAULT_RU_TEXT: Record<string, string> = {
    confirmationTitle: 'Запрос на Расчёт Стоимости Подтверждён',
    confirmationSubtitle: 'Ваш запрос был успешно отправлен',
    referenceNumber: 'Номер Заявки',
    yourRequest: 'Краткое Описание Вашего Запроса',
    shipmentDetails: 'Детали Груза',
    contactDetails: 'Контактные Данные',
    nextSteps: 'Следующие Шаги',
    step1: 'Запрос получен',
    step1Time: 'Сейчас',
    step2: 'Анализ и расчёт',
    step2Time: 'В течение 4 рабочих часов',
    step3: 'Связь с отделом продаж',
    step3Time: 'В течение 24 часов',
    step4: 'Детализированное коммерческое предложение',
    step4Time: 'В течение 48 часов',
    mode: 'Способ Доставки',
    shipment: 'отправление',
    shipments: 'отправления',
    aboutSino: 'О SINO Shipping & FS International',
    aboutSubtitle: 'Ваш запрос обрабатывается экспертами',
    sinoDescription:
      'SINO Shipping была основана в 2018 году французскими предпринимателями и в 2021 году стала частью FS International. Это сотрудничество объединяет западный клиентоориентированный подход и глубокую локальную экспертизу в Китае.',
    fsDescription:
      'FS International была основана в сентябре 1989 года в Гонконге и является одним из самых надёжных брендов глобальной логистики и транспорта в регионе.',
    ourExpertise: 'Наша Экспертиза',
    expertise1: 'Морские, авиационные, железнодорожные и мультимодальные перевозки',
    expertise2: 'Решения для e‑commerce (Amazon FBA, дропшиппинг)',
    expertise3: 'Закупки и контроль качества',
    expertise4: 'Полный комплекс логистических услуг',
    impactInNumbers: 'Наше Влияние в Цифрах',
    impactDescription:
      'Обеспечиваем превосходство в Китае с проверенными результатами и надёжным сервисом',
    satisfiedCustomers: 'Довольных Клиентов',
    customerSatisfaction: 'Удовлетворённость Клиентов',
    teamMembers: 'Члены Команды',
    oceanVolume: 'Объём Морских Перевозок TEU',
    officesInChina: 'Офисы в Китае',
    cfsFacilities: 'М² Объекты CFS',
    globalNetwork: 'Глобальная Сеть',
    networkDescription:
      'Со стратегическими офисами в Китае и Гонконге мы идеально позиционированы для эффективной обработки ваших грузов.',
    chinaOffices: 'Китай: Шанхай, Шэньчжэнь, Гуанчжоу, Нинбо, Тяньцзинь, Циндао, Сямэнь',
    hkOffice: 'Гонконг: 1 этаж, блок C, Sea View Estate, 8 Watson Road, North Point',
    websites: 'Сайты',
    needHelp: 'Нужна Помощь?',
    community: 'Сообщество',
    contactEmail: 'Эл. почта для связи',
    available: 'доступны',
    businessHours: '9:00–18:00 (по времени Китая)',
    actions: 'Быстрые Действия',
    newRequest: 'Отправить Новый Запрос',
    thankYouTitle: 'Спасибо за ваше доверие!',
    thankYouMessage:
      'Ваш запрос будет обработан с максимальной заботой нашими экспертами по международным перевозкам.',
  };

  const getText = (key: string): string => {
    const fallback =
      (userLang === 'de' && DEFAULT_DE_TEXT[key]) ||
      (userLang === 'es' && DEFAULT_ES_TEXT[key]) ||
      (userLang === 'it' && DEFAULT_IT_TEXT[key]) ||
      (userLang === 'nl' && DEFAULT_NL_TEXT[key]) ||
      (userLang === 'zh' && DEFAULT_ZH_TEXT[key]) ||
      (userLang === 'ar' && DEFAULT_AR_TEXT[key]) ||
      (userLang === 'pt' && DEFAULT_PT_TEXT[key]) ||
      (userLang === 'tr' && DEFAULT_TR_TEXT[key]) ||
      (userLang === 'ru' && DEFAULT_RU_TEXT[key]) ||
      DEFAULT_EN_TEXT[key] ||
      key;

    return ctxGetText(key, fallback);
  };

  const completionLabel = React.useMemo(() => {
    switch (userLang) {
      case 'fr':
        return 'Processus terminé avec succès';
      case 'de':
        return 'Vorgang erfolgreich abgeschlossen';
      case 'es':
        return 'Proceso completado con éxito';
      case 'it':
        return 'Processo completato con successo';
      case 'nl':
        return 'Proces succesvol voltooid';
      case 'ar':
        return 'تم إنجاز العملية بنجاح';
      case 'pt':
        return 'Processo concluído com sucesso';
      case 'tr':
        return 'Süreç başarıyla tamamlandı';
      case 'ru':
        return 'Процесс успешно завершён';
      case 'zh':
        return '流程成功完成';
      default:
        return 'Process successfully completed';
    }
  }, [userLang]);

  const destinationCountry = React.useMemo(() => {
    if (!formData.country) {
      return undefined;
    }

    return COUNTRIES.find((country) => country.code === formData.country)?.name;
  }, [formData.country]);

  const loadsCount = formData.loads?.length || 0;

  const modeKey =
    formData.mode === 'Unsure'
      ? 'unsureShipping'
      : formData.mode === 'Sea Freight'
        ? 'seaFreight'
        : formData.mode === 'Air Freight'
          ? 'airFreight'
          : formData.mode === 'Rail Freight'
            ? 'railFreight'
            : formData.mode === 'Express'
              ? 'express'
              : 'mode';

  const modeLabel = getText(modeKey);

  const timelineSteps = React.useMemo(
    () => [
      {
        id: 'step1',
        title: userLang === 'fr' ? 'Demande reçue' : getText('step1'),
        time: userLang === 'fr' ? 'Maintenant' : getText('step1Time'),
        status: 'done' as const,
      },
      {
        id: 'step2',
        title: userLang === 'fr' ? 'Analyse et cotation' : getText('step2'),
        time: userLang === 'fr' ? 'Sous 4h ouvrées' : getText('step2Time'),
        status: 'current' as const,
      },
      {
        id: 'step3',
        title: userLang === 'fr' ? 'Contact commercial' : getText('step3'),
        time: userLang === 'fr' ? 'Sous 24h' : getText('step3Time'),
        status: 'upcoming' as const,
      },
      {
        id: 'step4',
        title: userLang === 'fr' ? 'Devis détaillé' : getText('step4'),
        time: userLang === 'fr' ? 'Sous 48h' : getText('step4Time'),
        status: 'upcoming' as const,
      },
    ],
    [getText, userLang]
  );

  const expertise = React.useMemo(
    () => [
      getText('expertise1'),
      getText('expertise2'),
      getText('expertise3'),
      getText('expertise4'),
    ],
    [getText]
  );

  const impactMetrics = React.useMemo(
    () => [
      {
        icon: '📦',
        value: '55,000+',
        label: userLang === 'fr' ? 'Clients accompagnés' : getText('satisfiedCustomers'),
        caption:
          userLang === 'fr'
            ? 'Accompagnement d’importateurs chaque année'
            : getText('impactDescription'),
      },
      {
        icon: '⭐',
        value: '4.8/5',
        label: userLang === 'fr' ? 'Satisfaction client' : getText('customerSatisfaction'),
        caption:
          userLang === 'fr' ? 'Basé sur les retours clients certifiés' : getText('thankYouMessage'),
      },
      {
        icon: '👥',
        value: '400+',
        label: userLang === 'fr' ? "Membres de l'équipe" : getText('teamMembers'),
        caption:
          userLang === 'fr' ? 'Experts répartis entre Chine et Europe' : getText('globalNetwork'),
      },
      {
        icon: '🚢',
        value: '140,000+',
        label: userLang === 'fr' ? 'Volume maritime TEU' : getText('oceanVolume'),
        caption:
          userLang === 'fr'
            ? 'Capacité moyenne traitée annuellement'
            : getText('impactDescription'),
      },
      {
        icon: '🏢',
        value: '8',
        label: userLang === 'fr' ? 'Bureaux en Chine' : getText('officesInChina'),
        caption:
          userLang === 'fr'
            ? 'Implantations locales pour la proximité'
            : getText('networkDescription'),
      },
      {
        icon: '📦',
        value: '519,000+',
        label: userLang === 'fr' ? 'm² Installations CFS' : getText('cfsFacilities'),
        caption:
          userLang === 'fr' ? 'Capacité de stockage et préparation' : getText('impactDescription'),
      },
    ],
    [getText, userLang]
  );

  const websites = React.useMemo(
    () => [
      {
        href: 'https://sino-shipping.com',
        label: 'sino-shipping.com',
        description: 'Global freight forwarder',
      },
      { href: 'https://fschina.com', label: 'fschina.com', description: 'FS International (HK)' },
      {
        href: 'https://es.sino-shipping.com',
        label: 'es.sino-shipping.com',
        description: 'SINO Shipping (ES)',
      },
      {
        href: 'https://moreplusfsi.com',
        label: 'moreplusfsi.com',
        description: 'MorePlus (Sourcing)',
      },
      { href: 'https://eaanetwork.com', label: 'eaanetwork.com', description: 'EAA Network' },
      { href: 'https://can-qianhai.com', label: 'can-qianhai.com', description: 'CAN Alliance' },
      { href: 'https://mcc-qianhai.com', label: 'mcc-qianhai.com', description: 'Export to China' },
    ],
    []
  );

  const timelineStatusLabels = React.useMemo<Record<'done' | 'current' | 'upcoming', string>>(
    () => ({
      done: userLang === 'fr' ? 'Terminé' : 'Completed',
      current: userLang === 'fr' ? 'En cours' : 'In progress',
      upcoming: userLang === 'fr' ? 'À venir' : 'Upcoming',
    }),
    [userLang]
  );

  const supportAvailabilityLabel = React.useMemo(
    () =>
      userLang === 'fr'
        ? 'Disponible : 9h-18h (heure de Chine)'
        : `${getText('available')}: ${getText('businessHours')}`,
    [getText, userLang]
  );

  const viewServicesLabel = React.useMemo(
    () => (userLang === 'fr' ? 'Découvrir nos services' : getText('viewServices')),
    [getText, userLang]
  );

  const handleCopyReference = React.useCallback(() => {
    if (!submissionId) {
      return;
    }

    try {
      navigator.clipboard?.writeText(submissionId);
      showToast(userLang === 'fr' ? 'Référence copiée' : 'Reference copied');
    } catch {
      showToast(
        userLang === 'fr' ? 'Impossible de copier la référence' : 'Unable to copy reference'
      );
    }
  }, [submissionId, showToast, userLang]);

  const handleResetForm = React.useCallback(() => {
    const resetMessage =
      userLang === 'fr'
        ? 'Nouveau formulaire prêt !'
        : userLang === 'es'
          ? '¡Nuevo formulario listo!'
          : userLang === 'de'
            ? 'Neues Formular bereit!'
            : userLang === 'it'
              ? 'Nuovo modulo pronto!'
              : userLang === 'nl'
                ? 'Nieuw formulier klaar!'
                : userLang === 'zh'
                  ? '新表单已准备!'
                  : userLang === 'ar'
                    ? 'استمارة جديدة جاهزة!'
                    : userLang === 'pt'
                      ? 'Novo formulário pronto!'
                      : userLang === 'tr'
                        ? 'Yeni form hazır!'
                        : userLang === 'ru'
                          ? 'Новая форма готова!'
                          : 'New form ready!';

    try {
      setFormData({
        country: '',
        origin: '',
        mode: '',
        email: '',
        phone: '',
        phoneCountryCode: '+234',
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
      });

      setFieldValid({
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
      });

      setCurrentStep(1);
      setSubmissionId('');
      showToast(resetMessage);
    } catch {
      showToast('Error resetting form');
    }
  }, [setCurrentStep, setFieldValid, setFormData, setSubmissionId, showToast, userLang]);

  const heroHighlights = React.useMemo(
    () =>
      userLang === 'fr'
        ? ['Réponse sous 24h', 'Experts logistiques dédiés', 'Réseau mondial certifié']
        : ['Reply within 24h', 'Dedicated logistics expert', 'Global network coverage'],
    [userLang]
  );

  const heroVisualSteps = React.useMemo(
    () =>
      userLang === 'fr'
        ? [
            { icon: '⏱️', label: 'Analyse & cotation en cours' },
            { icon: '🤝', label: 'Un expert vous contacte au plus vite' },
            { icon: '🧾', label: 'Réception de votre devis détaillé' },
          ]
        : [
            { icon: '⏱️', label: 'Review & pricing underway' },
            { icon: '🤝', label: 'A dedicated expert will reach out shortly' },
            { icon: '🧾', label: 'Receive your detailed quotation' },
          ],
    [userLang]
  );

  const heroMetrics = React.useMemo(
    () => [
      {
        icon: '📈',
        value: '55K+',
        label: userLang === 'fr' ? 'Clients accompagnés' : getText('satisfiedCustomers'),
        description:
          userLang === 'fr'
            ? 'Importateurs accompagnés chaque année'
            : getText('impactDescription'),
        accent: '#2563eb',
        accentSoft: 'rgba(37, 99, 235, 0.14)',
        accentStrong: '#1d4ed8',
      },
      {
        icon: '⭐',
        value: '4.8/5',
        label: userLang === 'fr' ? 'Note de satisfaction' : getText('customerSatisfaction'),
        description:
          userLang === 'fr' ? 'Basé sur les retours clients vérifiés' : getText('thankYouMessage'),
        accent: '#f97316',
        accentSoft: 'rgba(249, 115, 22, 0.18)',
        accentStrong: '#ea580c',
      },
      {
        icon: '🚢',
        value: '140K+',
        label: userLang === 'fr' ? 'TEU gérés/an' : getText('oceanVolume'),
        description:
          userLang === 'fr' ? 'Capacité logistique globale annuelle' : getText('globalNetwork'),
        accent: '#0ea5e9',
        accentSoft: 'rgba(14, 165, 233, 0.18)',
        accentStrong: '#0284c7',
      },
    ],
    [getText, userLang]
  );

  const companyIntro = React.useMemo(
    () => [
      {
        title: '🇫🇷 SINO Shipping (2018)',
        description:
          userLang === 'fr'
            ? "SINO Shipping, lancée en 2018 par des entrepreneurs français, est devenue une marque de FS International en 2021. Ce partenariat combine l'approche occidentale centrée client avec une expertise locale chinoise approfondie."
            : getText('sinoDescription'),
      },
      {
        title: '🇭🇰 FS International (1989)',
        description:
          userLang === 'fr'
            ? "FS International, fondée à Hong Kong en septembre 1989, est l'un des noms les plus fiables en logistique et transport global dans sa région."
            : getText('fsDescription'),
      },
    ],
    [getText, userLang]
  );

  return (
    <FormStep
      isVisible={currentStep === 7}
      stepNumber={7}
      title={userLang === 'fr' ? 'Demande de Devis Confirmée' : getText('confirmationTitle')}
      emoji="✅"
      hideStepNumber
      hideHeader
    >
      <div className="confirmation-layout">
        <section className="confirmation-hero">
          <div className="confirmation-hero__content">
            <div className="confirmation-hero__top">
              <p className="confirmation-hero__tag">✨ {completionLabel}</p>
              <div className="confirmation-lang">
                <CustomDropdown
                  value={userLang}
                  onChange={(value) => setUserLang(value as typeof userLang)}
                  options={LANGUAGE_OPTIONS}
                  compact
                />
              </div>
            </div>
            <h1 className="confirmation-hero__title">
              {userLang === 'fr' ? 'Merci pour votre confiance !' : getText('thankYouTitle')}
            </h1>
            <p className="confirmation-hero__subtitle">
              {userLang === 'fr'
                ? 'Votre demande a été soumise avec succès'
                : getText('confirmationSubtitle')}
            </p>
            <button type="button" className="confirmation-reference" onClick={handleCopyReference}>
              <span className="confirmation-reference__label">
                {userLang === 'fr' ? 'Numéro de référence' : getText('referenceNumber')}
              </span>
              <span className="confirmation-reference__value">{submissionId || '— — — —'}</span>
            </button>
            <div className="confirmation-hero__stats">
              <div className="hero-stat">
                <span className="hero-stat__value">4.8/5</span>
                <span className="hero-stat__label">
                  {userLang === 'fr' ? 'Note de satisfaction' : getText('customerSatisfaction')}
                </span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat__value">55K+</span>
                <span className="hero-stat__label">
                  {userLang === 'fr' ? 'Clients accompagnés' : getText('satisfiedCustomers')}
                </span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat__value">24h</span>
                <span className="hero-stat__label">
                  {userLang === 'fr' ? 'Premier retour sous 24h' : getText('step3Time')}
                </span>
              </div>
            </div>
            <div className="confirmation-hero__highlights">
              {heroHighlights.map((highlight) => (
                <span className="confirmation-highlight" key={highlight}>
                  {highlight}
                </span>
              ))}
            </div>
            <div className="confirmation-next">
              <p className="confirmation-next__title">
                {userLang === 'fr' ? 'La suite de votre demande' : 'What happens next'}
              </p>
              <ul className="confirmation-next__list">
                {heroVisualSteps.map((step) => (
                  <li key={step.label}>
                    <span className="confirmation-next__icon" aria-hidden>
                      {step.icon}
                    </span>
                    <div>
                      <p>{step.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="confirmation-body">
          <div className="confirmation-grid">
            <div className="confirmation-grid__column confirmation-grid__column--primary">
              <div className="confirmation-card confirmation-card--summary">
                <div className="confirmation-card__header">
                  <div className="confirmation-card__icon" aria-hidden>
                    📋
                  </div>
                  <h3 className="confirmation-card__title">
                    {userLang === 'fr' ? 'Récapitulatif' : getText('yourRequest')}
                  </h3>
                </div>
                <ul className="confirmation-list confirmation-summary">
                  <li>
                    <span className="summary-item__icon" aria-hidden>
                      📍
                    </span>
                    <div className="summary-item__content">
                      <span className="summary-item__label">
                        {userLang === 'fr' ? 'Trajet' : getText('fromTo')}
                      </span>
                      <p className="summary-item__value">
                        <strong>{formData.city || formData.origin || '—'}</strong>
                        <span aria-hidden> → </span>
                        <strong>
                          {formData.destCity || destinationCountry || formData.country || '—'}
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="summary-item__icon" aria-hidden>
                      🚛
                    </span>
                    <div className="summary-item__content">
                      <span className="summary-item__label">
                        {userLang === 'fr' ? 'Mode de transport' : getText('mode')}
                      </span>
                      <p className="summary-item__value">{modeLabel}</p>
                    </div>
                  </li>
                  <li>
                    <span className="summary-item__icon" aria-hidden>
                      📦
                    </span>
                    <div className="summary-item__content">
                      <span className="summary-item__label">
                        {userLang === 'fr' ? 'Expéditions' : getText('shipments')}
                      </span>
                      <p className="summary-item__value">
                        <strong>{loadsCount}</strong>{' '}
                        {loadsCount === 1
                          ? userLang === 'fr'
                            ? 'expédition'
                            : getText('shipment')
                          : userLang === 'fr'
                            ? 'expéditions'
                            : getText('shipments')}
                      </p>
                    </div>
                  </li>
                  {formData.goodsDescription && (
                    <li>
                      <span className="summary-item__icon" aria-hidden>
                        🧾
                      </span>
                      <div className="summary-item__content">
                        <span className="summary-item__label">
                          {userLang === 'fr' ? 'Marchandises' : 'Goods'}
                        </span>
                        <p className="summary-item__value">{formData.goodsDescription}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <section className="confirmation-section confirmation-section--timeline">
                <div className="confirmation-section__header">
                  <div className="confirmation-section__icon" aria-hidden>
                    ⏱️
                  </div>
                  <h3 className="confirmation-section__title">
                    {userLang === 'fr' ? 'Étapes à venir' : getText('nextSteps')}
                  </h3>
                </div>
                <div className="confirmation-timeline">
                  {timelineSteps.map((step, index) => {
                    const statusLabel =
                      timelineStatusLabels[step.status as 'done' | 'current' | 'upcoming'] ?? '';
                    const markerContent =
                      step.status === 'done' ? '✓' : String(index + 1).padStart(2, '0');

                    return (
                      <article
                        key={step.id}
                        className="confirmation-timeline__item"
                        data-status={step.status}
                      >
                        <div className="confirmation-timeline__progress" aria-hidden="true">
                          <span className="confirmation-timeline__marker" data-status={step.status}>
                            {markerContent}
                          </span>
                          {index < timelineSteps.length - 1 && (
                            <span className="confirmation-timeline__connector" />
                          )}
                        </div>
                        <div className="confirmation-timeline__content">
                          <div className="confirmation-timeline__header">
                            <span className="confirmation-timeline__step">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <h4>{step.title}</h4>
                            <span
                              className="confirmation-timeline__badge"
                              data-status={step.status}
                            >
                              {statusLabel}
                            </span>
                          </div>
                          <p>{step.time}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section className="confirmation-section confirmation-section--hero-metrics">
                <div className="confirmation-section__header">
                  <div className="confirmation-section__icon" aria-hidden>
                    📊
                  </div>
                  <h3 className="confirmation-section__title">
                    {userLang === 'fr' ? 'Notre impact' : getText('impactInNumbers')}
                  </h3>
                </div>
                <div className="confirmation-mini-metrics">
                  {heroMetrics.map((metric) => (
                    <article
                      key={metric.label}
                      style={
                        {
                          '--metric-accent': metric.accent,
                          '--metric-accent-soft': metric.accentSoft,
                          '--metric-accent-strong': metric.accentStrong,
                        } as React.CSSProperties
                      }
                    >
                      <div className="mini-metric__icon" aria-hidden>
                        {metric.icon}
                      </div>
                      <div className="mini-metric__content">
                        <div className="mini-metric__value">{metric.value}</div>
                        <div className="mini-metric__label">{metric.label}</div>
                        <p className="mini-metric__description">{metric.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <div className="confirmation-grid__column confirmation-grid__column--side">
              <div className="confirmation-card confirmation-card--contact">
                <div className="confirmation-card__header">
                  <div className="confirmation-card__icon" aria-hidden>
                    👤
                  </div>
                  <h3 className="confirmation-card__title">
                    {userLang === 'fr' ? 'Coordonnées' : getText('contactDetails')}
                  </h3>
                </div>
                <ul className="confirmation-list">
                  <li>
                    <span aria-hidden>🧑‍💼</span>
                    <div>
                      <strong>
                        {formData.firstName} {formData.lastName}
                      </strong>
                    </div>
                  </li>
                  {formData.companyName && (
                    <li>
                      <span aria-hidden>🏢</span>
                      <div>{formData.companyName}</div>
                    </li>
                  )}
                  <li>
                    <span aria-hidden>📧</span>
                    <div>{formData.email}</div>
                  </li>
                  {formData.phone && (
                    <li>
                      <span aria-hidden>📱</span>
                      <div>
                        {formData.phoneCountryCode} {formData.phone}
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <div className="confirmation-card confirmation-card--actions">
                <div className="confirmation-card__header">
                  <div className="confirmation-card__icon" aria-hidden>
                    ⚡
                  </div>
                  <h3 className="confirmation-card__title">
                    {userLang === 'fr' ? 'Actions rapides' : getText('actions')}
                  </h3>
                </div>
                <div className="confirmation-actions">
                  <button
                    type="button"
                    className="confirmation-actions__button"
                    onClick={handleResetForm}
                  >
                    ➕ {userLang === 'fr' ? 'Faire une autre demande' : getText('newRequest')}
                  </button>
                  <a
                    className="confirmation-actions__link"
                    href="https://sino-shipping.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {viewServicesLabel}
                    <span aria-hidden className="confirmation-actions__link-icon">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              <section className="confirmation-section confirmation-section--support">
                <div className="confirmation-section__header">
                  <div className="confirmation-section__icon" aria-hidden>
                    🤝
                  </div>
                  <h3 className="confirmation-section__title">
                    {userLang === 'fr' ? 'Support' : getText('needHelp')}
                  </h3>
                </div>
                <div className="confirmation-support">
                  <div className="confirmation-support__status">
                    <span className="support-status-dot" aria-hidden="true" />
                    {supportAvailabilityLabel}
                  </div>
                  <div className="confirmation-support__channels">
                    <a
                      className="support-chip support-chip--whatsapp"
                      href="https://chat.whatsapp.com/EcOPbD18vFxHTVjECQVsRE"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span aria-hidden>👥</span>
                      <span>
                        {userLang === 'fr' ? 'Communauté WhatsApp' : getText('community')}
                      </span>
                      <span className="support-chip__cta" aria-hidden>
                        ↗
                      </span>
                    </a>
                    <a className="support-chip" href="mailto:info@sino-shipping.com">
                      <span aria-hidden>📧</span>
                      <span>info@sino-shipping.com</span>
                      <span className="support-chip__cta" aria-hidden>
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              <section className="confirmation-section confirmation-section--links">
                <div className="confirmation-section__header">
                  <div className="confirmation-section__icon" aria-hidden>
                    🌐
                  </div>
                  <h3 className="confirmation-section__title">
                    {userLang === 'fr' ? 'Nos sites' : getText('websites')}
                  </h3>
                </div>
                <ul className="confirmation-links">
                  {websites.map((site) => (
                    <li key={site.href}>
                      <a href={site.href} target="_blank" rel="noreferrer">
                        <span>{site.label}</span>
                        <span className="confirmation-links__icon" aria-hidden>
                          ↗
                        </span>
                      </a>
                      <p>{site.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="confirmation-section confirmation-section--company confirmation-grid__full">
              <div className="confirmation-section__header">
                <div className="confirmation-section__icon" aria-hidden>
                  🚢
                </div>
                <h3 className="confirmation-section__title">
                  {userLang === 'fr' ? 'SINO & FS' : getText('aboutSino')}
                </h3>
              </div>
              <div className="confirmation-company">
                <p className="confirmation-company__subtitle">
                  {userLang === 'fr'
                    ? 'Votre demande est entre de bonnes mains'
                    : getText('aboutSubtitle')}
                </p>
                <div className="confirmation-company__intro">
                  {companyIntro.map((item) => (
                    <article key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
                <div className="confirmation-company__expertise">
                  <h4>{getText('ourExpertise')}</h4>
                  <ul>
                    {expertise.map((item, index) => (
                      <li key={item}>
                        <span>0{index + 1}</span>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="confirmation-company__metrics">
                  {impactMetrics.map((metric) => (
                    <article key={metric.label}>
                      <div className="company-metric__icon" aria-hidden>
                        {metric.icon}
                      </div>
                      <div className="company-metric__content">
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                        <p>{metric.caption}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="confirmation-company__network">
                  <h4>🌍 {userLang === 'fr' ? 'Réseau mondial' : getText('globalNetwork')}</h4>
                  <ul>
                    <li>
                      <strong>
                        🇨🇳{' '}
                        {userLang === 'fr'
                          ? 'Chine : Shanghai, Shenzhen, Guangzhou, Ningbo, Tianjin, Qingdao, Xiamen'
                          : getText('chinaOffices')}
                      </strong>
                    </li>
                    <li>
                      <strong>
                        🇭🇰{' '}
                        {userLang === 'fr'
                          ? 'Hong Kong : 1er étage, Bloc C, Sea View Estate, 8 Watson Road, North Point'
                          : getText('hkOffice')}
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </FormStep>
  );
};

export default StepConfirmation;
