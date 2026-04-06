import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { key: 'hero', label: language === 'en' ? 'Home' : 'الرئيسية' },
    { key: 'services', label: language === 'en' ? 'Services' : 'الخدمات' },
    { key: 'about', label: language === 'en' ? 'About' : 'من نحن' },
    { key: 'portfolio', label: language === 'en' ? 'Portfolio' : 'أعمالنا' },
    { key: 'blog', label: language === 'en' ? 'Blog' : 'المدونة' },
    { key: 'contact', label: language === 'en' ? 'Contact' : 'تواصل' },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="geo-line w-full" />
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12 relative z-10">
        {/* Top: Logo + Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mb-10 md:mb-12">
          <div className="flex items-center gap-2.5">
            <img src="/rizonway.png" alt="Rizonway" className="w-6 h-6 md:w-7 md:h-7" />
            <span className="text-sm font-semibold tracking-tight text-foreground font-grotesk">Rizonway</span>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6">
            {links.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`text-[13px] text-foreground/35 hover:text-foreground/60 transition-colors duration-300 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact row */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-12 mb-10 md:mb-12">
          <div>
            <p className={`text-[11px] font-medium text-foreground/20 tracking-wider uppercase mb-1 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en' ? 'Email' : 'البريد'}
            </p>
            <p className="text-sm text-foreground/45 font-grotesk">rizonway@outlook.com</p>
          </div>
          <div>
            <p className={`text-[11px] font-medium text-foreground/20 tracking-wider uppercase mb-1 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en' ? 'Phone' : 'الهاتف'}
            </p>
            <p className="text-sm text-foreground/45 font-grotesk ltr-number" dir="ltr">+963 935 913 424</p>
          </div>
          <div>
            <p className={`text-[11px] font-medium text-foreground/20 tracking-wider uppercase mb-1 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en' ? 'Location' : 'الموقع'}
            </p>
            <p className={`text-sm text-foreground/45 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en' ? 'Remote — Worldwide' : 'عن بُعد — حول العالم'}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-foreground/8 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className={`text-xs text-foreground/20 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en'
                ? '© 2026 Rizonway. All rights reserved.'
                : '© 2026 ريزون واي. جميع الحقوق محفوظة.'}
            </p>
            <div className="flex gap-4 md:gap-6">
              <span className={`text-xs text-foreground/20 hover:text-foreground/40 transition-colors cursor-pointer ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                {language === 'en' ? 'Privacy' : 'الخصوصية'}
              </span>
              <span className={`text-xs text-foreground/20 hover:text-foreground/40 transition-colors cursor-pointer ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                {language === 'en' ? 'Terms' : 'الشروط'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};