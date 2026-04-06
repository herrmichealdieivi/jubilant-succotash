
import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Target, Lightbulb, Zap, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: <Target className="w-5 h-5" />,
      number: '01',
      title: language === 'en' ? 'Clarity First' : 'الوضوح أولاً',
      description: language === 'en' 
        ? 'We organize complex information into simple, actionable systems'
        : 'ننظم المعلومات المعقدة إلى أنظمة بسيطة وقابلة للتنفيذ'
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      number: '02',
      title: language === 'en' ? 'Data-Driven' : 'مبنية على البيانات',
      description: language === 'en'
        ? 'We turn customer behavior into business intelligence'
        : 'نحول سلوك العملاء إلى ذكاء أعمال'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      number: '03',
      title: language === 'en' ? 'Efficiency by Design' : 'الكفاءة بالتصميم',
      description: language === 'en'
        ? 'We reduce friction between browsing and decision-making'
        : 'نقلل الاحتكاك بين التصفح واتخاذ القرار'
    },
    {
      icon: <Users className="w-5 h-5" />,
      number: '04',
      title: language === 'en' ? 'Growth-Focused' : 'التركيز على النمو',
      description: language === 'en'
        ? 'We build platforms that scale with your business needs'
        : 'نبني منصات تنمو مع احتياجات عملك'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden rz-light-section corner-accent-light">
      {/* Geometric decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-[700px] h-[700px] opacity-[0.03]" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="black" strokeWidth="0.5" />
          <polygon points="200,60 340,280 60,280" stroke="black" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-dot-grid-light pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow-light pointer-events-none" />

      {/* Floating accent circles */}
      <div className="hidden md:block absolute -top-16 -left-16 w-[250px] h-[250px] rounded-full border border-black/[0.04] pointer-events-none" />
      <div className="hidden md:block absolute -bottom-24 -right-24 w-[350px] h-[350px] rounded-full border border-black/[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 scroll-reveal">
          <p className={`text-xs font-medium tracking-[0.2em] uppercase mb-3 md:mb-4 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`} style={{ color: 'hsl(var(--foreground-light) / 0.35)' }}>
            {language === 'en' ? 'Who We Are' : 'من نحن'}
          </p>
          <h2 className={`text-2xl md:text-3xl lg:text-5xl rz-heading-light mb-5 md:mb-8 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
            {t('aboutTitle')}
          </h2>
          <p className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`} style={{ color: 'hsl(var(--foreground-light) / 0.5)' }}>
            {t('aboutDescription')}
          </p>
        </div>

        {/* Divider */}
        <div className="geo-line-light w-full mb-8 md:mb-12 scroll-reveal" />

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="rz-card-light p-6 md:p-8 scroll-scale group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-5 md:mb-6">
                <div className="p-2.5 border rounded-sm transition-colors duration-500" style={{ 
                  borderColor: 'hsl(var(--foreground-light) / 0.1)',
                  color: 'hsl(var(--foreground-light) / 0.4)'
                }}>
                  {value.icon}
                </div>
                <span className="text-[11px] font-medium tracking-wider font-grotesk" style={{ color: 'hsl(var(--foreground-light) / 0.15)' }}>
                  {value.number}
                </span>
              </div>
              <h3 className={`text-base md:text-lg font-semibold mb-2.5 md:mb-3 tracking-tight ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`} style={{ color: 'hsl(var(--foreground-light))' }}>
                {value.title}
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`} style={{ color: 'hsl(var(--foreground-light) / 0.45)' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-12 md:mt-20 scroll-reveal">
          <div className="border rounded-lg p-6 md:p-10 lg:p-14 max-w-4xl mx-auto text-center" style={{ 
            borderColor: 'hsl(var(--foreground-light) / 0.1)',
            background: 'hsl(var(--background-light) / 0.5)'
          }}>
            <p className={`text-xs font-medium tracking-[0.2em] uppercase mb-4 md:mb-6 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`} style={{ color: 'hsl(var(--foreground-light) / 0.3)' }}>
              {language === 'en' ? 'Our Philosophy' : 'فلسفتنا'}
            </p>
            <p className={`text-base md:text-lg lg:text-xl leading-relaxed ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`} style={{ color: 'hsl(var(--foreground-light) / 0.6)' }}>
              {language === 'en'
                ? 'Technology should amplify human potential, not replace it. Every system we design is guided by the principle that true innovation lies at the intersection of human creativity and intelligent automation.'
                : 'التكنولوجيا يجب أن تضخم الإمكانات البشرية، وليس أن تحل محلها. كل نظام نصممه يسترشد بمبدأ أن الابتكار الحقيقي يكمن في تقاطع الإبداع البشري والأتمتة الذكية.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
