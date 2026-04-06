
import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { ArrowRight } from 'lucide-react';
import { BlogModal } from '@/components/BlogModal';

export const BlogSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const blogPosts = [
    {
      number: '01',
      title: {
        ar: 'الموقع الإلكتروني… موظف يعمل بلا انقطاع',
        en: 'Website... An Employee That Never Stops'
      },
      excerpt: {
        ar: 'الموقع الإلكتروني لم يعد مجرد واجهة تعريفية، بل أصبح أداة متكاملة لعرض خدماتك، استقبال طلبات العملاء بكفاءة، وتعزيز الثقة المستمرة معهم على مدار الوقت.',
        en: 'The website is no longer just an introductory interface, but has become a comprehensive tool to showcase your services, receive customer requests efficiently, and continuously build trust with them around the clock.'
      },
      content: {
        ar: `في زمن يُعد فيه **التواجد الرقمي** هو الواجهة الأولى للمؤسسات، أصبحت المواقع الإلكترونية تمثل أكثر بكثير من مجرد صفحة تعريفية؛ فهي اليوم بمثابة **موظف رقمي لا يعرف التوقف أو الراحة**. موقع إلكتروني مصمم بعناية يعكس **احترافية مؤسستك**، ويوفر للعملاء وسائل سهلة للوصول إلى خدماتك ومنتجاتك في أي وقت دون قيود. هذا الحضور الدائم يسهّل التواصل، يزيد فرص التفاعل، ويشجع على نمط تعامل سلس ومستمر.

علاوة على ذلك، يُعد الموقع **أداة تسويقية فعالة من حيث التكلفة**—أقل بكثير من الإعلانات التقليدية—ويُمكنك من خلاله جمع بيانات العملاء بواسطة **استمارات ذكية** وتحويل تلك البيانات إلى فرص فعلية وتحقيق مبيعات مربحة بشكل مباشر. كما تساعد التحديثات المنتظمة للموقع، لا سيما عندما يتم تطويره ضمن منظومة إدارة المحتوى (CMS)، في تحسين تجربة المستخدم ورفع ترتيب مؤسستك في محركات البحث، مما يعزز ظهورك أمام جمهور أوسع.

في النهاية، **الموقع الإلكتروني المثالي هو الموظف الذي لا يغادر**، يعمل بلا توقف لخدمة مؤسستك وتوسيع رقعة تأثيرها في السوق الرقمي المتسارع. إنه أساس للتحول الرقمي الناجح وركيزة تضمن الثقة والمصداقية أمام جمهورك.`,
        en: `In an era where **digital presence** is the first face of organizations, websites represent much more than just an introductory page; they are today like **a digital employee that never stops or rests**. A carefully designed website reflects **your organization's professionalism** and provides customers with easy ways to access your services and products at any time without restrictions. This permanent presence facilitates communication, increases interaction opportunities, and encourages smooth and continuous engagement.

Moreover, the website is a **cost-effective marketing tool**—much cheaper than traditional advertising—and allows you to collect customer data through **smart forms** and convert that data into actual opportunities and profitable sales directly. Regular website updates, especially when developed within a content management system (CMS), help improve user experience and raise your organization's ranking in search engines, enhancing your visibility to a wider audience.

Ultimately, **the ideal website is the employee that never leaves**, working tirelessly to serve your organization and expand its influence in the fast-paced digital market. It is the foundation for successful digital transformation and a cornerstone that ensures trust and credibility with your audience.`
      }
    },
    {
      number: '02',
      title: {
        ar: 'الأتمتة… استراتيجية لخفض الأخطاء وتحقيق الكفاءة',
        en: 'Automation... A Strategy to Reduce Errors and Achieve Efficiency'
      },
      excerpt: {
        ar: 'الأعمال الروتينية تستهلك وقتًا وجهدًا كبيرين. الأتمتة تجعل عملياتك أكثر دقة، أسرع إنجازًا، وأكثر إنتاجية، ما يتيح لك التركيز على تطوير أعمالك وتحقيق أهدافك.',
        en: 'Routine business operations consume significant time and effort. Automation makes your processes more accurate, faster to complete, and more productive, allowing you to focus on growing your business and achieving your goals.'
      },
      content: {
        ar: `في بيئة تنافسية تتطلب **السرعة والدقة**، تمثّل الأتمتة خيارًا استراتيجيًا متقدمًا يرفع مستوى أداء المؤسسات. باستخدام أنظمة الأتمتة لتنفيذ مهام متكررة مثل **إدارة الفواتير**، **معالجة الطلبات**، أو **متابعة المخزون**، يمكن للمؤسسات ضمان نتائج **دقيقة ومتسقة**. ووفق دراسات حديثة، **69% من الموظفين يعتقدون أن الأتمتة تقضي على الوقت الضائع**، و66% يؤكدون أنها تقلّل الأخطاء البشرية، بينما 59% يستعيدون ساعات كانت تضيع في المهام اليدوية.

علاوة على ذلك، تؤدي الأتمتة إلى **خفض التكاليف التشغيلية بشكل ملموس**، فقد وجدت دراسات مثل Bain & Company أن الأتمتة تقلّل تكلفة العمالة بنسبة قد تصل إلى 30% تقريبًا. هذا يسمح للمؤسسات بتركيز جهود موظفيها على الأنشطة المُبدعة والاستراتيجية بدلاً من الأعمال الروتينية.

في هذا الإطار، تُعدُّ Rizonway شريكك المثالي في تطبيق حلول الأتمتة المتقدمة، حيث نوفر لك نظمًا مخصصة تزيد من كفاءة مؤسستك، تقلّل التكاليف، وتُحرّر الموارد للعمل في مجالات ترفع القيمة والمردود.`,
        en: `In a competitive environment that demands **speed and accuracy**, automation represents an advanced strategic choice that elevates organizational performance. By using automation systems to perform repetitive tasks such as **invoice management**, **order processing**, or **inventory tracking**, organizations can ensure **accurate and consistent results**. According to recent studies, **69% of employees believe automation eliminates wasted time**, 66% confirm it reduces human errors, while 59% regain hours that were lost in manual tasks.

Furthermore, automation leads to **significant reduction in operational costs**; studies like Bain & Company have found that automation can reduce labor costs by up to approximately 30%. This allows organizations to focus their employees' efforts on creative and strategic activities rather than routine work.

In this context, Rizonway is your ideal partner in implementing advanced automation solutions, providing you with customized systems that increase your organization's efficiency, reduce costs, and free up resources to work in areas that enhance value and returns.`
      }
    },
    {
      number: '03',
      title: {
        ar: 'الذكاء الاصطناعي… مستقبل خدمة العملاء',
        en: 'AI... The Future of Customer Service'
      },
      excerpt: {
        ar: 'الوكلاء الأذكياء بالذكاء الاصطناعي يقدّمون لعملائك ردودًا فورية مستمرة، ويعززون جودة الخدمة، ويرفعون مستوى التجربة إلى معايير متقدمة لم تكن متاحة من قبل.',
        en: 'AI-powered smart agents provide your customers with continuous instant responses, enhance service quality, and elevate the experience to advanced standards that weren\'t previously available.'
      },
      content: {
        ar: `في عالم يحكمه تطوّر التقنية وتعلّي قيمة تجربة العميل، بات الذكاء الاصطناعي حجر الزاوية في تقديم خدمات دعم متطورة. تقديرات متعددة تشير إلى أن **80% من تفاعلات العملاء قد تُدار بواسطة الذكاء الاصطناعي بحلول عام 2025**، و74% من المستهلكين استخدموا بالفعل قنوات دعم مدعومة بالذكاء الاصطناعي على مدى السنة الماضية.

كما تُظهر الإحصاءات تحسنًا واضحًا في **رضا العملاء** وتخفيضًا ملحوظًا في التكاليف؛ العديد من المؤسسات حققت وفورات تصل إلى **30%** على صعيد نفقات الدعم.

وهنا تبرز Rizonway بتصميم وكلاء ذكاء اصطناعي متطورين يقدمون الدعم **بجودة عالية**، **أداء دقيق**، **وسرعة استجابة ممكنة**، ليحصل عملاؤك على أفضل تجربة ممكنة بلا انقطاع.`,
        en: `In a world governed by technological advancement and the elevated value of customer experience, artificial intelligence has become the cornerstone of delivering advanced support services. Multiple estimates indicate that **80% of customer interactions may be managed by AI by 2025**, and 74% of consumers have already used AI-powered support channels over the past year.

Statistics also show clear improvement in **customer satisfaction** and significant cost reduction; many organizations have achieved savings of up to **30%** in support expenses.

This is where Rizonway stands out by designing advanced AI agents that provide support with **high quality**, **precise performance**, and **maximum response speed**, ensuring your customers get the best possible experience without interruption.`
      }
    }
  ];

  return (
    <section id="blog" className="py-12 md:py-20 relative overflow-hidden bg-card/30">
      <div className="geo-line w-full absolute top-0" />
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow-top pointer-events-none" />

      {/* Floating geometric accents */}
      <div className="hidden md:block absolute -top-12 -left-12 w-[220px] h-[220px] rounded-full border border-foreground/[0.03] pointer-events-none" />
      <div className="hidden md:block absolute -bottom-20 right-1/4 w-[280px] h-[280px] rounded-full border border-foreground/[0.025] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12 scroll-reveal">
          <p className={`text-xs font-medium tracking-[0.2em] uppercase text-foreground/30 mb-3 md:mb-4 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
            {language === 'en' ? 'Insights' : 'رؤى'}
          </p>
          <h2 className={`text-2xl md:text-3xl lg:text-5xl rz-heading mb-4 md:mb-6 ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
            {language === 'en' ? 'Insights & Innovation' : 'رؤى وابتكار'}
          </h2>
          <p className={`text-base md:text-lg text-foreground/40 max-w-2xl mx-auto rz-body ${language === 'ar' ? 'arabic-text font-arabic' : 'font-grotesk'}`}>
            {language === 'en'
              ? 'Our thoughts on technology, innovation, and digital transformation'
              : 'أفكارنا حول التكنولوجيا والابتكار والتحول الرقمي'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="scroll-reveal rz-card p-6 md:p-8 group cursor-pointer"
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => setSelectedPost({
                title: language === 'ar' ? post.title.ar : post.title.en,
                content: language === 'ar' ? post.content.ar : post.content.en
              })}
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <span className="text-[11px] font-medium text-foreground/15 tracking-wider font-grotesk">
                  {post.number}
                </span>
                <div className="p-2 border border-foreground/10 rounded-sm text-foreground/30 group-hover:text-foreground/60 transition-all duration-500 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 tracking-tight group-hover:text-foreground/90 transition-colors duration-300 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                {language === 'ar' ? post.title.ar : post.title.en}
              </h3>

              {/* Excerpt */}
              <p className={`text-xs md:text-sm text-foreground/35 leading-relaxed ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                {language === 'ar' ? post.excerpt.ar : post.excerpt.en}
              </p>

              {/* Read more line */}
              <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-foreground/8">
                <span className={`text-xs font-medium text-foreground/30 group-hover:text-foreground/50 transition-colors duration-300 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
                  {language === 'en' ? 'Read article →' : 'اقرأ المقال ←'}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      <BlogModal
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title || ''}
        content={selectedPost?.content || ''}
      />
    </section>
  );
};