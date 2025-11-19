import { useState, useEffect } from 'react';

interface ScrollOptions {
  threshold?: number;
  throttleMs?: number;
}

export function useScroll({ threshold = 50, throttleMs = 100 }: ScrollOptions = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const updateScrollInfo = () => {
      const currentScrollY = window.scrollY;
      
      setScrollY(currentScrollY);
      setScrolled(currentScrollY > threshold);
      setDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const throttledUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollInfo);
        ticking = true;
      }
    };

    const handleScroll = () => {
      throttledUpdate();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初始检查
    updateScrollInfo();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, throttleMs]);

  return { scrolled, scrollY, direction };
}