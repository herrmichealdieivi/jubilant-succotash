
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageToggle, useLanguage } from '@/components/LanguageToggle';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'services', id: 'services' },
    { key: 'about', id: 'about' },
    { key: 'portfolio', id: 'portfolio' },
    { key: 'blog', id: 'blog' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? 'rz-glass' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 group"
          >
            <img 
              src="/rizonway.png" 
              alt="Rizonway Logo" 
              className="w-8 h-8 transition-transform duration-500 group-hover:scale-105"
            />
            <span className="text-base font-semibold tracking-tight text-foreground">
              Rizonway
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className={`relative px-3 py-1.5 text-[13px] font-medium text-foreground/50 hover:text-foreground transition-colors duration-300 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
              >
                {t(key)}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <div className="w-px h-4 bg-foreground/15" />
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className={language === 'ar' ? 'font-arabic' : 'font-grotesk'}
            >
              {t('contact')}
            </Button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-foreground/10 py-6 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map(({ key, id }) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium text-foreground/50 hover:text-foreground py-2.5 px-2 transition-colors duration-300 ${language === 'ar' ? 'text-right font-arabic' : 'text-left font-grotesk'}`}
                >
                  {t(key)}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-foreground/10">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className={`w-full ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
                  onClick={() => scrollToSection('contact')}
                >
                  {t('contact')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
