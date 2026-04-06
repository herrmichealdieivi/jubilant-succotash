
import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const telegramToken = '7934257268:AAHrsxFsNsAHsheArhYVxt-cLzbBSTIXcsI';
      const chatId = '6931799020';
      
      const message = `📬 رسالة جديدة من موقع Rizonway

👤 الاسم: ${formData.name}
📧 البريد الإلكتروني: ${formData.email}

💬 الرسالة:
${formData.message}`;

      const response = await fetch(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItems = [
    {
      icon: <MapPin className="w-4 h-4" />,
      label: language === 'en' ? 'Location' : 'الموقع',
      value: language === 'en' ? 'Remote-first, serving worldwide' : 'فريق عن بُعد، نخدم العالم',
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: language === 'en' ? 'Phone' : 'الهاتف',
      value: '+963 935 913 424',
      isLtr: true,
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: language === 'en' ? 'Email' : 'البريد',
      value: 'rizonway@outlook.com',
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      <div className="geo-line w-full absolute top-0" />
      <div className="absolute inset-0 bg-cross-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow-bottom pointer-events-none" />

      {/* Floating geometric accents */}
      <div className="hidden md:block absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full border border-foreground/[0.03] pointer-events-none" />
      <div className="hidden md:block absolute top-20 -right-24 w-[200px] h-[200px] rounded-full border border-foreground/[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12 scroll-reveal">
          <p className={`text-xs font-medium tracking-[0.2em] uppercase text-foreground/30 mb-3 md:mb-4 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
            {language === 'en' ? 'Contact' : 'تواصل'}
          </p>
          <h2 className={`text-2xl md:text-3xl lg:text-5xl rz-heading mb-4 md:mb-6 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
            {language === 'en' ? 'Get In Touch' : 'تواصل معنا'}
          </h2>
          <p className={`text-base md:text-lg text-foreground/40 max-w-2xl mx-auto rz-body ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
            {language === 'en'
              ? "Ready to transform your ideas into reality? Let's build something together."
              : 'مستعد لتحويل أفكارك إلى واقع؟ دعنا نبني شيئاً معاً.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3 scroll-reveal">
            <div className="rz-card p-6 md:p-8 lg:p-10">
              <h3 className={`text-base md:text-lg font-semibold text-foreground mb-6 md:mb-8 tracking-tight ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                {language === 'en' ? 'Send a message' : 'أرسل رسالة'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder={language === 'en' ? 'Name' : 'الاسم'}
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-transparent border border-foreground/10 rounded-sm text-foreground text-sm md:text-base placeholder-foreground/25 focus:outline-none focus:border-foreground/30 transition-colors duration-300 ${language === 'ar' ? 'text-right font-arabic' : 'font-grotesk'}`}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder={language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-transparent border border-foreground/10 rounded-sm text-foreground text-sm md:text-base placeholder-foreground/25 focus:outline-none focus:border-foreground/30 transition-colors duration-300 ${language === 'ar' ? 'text-right font-arabic' : 'font-grotesk'}`}
                  required
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder={language === 'en' ? 'Message' : 'الرسالة'}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-transparent border border-foreground/10 rounded-sm text-foreground text-sm md:text-base placeholder-foreground/25 focus:outline-none focus:border-foreground/30 transition-colors duration-300 resize-none ${language === 'ar' ? 'text-right font-arabic' : 'font-grotesk'}`}
                  required
                />

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-3 border border-foreground/10 rounded-sm">
                    <CheckCircle className="w-4 h-4 text-foreground/50" />
                    <p className={`text-sm text-foreground/50 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                      {language === 'ar' ? 'تم إرسال رسالتك بنجاح' : 'Message sent successfully'}
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-3 border border-foreground/10 rounded-sm">
                    <AlertCircle className="w-4 h-4 text-foreground/50" />
                    <p className={`text-sm text-foreground/50 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                      {language === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'Error. Please try again.'}
                    </p>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className={`w-full group ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      {language === 'en' ? 'Sending...' : 'جاري الإرسال...'}
                    </>
                  ) : (
                    <>
                      {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 scroll-reveal" style={{ transitionDelay: '100ms' }}>
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <div key={index} className="rz-card p-6">
                  <div className={`flex items-start gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <div className="p-2 border border-foreground/10 rounded-sm text-foreground/30 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className={language === 'ar' ? 'text-right' : ''}>
                      <p className={`text-xs font-medium text-foreground/30 mb-1 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                        {item.label}
                      </p>
                      <p className={`text-sm text-foreground/60 ${item.isLtr ? 'ltr-number' : ''} ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`} dir={item.isLtr ? 'ltr' : undefined}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <div className="rz-card p-6 text-center">
                <p className={`text-xs font-medium text-foreground/30 mb-4 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                  {language === 'en' ? 'Prefer a quick chat?' : 'تفضل محادثة سريعة؟'}
                </p>
                <Button 
                  variant="glass" 
                  size="default" 
                  className={`w-full group ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}
                  onClick={() => window.open('https://wa.me/963935913424', '_blank')}
                >
                  {language === 'en' ? 'WhatsApp' : 'واتساب'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
