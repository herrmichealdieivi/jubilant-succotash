
import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Clock } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="portfolio" className="py-12 md:py-20 relative overflow-hidden corner-accent">
      <div className="geo-line w-full absolute top-0" />
      <div className="absolute inset-0 bg-diagonal-lines pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      {/* Floating geometric accents */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-32 w-[400px] h-[400px] rounded-full border border-foreground/[0.03] pointer-events-none" />
      <div className="hidden md:block absolute top-1/4 -left-20 w-[160px] h-[160px] rounded-full border border-foreground/[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12 scroll-reveal">
          <p className={`text-xs font-medium tracking-[0.2em] uppercase text-foreground/30 mb-3 md:mb-4 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
            {language === 'en' ? 'Our Work' : 'أعمالنا'}
          </p>
          <h2 className={`text-2xl md:text-3xl lg:text-5xl rz-heading mb-4 md:mb-6 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
            {language === 'en' ? 'Portfolio' : 'أعمالنا'}
          </h2>
          <p className={`text-base md:text-lg text-foreground/40 max-w-2xl mx-auto rz-body ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
            {language === 'en'
              ? 'Projects showcasing our expertise in custom development, AI integration, and intelligent automation'
              : 'مشاريع تعرض خبرتنا في التطوير المخصص وتكامل الذكاء الاصطناعي والأتمتة الذكية'}
          </p>
        </div>

        <div className="scroll-reveal">
          <div className="rz-card p-8 md:p-10 lg:p-12 max-w-2xl mx-auto text-center">
            <div className="p-2.5 md:p-3 border border-foreground/10 rounded-sm w-fit mx-auto mb-6 md:mb-8 text-foreground/30">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className={`text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en' ? 'Coming Soon' : 'قريباً'}
            </h3>
            <p className={`text-sm md:text-base text-foreground/35 leading-relaxed ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en'
                ? 'Our portfolio is currently under development. Exciting projects will be revealed soon.'
                : 'قيد التطوير حالياً. سيتم الكشف قريباً عن مشاريع مثيرة.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
