import React, { useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Bot, Cog, Zap, Code, Database, Brain } from 'lucide-react';

interface CarouselItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/*
 * Infinite marquee with drag support.
 *
 * Uses inline-block cards inside a white-space:nowrap container
 * with direction:ltr forced via CSS. This avoids all flexbox RTL
 * reversal issues. Each card's inner content restores direction
 * for proper Arabic text rendering.
 *
 * Stride is calculated as N × (CARD_W + GAP) — every card occupies
 * exactly that slot because we set both width and margin-right inline.
 * No DOM measurement needed.
 */

const CARD_W = 350;
const CARD_W_MOBILE = 280;
const GAP    = 24;
const GAP_MOBILE = 16;

const getCardWidth = () => {
  if (typeof window === 'undefined') return CARD_W;
  return window.innerWidth < 768 ? CARD_W_MOBILE : CARD_W;
};

const getGap = () => {
  if (typeof window === 'undefined') return GAP;
  return window.innerWidth < 768 ? GAP_MOBILE : GAP;
};

const CarouselCard: React.FC<{ item: CarouselItem; language: string }> = ({ item, language }) => {
  const [cardWidth, setCardWidth] = React.useState(getCardWidth());
  const [gap, setGap] = React.useState(getGap());

  React.useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
      setGap(getGap());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="rz-card p-5 md:p-7 group relative overflow-hidden select-none align-top"
      style={{
        display: 'inline-block',
        width: cardWidth,
        marginRight: gap,
        direction: language === 'ar' ? 'rtl' : 'ltr',
        verticalAlign: 'top',
      }}
    >
    {/* Internal card texture */}
    <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 80% 60% at 80% 0%, hsl(0 0% 100% / 0.03) 0%, transparent 60%)'
    }} />

    <div className="flex items-start mb-4 md:mb-5 relative z-10">
      <div className="p-2 md:p-2.5 border border-foreground/10 rounded-sm text-foreground/40 group-hover:text-foreground/80 group-hover:border-foreground/25 transition-all duration-500 bg-background/30">
        {item.icon}
      </div>
    </div>
    <h3 className={`text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3 tracking-tight relative z-10 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
      {item.title}
    </h3>
    <p className={`text-foreground/40 text-sm leading-relaxed relative z-10 ${language === 'ar' ? 'font-arabic' : 'font-grotesk'}`}>
      {item.description}
    </p>
  </div>
  );
};

interface MarqueeProps {
  items: CarouselItem[];
  direction: 'left' | 'right';
  speed?: number; // px per second
}

const InfiniteMarquee: React.FC<MarqueeProps> = ({ items, direction, speed = 50 }) => {
  const { language } = useLanguage();
  const n = items.length;
  
  const [strideVal, setStrideVal] = React.useState(() => {
    const cardW = getCardWidth();
    const gap = getGap();
    return n * (cardW + gap);
  });

  const stripRef  = useRef<HTMLDivElement>(null);
  const rafRef    = useRef(0);
  const prevTime  = useRef(0);
  const offset    = useRef(direction === 'right' ? strideVal : 0);

  const dragging   = useRef(false);
  const dragStartX = useRef(0);
  const dragDelta  = useRef(0);
  const hovered    = useRef(false);


  // Modulo wrap: keeps value in [0, stride)
  const wrap = useCallback((v: number) => {
    if (strideVal <= 0) return 0;
    return ((v % strideVal) + strideVal) % strideVal;
  }, [strideVal]);

  useEffect(() => {
    const handleResize = () => {
      const cardW = getCardWidth();
      const gap = getGap();
      const newStride = n * (cardW + gap);
      setStrideVal(newStride);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [n]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    offset.current = direction === 'right' ? strideVal : 0;
    prevTime.current = 0;

    const tick = (now: number) => {
      if (!prevTime.current) prevTime.current = now;
      const dt = (now - prevTime.current) / 1000;
      prevTime.current = now;

      if (!hovered.current && !dragging.current) {
        offset.current += (direction === 'left' ? 1 : -1) * speed * dt;
      }

      offset.current = wrap(offset.current);

      const tx = -(offset.current + dragDelta.current);
      strip.style.transform = `translate3d(${tx}px, 0, 0)`;

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [n, direction, speed, wrap, strideVal, language]);

  // ── Mouse drag ──
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    setIsDraggingClass(true);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    dragDelta.current = -(e.clientX - dragStartX.current);
  };
  const endDrag = () => {
    if (!dragging.current) return;
    dragging.current = false;
    offset.current = wrap(offset.current + dragDelta.current);
    dragDelta.current = 0;
    setIsDraggingClass(false);
  };

  // ── Touch drag ──
  const touchStartX = useRef(0);
  const touchStartTime = useRef(0);
  const isDragging = useRef(false);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    dragStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
    dragDelta.current = 0;
    isDragging.current = false;
    setIsDraggingClass(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const deltaX = Math.abs(currentX - touchStartX.current);
    const deltaTime = Date.now() - touchStartTime.current;
    
    // Only start dragging if we've moved enough horizontally and not too much time has passed
    if (deltaX > 10 && deltaTime < 300) {
      if (!isDragging.current) {
        isDragging.current = true;
        dragging.current = true;
        setIsDraggingClass(true);
        e.preventDefault(); // Prevent scroll only when actually dragging
      }
      dragDelta.current = -(currentX - dragStartX.current);
    }
  };

  const onTouchEnd = () => {
    if (isDragging.current) {
      dragging.current = false;
      offset.current = wrap(offset.current + dragDelta.current);
      dragDelta.current = 0;
    }
    isDragging.current = false;
    setIsDraggingClass(false);
  };

  const tripled = [...items, ...items, ...items];
  const [isDraggingClass, setIsDraggingClass] = React.useState(false);

  return (
    <div
      className={`overflow-hidden cursor-grab active:cursor-grabbing relative ${isDraggingClass ? 'dragging' : ''}`}
      onMouseEnter={() => { hovered.current = true; }}
      onMouseLeave={() => { hovered.current = false; endDrag(); }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={endDrag}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/*
        Inline-block layout with direction:ltr — immune to ancestor RTL.
        white-space:nowrap keeps all cards in one row.
        font-size:0 eliminates whitespace gaps between inline-block elements.
      */}
      <div
        ref={stripRef}
        className="will-change-transform"
        style={{
          whiteSpace: 'nowrap',
          direction: 'ltr',
          fontSize: 0,
        }}
      >
        {tripled.map((item, i) => (
          <CarouselCard key={`c-${i}`} item={item} language={language} />
        ))}
      </div>
    </div>
  );
};

export const AutomationCarousel: React.FC = () => {
  const { language } = useLanguage();

  const items: CarouselItem[] = [
    {
      icon: <Cog className="w-5 h-5" />,
      title: language === 'en' ? 'WhatsApp Automation' : 'أتمتة الواتساب',
      description: language === 'en' 
        ? 'Automated customer support and order management via WhatsApp bots'
        : 'دعم عملاء مؤتمت وإدارة طلبات عبر بوتات الواتساب'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: language === 'en' ? 'Data Processing' : 'معالجة البيانات',
      description: language === 'en'
        ? 'Automated data entry, processing, and report generation systems'
        : 'أنظمة إدخال ومعالجة البيانات وتوليد التقارير المؤتمتة'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: language === 'en' ? 'Workflow Optimization' : 'تحسين سير العمل',
      description: language === 'en'
        ? 'Smart workflow automation that eliminates repetitive manual tasks'
        : 'أتمتة سير العمل الذكية التي تلغي المهام اليدوية المتكررة'
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: language === 'en' ? 'Email Automation' : 'أتمتة الإيميل',
      description: language === 'en'
        ? 'Automated email responses, follow-ups, and customer communication'
        : 'ردود إيميل مؤتمتة ومتابعات وتواصل عملاء تلقائي'
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: language === 'en' ? 'Inventory Management' : 'إدارة المخزون',
      description: language === 'en'
        ? 'Automated inventory tracking, alerts, and restocking systems'
        : 'أنظمة تتبع مخزون مؤتمتة وتنبيهات وإعادة تخزين'
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: language === 'en' ? 'Financial Automation' : 'الأتمتة المالية',
      description: language === 'en'
        ? 'Automated invoicing, payment processing, and financial reporting'
        : 'فوترة مؤتمتة ومعالجة مدفوعات وتقارير مالية'
    },
  ];

  return <InfiniteMarquee items={items} direction="left" speed={50} />;
};

export const AIAgentsCarousel: React.FC = () => {
  const { language } = useLanguage();

  const items: CarouselItem[] = [
    {
      icon: <Bot className="w-5 h-5" />,
      title: language === 'en' ? '24/7 Customer Support' : 'دعم عملاء 24/7',
      description: language === 'en'
        ? 'AI agents that handle customer inquiries, bookings, and support requests'
        : 'وكلاء ذكاء اصطناعي يتعاملون مع استفسارات وحجوزات وطلبات دعم العملاء'
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: language === 'en' ? 'Sales Assistant' : 'مساعد مبيعات',
      description: language === 'en'
        ? 'Smart agents that qualify leads, schedule meetings, and follow up with prospects'
        : 'وكلاء أذكياء يؤهلون العملاء المحتملين ويحددون المواعيد ويتابعون الفرص'
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: language === 'en' ? 'Order Management' : 'إدارة الطلبات',
      description: language === 'en'
        ? 'AI agents that process orders, track deliveries, and handle returns automatically'
        : 'وكلاء ذكاء اصطناعي يعالجون الطلبات ويتتبعون التسليمات ويتعاملون مع المرتجعات تلقائياً'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: language === 'en' ? 'Data Analysis' : 'تحليل البيانات',
      description: language === 'en'
        ? 'Intelligent agents that analyze business data and provide actionable insights'
        : 'وكلاء أذكياء يحللون بيانات الأعمال ويقدمون رؤى قابلة للتنفيذ'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: language === 'en' ? 'Content Creator' : 'منشئ محتوى',
      description: language === 'en'
        ? 'AI agents that create marketing content, social media posts, and documentation'
        : 'وكلاء ذكاء اصطناعي ينشئون محتوى تسويقي ومنشورات مواقع تواصل ووثائق'
    },
    {
      icon: <Cog className="w-5 h-5" />,
      title: language === 'en' ? 'Quality Control' : 'مراقبة الجودة',
      description: language === 'en'
        ? 'Smart agents that monitor product quality, detect issues, and ensure standards'
        : 'وكلاء أذكياء يراقبون جودة المنتجات ويكتشفون المشاكل ويضمنون المعايير'
    },
  ];

  return <InfiniteMarquee items={items} direction="right" speed={50} />;
};