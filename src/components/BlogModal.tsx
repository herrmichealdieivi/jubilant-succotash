import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose, title, content }) => {
  const { language } = useLanguage();
  if (!isOpen) return null;

  const processContent = (text: string) => {
    const lines = text.trim().split('\n');
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ') && (trimmedLine.includes('الموقع الإلكتروني') || 
                                           trimmedLine.includes('الأتمتة') || 
                                           trimmedLine.includes('الذكاء الاصطناعي'))) {
        return null;
      }
      
      if (trimmedLine.startsWith('## ')) {
        return (
          <h3 key={index} className={`text-xl font-semibold text-foreground mt-8 mb-4 tracking-tight ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
            {trimmedLine.replace('## ', '')}
          </h3>
        );
      } else if (trimmedLine === '') {
        return <div key={index} className="mb-3" />;
      } else {
        let processedLine = trimmedLine;
        processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-foreground">$1</strong>');
        
        return (
          <p key={index} className={`text-foreground/50 leading-relaxed mb-3 text-[15px] ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`} dangerouslySetInnerHTML={{ __html: processedLine }} />
        );
      }
    }).filter(Boolean);
  };

  const getCtaLabel = () => {
    if (title.includes('الموقع الإلكتروني') || title.includes('Website')) {
      return language === 'en' ? 'Get Your Website' : 'اطلب موقعك';
    }
    if (title.includes('الأتمتة') || title.includes('Automation')) {
      return language === 'en' ? 'Get Automation' : 'اطلب الأتمتة';
    }
    if (title.includes('الذكاء الاصطناعي') || title.includes('AI')) {
      return language === 'en' ? 'Get AI Agent' : 'اطلب وكيل الذكاء الاصطناعي';
    }
    return language === 'en' ? 'Contact Us' : 'تواصل معنا';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-card border border-foreground/10 rounded-lg p-8 md:p-12 w-[95%] max-w-3xl mx-4 max-h-[85vh] overflow-y-auto animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-foreground/30 hover:text-foreground/60 transition-colors z-10"
        >
          <X size={18} />
        </button>
        
        <div className="mb-8">
          <p className={`text-xs font-medium tracking-[0.2em] uppercase text-foreground/25 mb-4 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
            {language === 'en' ? 'Article' : 'مقال'}
          </p>
          <h2 className={`text-2xl md:text-3xl rz-heading ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>{title}</h2>
        </div>
        
        <div className="border-t border-foreground/8 pt-8">
          {processContent(content)}
        </div>
        
        <div className="mt-10 pt-8 border-t border-foreground/8">
          <Button 
            onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="hero"
            size="lg"
            className={`w-full group ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
          >
            {getCtaLabel()}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  );
};