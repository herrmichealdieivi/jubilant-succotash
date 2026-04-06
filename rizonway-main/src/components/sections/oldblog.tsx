
import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BlogSection: React.FC = () => {
  const { language } = useLanguage();

  const blogPosts = [
    {
      title: language === 'en' 
        ? 'The Future of AI in Business Automation' 
        : 'مستقبل الذكاء الاصطناعي في أتمتة الأعمال',
      excerpt: language === 'en'
        ? 'Exploring how artificial intelligence is revolutionizing business processes and creating new opportunities for efficiency and growth.'
        : 'استكشاف كيف يحدث الذكاء الاصطناعي ثورة في العمليات التجارية ويخلق فرصاً جديدة للكفاءة والنمو.',
      date: language === 'en' ? 'August 15, 2025' : '15 أغسطس 2025',
      readTime: language === 'en' ? '8 min read' : '8 دقائق قراءة',
      category: language === 'en' ? 'AI & Innovation' : 'الذكاء الاصطناعي والابتكار'
    },
    {
      title: language === 'en'
        ? 'Building Scalable Custom Software Solutions'
        : 'بناء حلول برمجية مخصصة قابلة للتوسع',
      excerpt: language === 'en'
        ? 'Best practices and architectural patterns for creating software that grows with your business needs and adapts to changing requirements.'
        : 'أفضل الممارسات والأنماط المعمارية لإنشاء برمجيات تنمو مع احتياجات عملك وتتكيف مع المتطلبات المتغيرة.',
      date: language === 'en' ? 'August 10, 2025' : '10 أغسطس 2025',
      readTime: language === 'en' ? '12 min read' : '12 دقيقة قراءة',
      category: language === 'en' ? 'Software Architecture' : 'هندسة البرمجيات'
    },
    {
      title: language === 'en'
        ? 'Maximizing Productivity with Intelligent Workflows'
        : 'تعظيم الإنتاجية بسير العمل الذكي',
      excerpt: language === 'en'
        ? 'How to design and implement automated workflows that eliminate repetitive tasks and optimize team productivity.'
        : 'كيفية تصميم وتنفيذ سير عمل آلي يقضي على المهام المتكررة ويحسن إنتاجية الفريق.',
      date: language === 'en' ? 'August 5, 2025' : '5 أغسطس 2025',
      readTime: language === 'en' ? '6 min read' : '6 دقائق قراءة',
      category: language === 'en' ? 'Productivity' : 'الإنتاجية'
    }
  ];

  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 rizon-heading">
            {language === 'en' ? 'Insights & Innovation' : 'رؤى وابتكار'}
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Explore our thoughts on technology, innovation, and the future of digital transformation'
              : 'استكشف أفكارنا حول التكنولوجيا والابتكار ومستقبل التحول الرقمي'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="rizon-gradient-card rounded-xl overflow-hidden rizon-shadow-card rizon-hover-lift animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Article Header */}
              <div className="h-48 rizon-gradient-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-foreground/80 bg-foreground/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-foreground/60">
                  <div className="w-12 h-12 rizon-gradient-accent rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rizon-transition" />
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-foreground/60 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 rizon-heading group-hover:rizon-text-glow rizon-transition">
                  {post.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Button variant="accent" size="sm" className="group/btn">
                  {language === 'en' ? 'Read More' : 'اقرأ المزيد'}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 rizon-transition-fast" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Button variant="hero" size="xl" className="group">
            {language === 'en' ? 'View All Articles' : 'عرض جميع المقالات'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rizon-transition-fast" />
          </Button>
        </div>
      </div>
    </section>
  );
};
