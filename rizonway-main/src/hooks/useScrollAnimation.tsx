import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const elementsToObserve = document.querySelectorAll(
      '.scroll-reveal, .scroll-slide-left, .scroll-slide-right, .scroll-scale, .stagger-children, .text-reveal, .line-grow'
    );
    
    elementsToObserve.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Hero image parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('.hero-image-parallax') as HTMLElement;
      
      if (heroImage) {
        const rate = scrolled * -0.5;
        const scale = Math.max(0.5, 1 - scrolled / 1000);
        const opacity = Math.max(0, 1 - scrolled / 800);
        
        heroImage.style.transform = `translate3d(0, ${rate}px, 0) scale(${scale})`;
        heroImage.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};