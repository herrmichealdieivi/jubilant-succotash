import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

// Language context
interface LanguageContextType {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    portfolio: 'Portfolio',
    blog: 'Blog',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Turn your business data into smarter decisions and faster results',
    heroSubtitle: 'We build digital systems that help businesses managing listings, offers, and daily customer interactions operate more efficiently and convert online traffic into real opportunities.',
    heroButton: 'Schedule a Free Consultation',
    
    // Services
    servicesTitle: 'What We Do',
    servicesSubtitle: 'We design platforms that organize your business information in one place and turn it into a clear experience for your customers and a smart decision tool for you',
    whatWeDoPoint1: 'Showcase what you offer clearly',
    whatWeDoPoint2: 'Reduce communication friction',
    whatWeDoPoint3: 'Understand real market demand instead of guessing',
    customDevelopment: 'Websites & Mobile Apps',
    aiAgents: 'AI Virtual Assistants',
    automation: 'Automation Systems',
    customProjects: 'Custom Projects',
    
    // How the System Helps
    howSystemHelpsTitle: 'How the System Helps You',
    presentInfoTitle: 'Present your offers in a way customers instantly understand',
    presentInfoDesc: 'Every listing appears with structured details so visitors can make faster decisions',
    smartSearchTitle: 'Smart search that understands intent',
    smartSearchDesc: 'Visitors can describe what they need and instantly get the closest matches',
    seamlessTransitionTitle: 'Seamless transition from interest to contact',
    seamlessTransitionDesc: 'With one click, customers reach you directly with pre-filled context, saving time on both sides',
    
    // Smart Dashboard
    smartDashboardTitle: 'Smart Management Dashboard',
    smartDashboardDesc: 'The platform doesn\'t just serve your customers — it gives you visibility',
    dashboardInsight1: 'What people search for the most',
    dashboardInsight2: 'When interest in your listings spikes',
    dashboardInsight3: 'Which categories attract stronger demand',
    dashboardResult: 'This allows you to plan, price, and grow based on real data',
    
    // Why This Matters
    whyMattersTitle: 'Why This Matters',
    whyMattersDesc: 'Businesses built around presenting options to customers need more than a static website',
    whyMattersPoint1: 'Organizes their data',
    whyMattersPoint2: 'Guides customers to decisions',
    whyMattersPoint3: 'Reveals market patterns',
    whyMattersConclusion: 'That\'s where we come in',

    
    // Platform Features
    platformFeaturesTitle: 'Platform Features',
    structuredListings: 'Structured Listings',
    structuredListingsDesc: 'Present services, products, or offers with complete details',
    intelligentSearch: 'Intelligent Search',
    intelligentSearchDesc: 'Help customers find exactly what they need quickly',
    directContact: 'Direct Contact Flow',
    directContactDesc: 'Convert interest into conversations with context',
    demandAnalytics: 'Demand Analytics',
    demandAnalyticsDesc: 'Understand what your market wants in real-time',
    
    // Service descriptions (legacy)
    customDevDesc: 'Give your business a strong online presence and attract more customers.',
    customProjectsDesc: 'Innovative digital solutions for unique challenges and visions.',
    
    // About
    aboutTitle: 'About Us',
    aboutDescription: 'At Rizonway, we believe technology should not just automate work — it should clarify it. We design systems that combine usability with intelligence, helping businesses see their operations clearly and grow with confidence.',
    
    // Company Values
    valuesTitle: 'Our Approach',
    valuesClarity: 'Clarity First',
    valuesClarityDesc: 'We organize complex information into simple, actionable systems',
    valuesDataDriven: 'Data-Driven Insights',
    valuesDataDrivenDesc: 'We turn customer behavior into business intelligence',
    valuesEfficiency: 'Efficiency by Design',
    valuesEfficiencyDesc: 'We reduce friction between browsing and decision-making',
    valuesGrowth: 'Growth-Focused',
    valuesGrowthDesc: 'We build platforms that scale with your business needs',

    // Contact
    contactTitle: 'Ready to Transform Your Data into Growth?',
    contactDescription: 'Let\'s discuss how a smart platform can help you organize your offerings, understand your market, and convert more visitors into customers.',
    
    // CTAs and buttons
    startWebsite: 'Build Your Platform',
    saveTime: 'Get Market Insights',
    getVirtualEmployee: 'Organize Your Listings',
    contactNow: 'Contact Us Now',
    learnMore: 'Learn More',
    startProject: 'Start Your Platform',
    scheduleConsultation: 'Schedule Consultation',
    
