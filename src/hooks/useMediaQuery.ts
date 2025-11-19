import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // 设置初始值
    setMatches(media.matches);
    
    // 创建监听器
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // 现代浏览器
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // 旧版浏览器兼容
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
}

// 预设的媒体查询Hook
export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isLarge = useMediaQuery('(min-width: 1280px)');
  const isExtraLarge = useMediaQuery('(min-width: 1536px)');
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    isExtraLarge,
    current: isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : 'large'
  };
}