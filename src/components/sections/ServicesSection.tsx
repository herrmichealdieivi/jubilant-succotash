import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Code, Bot, Cog, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Service {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export const ServicesSection: React.FC = () => {
  const { t, language } = useLanguage();
  useScrollAnimation();

  const services: Service[] = [
    {
      icon: <Code className="w-5 h-5" />,
      number: '01',
      title: language === 'en' ? 'Websites & Platforms' : 'مواقع ومنصات رقمية',
      description: language === 'en' 
        ? 'Custom-built websites and platforms that present your business clearly and convert visitors into customers.'
        : 'مواقع ومنصات مبنية خصيصاً تعرض عملك بوضوح وتحوّل الزوار إلى عملاء.',
      features: language === 'en'
        ? ['Structured listings & content', 'Smart search & filtering', 'Analytics dashboard', 'Mobile-first design']
        : ['عروض ومحتوى منظم', 'بحث وتصفية ذكية', 'لوحة تحليلات', 'تصميم يركز على الموبايل'],
    },
    {
      icon: <Cog className="w-5 h-5" />,
      number: '02',
      title: language === 'en' ? 'Automation Systems' : 'أنظمة الأتمتة',
      description: language === 'en'
        ? 'Eliminate repetitive tasks. Automate workflows, data processing, and customer communication.'
        : 'تخلّص من المهام المتكررة. أتمتة سير العمل ومعالجة البيانات وتواصل العملاء.',
      features: language === 'en'
        ? ['WhatsApp & email automation', 'Report generation', 'Inventory management', 'Process integration']
        : ['أتمتة واتساب وإيميل', 'توليد التقارير', 'إدارة المخزون', 'تكامل العمليات'],
    },
    {
      icon: <Bot className="w-5 h-5" />,
      number: '03',
      title: language === 'en' ? 'AI Virtual Assistants' : 'مساعدون افتراضيون بالذكاء الاصطناعي',
      description: language === 'en'
        ? 'Intelligent agents that handle customer support, sales, and operations around the clock.'
        : 'وكلاء أذكياء يتعاملون مع دعم العملاء والمبيعات والعمليات على مدار الساعة.',
      features: language === 'en'
        ? ['24/7 customer support', 'Lead qualification', 'Order processing', 'Data analysis']
        : ['دعم عملاء 24/7', 'تأهيل العملاء المحتملين', 'معالجة الطلبات', 'تحليل البيانات'],
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      number: '04',
      title: language === 'en' ? 'Mobile Applications' : 'تطبيقات الموبايل',
      description: language === 'en'
        ? 'Native and cross-platform mobile apps that put your business in your customers\' hands.'
        : 'تطبيقات موبايل أصلية ومتعددة المنصات تضع عملك في أيدي عملائك.',
      features: language === 'en'
        ? ['iOS & Android', 'Real-time updates', 'Push notifications', 'Offline support']
        : ['iOS و Android', 'تحديثات فورية', 'إشعارات فورية', 'دعم بدون إنترنت'],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 relative overflow-hidden">
      <div className="geo-line w-full absolute top-0" />
      <div className="absolute inset-0 bg-cross-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow-bottom pointer-events-none" />

      {/* Floating geometric accent — offset circle */}
      <div className="hidden md:block absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border border-foreground/[0.03] pointer-events-none" />
      <div className="hidden md:block absolute -bottom-32 -left-16 w-[200px] h-[200px] rounded-full border border-foreground/[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14 scroll-reveal">
          <p className={`text-xs font-medium tracking-[0.2em] uppercase text-foreground/30 mb-3 md:mb-4 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
            {language === 'en' ? 'What We Build' : 'ما نبنيه'}
          </p>
          <h2 className={`text-2xl md:text-3xl lg:text-5xl rz-heading mb-4 md:mb-6 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
            {t('servicesTitle')}
          </h2>
          <p className={`text-base md:text-lg text-foreground/40 max-w-2xl mx-auto rz-body ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div key={index} className="scroll-reveal rz-card p-6 md:p-8 lg:p-10 group relative overflow-hidden" style={{ transitionDelay: `${index * 80}ms` }}>
              
              {/* Card internal background layers */}
              <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse 80% 60% at 80% 0%, hsl(0 0% 100% / 0.03) 0%, transparent 60%)'
              }} />
              {/* Large faint number watermark */}
              <div className={`hidden md:block absolute -bottom-4 ${language === 'ar' ? '-left-2' : '-right-2'} text-[80px] md:text-[120px] font-bold leading-none text-foreground/[0.03] pointer-events-none font-grotesk select-none`}>
                {service.number}
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-6 md:mb-8 relative z-10">
                <div className="p-2.5 md:p-3.5 border border-foreground/10 rounded-sm text-foreground/40 group-hover:text-foreground/80 group-hover:border-foreground/25 transition-all duration-500 bg-background/30">
                  {service.icon}
                </div>
                <span className={`text-xs font-medium text-foreground/20 tracking-wider ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                  {service.number}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight relative z-10 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                {service.title}
              </h3>
              <p className={`text-sm md:text-base text-foreground/40 mb-6 md:mb-8 leading-relaxed relative z-10 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                {service.description}
              </p>

              {/* Features */}
              <div className="border-t border-foreground/8 pt-5 md:pt-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500 flex-shrink-0" />
                      <span className={`text-xs md:text-sm text-foreground/35 group-hover:text-foreground/50 transition-colors duration-500 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};