    // System Benefits
    systemBenefitsTitle: 'How Your Business Benefits',
    systemBenefitsDesc: 'Digital platforms designed to turn scattered information into organized opportunities',
    organizedData: 'Organized Information',
    organizedDataDesc: 'All your listings, services, or products in one structured, searchable system that customers can navigate easily',
    customerInsights: 'Customer Behavior Insights',
    customerInsightsDesc: 'See what people search for, when they engage, and which offerings attract the most interest',
    efficientCommunication: 'Efficient Communication',
    efficientCommunicationDesc: 'Reduce back-and-forth by giving customers complete information upfront and streamlined contact options',
    scalableGrowth: 'Scalable Growth',
    scalableGrowthDesc: 'Add new offerings, update details, and expand your reach without rebuilding from scratch',
    systemBenefitsResult: 'Businesses using structured platforms report faster customer decisions, clearer market understanding, and reduced time spent on repetitive inquiries',

    // Platform Capabilities
    platformCapabilitiesTitle: 'Platform Capabilities',
    platformCapabilitiesDesc: 'Built to handle the complexity of listing-based businesses with intelligence and simplicity',
    smartFiltering: 'Smart Filtering & Matching',
    smartFilteringDesc: 'Help customers find exactly what they need through intelligent search and category organization',
    realTimeUpdates: 'Real-Time Updates',
    realTimeUpdatesDesc: 'Keep your listings current and accurate without technical expertise or developer dependency',
    demandTracking: 'Demand Tracking',
    demandTrackingDesc: 'Monitor which offerings generate interest, when traffic peaks, and where opportunities exist',
    contextualContact: 'Contextual Contact',
    contextualContactDesc: 'When customers reach out, they bring the listing details with them, saving explanation time',
    multiChannel: 'Multi-Channel Integration',
    multiChannelDesc: 'Connect your platform with WhatsApp, email, and other channels for seamless communication',
    performanceReports: 'Performance Reports',
    performanceReportsDesc: 'Get clear visibility into what works, what doesn\'t, and where to focus your efforts',
    mobileOptimized: 'Mobile-First Design',
    mobileOptimizedDesc: 'Most customers browse on mobile devices, so every platform we build is optimized for that experience',
    customWorkflows: 'Custom Workflows',
    customWorkflowsDesc: 'Adapt the system to match your specific business processes and customer journey',
    platformCapabilitiesResult: 'Platforms built with these capabilities help businesses reduce decision friction, increase conversion rates, and gain competitive market intelligence',
    
    // Sections
    automationExcellence: 'System Benefits',
    intelligentAgents: 'Platform Capabilities',
    intelligentAgentsDesc: 'Comprehensive features designed to organize your business data and reveal market insights',
    readyToTransform: 'Ready to Get Started?',
    readyToTransformDesc: 'Let\'s build a platform that turns your business information into competitive advantage.',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    portfolio: 'أعمالنا',
    blog: 'المدونة',
    contact: 'تواصل معنا',
    
    // Hero Section
    heroTitle: 'حوّل بيانات عملك إلى قرارات أذكى ونتائج أسرع',
    heroSubtitle: 'نبني أنظمة رقمية تساعد الشركات التي تعتمد على العملاء والعروض والبيانات اليومية أن تعمل بكفاءة أعلى، وتحوّل زيارات الإنترنت إلى فرص حقيقية.',
    heroButton: 'احجز استشارة مجانية',
    
    // Services
    servicesTitle: 'ماذا نقدم',
    servicesSubtitle: 'نصمّم منصات رقمية تجمع معلومات عملك في مكان واحد، وتحوّلها إلى تجربة سهلة لعملائك وأداة تحليل ذكية لك',
    whatWeDoPoint1: 'عرض ما تقدمه بشكل واضح ومنظم',
    whatWeDoPoint2: 'تسهيل تواصل العملاء بدون فوضى الرسائل',
    whatWeDoPoint3: 'فهم ما يبحث عنه السوق فعلاً، لا تخمينه',
    
