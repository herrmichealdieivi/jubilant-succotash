
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageToggle';
import { AutomationCarousel, AIAgentsCarousel } from '@/components/HeroCarousel';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();
  useScrollAnimation();

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-[85vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 md:pt-16">

        {/* ── Layer 1: Large rotating geometry (outer) ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            className="w-[500px] h-[500px] md:w-[900px] md:h-[900px] lg:w-[1200px] lg:h-[1200px] opacity-[0.08] md:opacity-[0.12] animate-spin-slow"
            viewBox="0 0 400 400" fill="none"
          >
            <circle cx="200" cy="200" r="195" stroke="white" strokeWidth="0.6" strokeDasharray="4 8" />
            <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" />
            <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="0.6" />
            <circle cx="200" cy="200" r="90" stroke="white" strokeWidth="0.4" strokeDasharray="2 6" />
            <polygon points="200,50 350,290 50,290" stroke="white" strokeWidth="1.2" fill="none" />
            <polygon points="200,350 50,110 350,110" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />
          </svg>
        </div>

        {/* ── Layer 2: Counter-rotating inner geometry ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] opacity-[0.05] md:opacity-[0.08]"
            style={{ animation: 'spin-slow 90s linear infinite reverse' }}
            viewBox="0 0 400 400" fill="none"
          >
            <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="0.6" strokeDasharray="1 4" />
            <polygon points="200,80 310,260 90,260" stroke="white" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        {/* ── Layer 3: Radial glow from center ── */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 45%, hsl(0 0% 100% / 0.06) 0%, transparent 70%)'
        }} />

        {/* ── Layer 4: Soft top vignette ── */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 0%, hsl(0 0% 100% / 0.03) 0%, transparent 60%)'
        }} />

        {/* ── Layer 5: Dot grid pattern ── */}
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-40 md:opacity-60" />

        {/* ── Layer 6: Scattered floating dots ── */}
        <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-white/10 animate-float pointer-events-none" />
        <div className="absolute top-[25%] right-[15%] w-1 h-1 rounded-full bg-white/[0.07] animate-float pointer-events-none" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-1 h-1 rounded-full bg-white/[0.08] animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] right-[8%] w-1.5 h-1.5 rounded-full bg-white/[0.06] animate-float pointer-events-none" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[40%] left-[5%] w-2 h-2 rounded-full bg-white/[0.04] animate-float pointer-events-none" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-[20%] right-[25%] w-1 h-1 rounded-full bg-white/[0.09] animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

        {/* ── Layer 7: Horizontal accent lines ── */}
        <div className="absolute top-[20%] left-0 w-full h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.04) 30%, hsl(0 0% 100% / 0.04) 70%, transparent 100%)' }} />
        <div className="absolute bottom-[25%] left-0 w-full h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.03) 20%, hsl(0 0% 100% / 0.03) 80%, transparent 100%)' }} />

        {/* ── Layer 8: Gradient fade edges ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />

        {/* ═══ HERO CONTENT ═══ */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
          <div className="scroll-reveal">

            {/* Logo mark with glow ring */}
            <div className="flex items-center justify-center mb-8 md:mb-10">
              <div className="relative">
                {/* Pulse ring behind logo */}
                <div className="absolute -inset-2 md:-inset-3 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border border-white/10 animate-pulse-ring" />
                <div className="absolute -inset-2 md:-inset-3 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border border-white/5 animate-pulse-ring" style={{ animationDelay: '1.2s' }} />
                {/* Soft glow */}
                <div className="absolute -inset-4 md:-inset-6 rounded-full bg-white/[0.04] blur-2xl" />
                <img 
                  src="/rizonway.png" 
                  alt="Rizonway Logo" 
                  className="w-[64px] h-[64px] md:w-[96px] md:h-[96px] relative z-10"
                />
              </div>
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl rz-heading mb-6 md:mb-8 px-4 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
              {t('heroTitle')}
            </h1>

            <p className={`text-base md:text-lg lg:text-xl text-foreground/50 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed rz-body px-4 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
              <Button 
                variant="hero" 
                size="lg"
                className={`group w-full sm:w-auto ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
                onClick={() => window.open('https://wa.me/963935913424', '_blank')}
              >
                {t('heroButton')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                className={`w-full sm:w-auto ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
                onClick={() => scrollToSection('about')}
              >
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator — more visible */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3">
          <span className={`text-[10px] tracking-[0.25em] uppercase text-foreground/25 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
            {language === 'en' ? 'Scroll' : 'مرر'}
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-foreground/30 to-transparent" />
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <ServicesSection />

      {/* ═══ AUTOMATION CAROUSEL ═══ */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="geo-line w-full absolute top-0" />
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        
        {/* Header stays centered in container */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-12 scroll-reveal">
            <p className={`text-xs font-medium tracking-[0.2em] uppercase text-foreground/30 mb-3 md:mb-4 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en' ? 'What You Get' : 'ما ستحصل عليه'}
            </p>
            <h2 className={`text-2xl md:text-3xl lg:text-5xl rz-heading mb-4 md:mb-6 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
              {t('automationExcellence')}
            </h2>
            <p className={`text-base md:text-lg text-foreground/40 max-w-2xl mx-auto rz-body ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
              {t('systemBenefitsDesc')}
            </p>
          </div>
        </div>
        {/* Carousel goes full-width, edge to edge */}
        <div className="relative z-10 scroll-reveal">
          <AutomationCarousel />
        </div>
      </section>

      {/* ═══ AI AGENTS CAROUSEL ═══ */}
      <section className="py-12 md:py-20 relative overflow-hidden bg-card/50">
        <div className="geo-line w-full absolute top-0" />
        <div className="absolute inset-0 bg-cross-grid pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow-top pointer-events-none" />
        
        {/* Header stays centered in container */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-12 scroll-reveal">
            <p className={`text-xs font-medium tracking-[0.2em] uppercase text-foreground/30 mb-3 md:mb-4 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en' ? 'Platform Features' : 'مميزات المنصة'}
            </p>
            <h2 className={`text-2xl md:text-3xl lg:text-5xl rz-heading mb-4 md:mb-6 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
              {t('intelligentAgents')}
            </h2>
            <p className={`text-base md:text-lg text-foreground/40 max-w-2xl mx-auto rz-body ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
              {t('intelligentAgentsDesc')}
            </p>
          </div>
        </div>
        {/* Carousel goes full-width, edge to edge */}
        <div className="relative z-10 scroll-reveal">
          <AIAgentsCarousel />
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <AboutSection />

      {/* ═══ PORTFOLIO ═══ */}
      <PortfolioSection />

      {/* ═══ BLOG ═══ */}
      <BlogSection />

      {/* ═══ CONTACT ═══ */}
      <ContactSection />

      {/* ═══ CTA ═══ */}
      <section className="py-16 md:py-24 relative overflow-hidden corner-accent">
        <div className="geo-line w-full absolute top-0" />
        <div className="absolute inset-0 bg-diagonal-lines pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        
        {/* Geometric BG */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <svg className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-[0.03]" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.5" />
            <polygon points="200,60 340,280 60,280" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="scroll-reveal max-w-3xl mx-auto">
            <p className={`text-xs font-medium tracking-[0.2em] uppercase text-foreground/30 mb-4 md:mb-6 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
              {language === 'en' ? 'Start Now' : 'ابدأ الآن'}
            </p>
            <h2 className={`text-2xl md:text-3xl lg:text-5xl rz-heading mb-4 md:mb-6 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
              {t('readyToTransform')}
            </h2>
            <p className={`text-base md:text-lg text-foreground/40 mb-8 md:mb-10 rz-body ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
              {t('readyToTransformDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                className={`group w-full sm:w-auto ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
                onClick={() => scrollToSection('contact')}
              >
                {t('startProject')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                className={`w-full sm:w-auto ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
                onClick={() => window.open('https://wa.me/963935913424', '_blank')}
              >
                {t('scheduleConsultation')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
};

export default Index;