    // How the System Helps
    howSystemHelpsTitle: 'كيف يساعدك النظام فعلياً',
    presentInfoTitle: 'عرض معلوماتك بطريقة يفهمها العميل فوراً',
    presentInfoDesc: 'كل عرض أو خدمة أو منتج يظهر مع تفاصيله الكاملة، ليتمكن العميل من اتخاذ قرار بسرعة',
    smartSearchTitle: 'بحث ذكي يفهم ما يريده العميل',
    smartSearchDesc: 'بدل أن يتصفح الزائر عشرات الصفحات، يستطيع وصف ما يبحث عنه ليحصل على أقرب الخيارات فوراً',
    seamlessTransitionTitle: 'انتقال فوري من الاهتمام إلى التواصل',
    seamlessTransitionDesc: 'بضغطة واحدة ينتقل العميل للتواصل المباشر معك ومعه كل التفاصيل جاهزة، ما يختصر وقتك ووقته',
    
    // Smart Dashboard
    smartDashboardTitle: 'لوحة الإدارة الذكية',
    smartDashboardDesc: 'النظام لا يخدم العملاء فقط، بل يمنحك رؤية أوضح لعملك',
    dashboardInsight1: 'ما الذي يبحث عنه الناس أكثر؟',
    dashboardInsight2: 'متى يزداد الاهتمام بعروضك؟',
    dashboardInsight3: 'أي فئات تلقى طلباً أعلى؟',
    dashboardResult: 'هذه المعلومات تساعدك على التخطيط والتسعير واتخاذ قرارات مبنية على بيانات حقيقية',
    
    // Why This Matters
    whyMattersTitle: 'لماذا هذا مهم',
    whyMattersDesc: 'الأعمال التي تعتمد على عرض الخيارات للعملاء تحتاج أكثر من مجرد موقع تعريفي',
    whyMattersPoint1: 'تنظم معلوماتها',
    whyMattersPoint2: 'تسهّل وصول العملاء إليها',
    whyMattersPoint3: 'وتكشف اتجاهات السوق بوضوح',
    whyMattersConclusion: 'وهنا يأتي دورنا',

    
    // Platform Features
    platformFeaturesTitle: 'مميزات المنصة',
    structuredListings: 'عروض منظمة ومنسقة',
    structuredListingsDesc: 'عرض الخدمات أو المنتجات أو العروض مع تفاصيل كاملة',
    intelligentSearch: 'بحث ذكي',
    intelligentSearchDesc: 'مساعدة العملاء على إيجاد ما يحتاجونه بالضبط بسرعة',
    directContact: 'تواصل مباشر مع السياق',
    directContactDesc: 'تحويل الاهتمام إلى محادثات مع كل التفاصيل',
    demandAnalytics: 'تحليلات الطلب',
    demandAnalyticsDesc: 'فهم ما يريده السوق في الوقت الفعلي',
    
    // About
    aboutTitle: 'من نحن',
    aboutDescription: 'في Rizonway، نؤمن أن التقنية ليست مجرد أدوات، بل وسيلة لفهم العمل بشكل أعمق واتخاذ قرارات أذكى. نصمّم أنظمة تجمع بين البساطة في الاستخدام والقوة في التحليل، لتمنح الشركات وضوحاً في الرؤية وثقة في النمو.',
    
    // Company Values
    valuesTitle: 'منهجنا في العمل',
    valuesClarity: 'الوضوح أولاً',
    valuesClarityDesc: 'ننظم المعلومات المعقدة إلى أنظمة بسيطة وقابلة للتنفيذ',
    valuesDataDriven: 'رؤى مبنية على البيانات',
    valuesDataDrivenDesc: 'نحول سلوك العملاء إلى ذكاء أعمال',
    valuesEfficiency: 'الكفاءة بالتصميم',
    valuesEfficiencyDesc: 'نقلل الاحتكاك بين التصفح واتخاذ القرار',
    valuesGrowth: 'التركيز على النمو',
    valuesGrowthDesc: 'نبني منصات تنمو مع احتياجات عملك',
    
    // Contact
    contactTitle: 'جاهز تحوّل بياناتك إلى نمو؟',
    contactDescription: 'دعنا نناقش كيف يمكن لمنصة ذكية أن تساعدك على تنظيم عروضك، فهم سوقك، وتحويل المزيد من الزوار إلى عملاء.',
    
    // CTAs and buttons
    startWebsite: 'ابنِ منصتك',
    saveTime: 'احصل على رؤى السوق',
    getVirtualEmployee: 'نظّم عروضك',
    contactNow: 'تواصل معنا الآن',
    learnMore: 'اعرف المزيد',
    startProject: 'ابدأ منصتك',
    scheduleConsultation: 'احجز استشارة',
    
    // System Benefits
    systemBenefitsTitle: 'كيف يستفيد عملك',
    systemBenefitsDesc: 'منصات رقمية مصممة لتحويل المعلومات المبعثرة إلى فرص منظمة',
    organizedData: 'معلومات منظمة',
    organizedDataDesc: 'كل عروضك وخدماتك أو منتجاتك في نظام واحد منظم وقابل للبحث يمكن للعملاء التنقل فيه بسهولة',
    customerInsights: 'رؤى سلوك العملاء',
    customerInsightsDesc: 'شاهد ما يبحث عنه الناس، متى يتفاعلون، وأي العروض تجذب أكبر اهتمام',
    efficientCommunication: 'تواصل فعّال',
    efficientCommunicationDesc: 'قلل التبادل المتكرر للرسائل بإعطاء العملاء معلومات كاملة مقدمًا وخيارات تواصل مبسطة',
    scalableGrowth: 'نمو قابل للتوسع',
    scalableGrowthDesc: 'أضف عروضًا جديدة، حدّث التفاصيل، ووسّع نطاقك دون إعادة البناء من الصفر',
    systemBenefitsResult: 'الشركات التي تستخدم منصات منظمة تشهد قرارات عملاء أسرع، فهمًا أوضح للسوق، ووقتًا أقل في الاستفسارات المتكررة',
    
    // Platform Capabilities
    platformCapabilitiesTitle: 'قدرات المنصة',
    platformCapabilitiesDesc: 'مصممة للتعامل مع تعقيدات الأعمال القائمة على العروض بذكاء وبساطة',
    smartFiltering: 'تصفية ومطابقة ذكية',
    smartFilteringDesc: 'ساعد العملاء على إيجاد ما يحتاجونه بالضبط من خلال البحث الذكي وتنظيم الفئات',
    realTimeUpdates: 'تحديثات فورية',
    realTimeUpdatesDesc: 'حافظ على عروضك محدثة ودقيقة دون خبرة تقنية أو الاعتماد على مطور',
    demandTracking: 'تتبع الطلب',
    demandTrackingDesc: 'راقب أي العروض تولد اهتمامًا، متى تبلغ الزيارات ذروتها، وأين توجد الفرص',
    contextualContact: 'تواصل سياقي',
    contextualContactDesc: 'عندما يتواصل العملاء، يحضرون معهم تفاصيل العرض، مما يوفر وقت الشرح',
    multiChannel: 'تكامل متعدد القنوات',
    multiChannelDesc: 'اربط منصتك مع واتساب والبريد الإلكتروني وقنوات أخرى للتواصل السلس',
    performanceReports: 'تقارير الأداء',
    performanceReportsDesc: 'احصل على رؤية واضحة لما ينجح وما لا ينجح وأين تركز جهودك',
    mobileOptimized: 'تصميم يركز على الموبايل',
    mobileOptimizedDesc: 'معظم العملاء يتصفحون من الهواتف المحمولة، لذا كل منصة نبنيها محسّنة لتلك التجربة',
    customWorkflows: 'سير عمل مخصص',
    customWorkflowsDesc: 'كيّف النظام ليتناسب مع عمليات عملك المحددة ورحلة عميلك',
    platformCapabilitiesResult: 'المنصات المبنية بهذه القدرات تساعد الشركات على تقليل احتكاك القرار، زيادة معدلات التحويل، والحصول على ذكاء سوق تنافسي',
    
    // Sections
    automationExcellence: 'فوائد النظام',
    intelligentAgents: 'قدرات المنصة',
    intelligentAgentsDesc: 'ميزات شاملة مصممة لتنظيم بيانات عملك والكشف عن رؤى السوق',
    readyToTransform: 'جاهز للبدء؟',
    readyToTransformDesc: 'دعنا نبني منصة تحوّل معلومات عملك إلى ميزة تنافسية.',
  }
};

// Language Provider
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    
    // Update document direction and lang attribute
    const html = document.documentElement;
    if (newLanguage === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  // Set initial direction and language
  React.useEffect(() => {
    const html = document.documentElement;
    if (language === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Toggle Component
export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] font-medium text-foreground/50 hover:text-foreground transition-colors duration-300"
    >
      <Globe className="w-3.5 h-3.5" />
      <span className={language === 'en' ? 'font-arabic' : 'font-grotesk'}>
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
};