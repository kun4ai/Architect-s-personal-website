import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';
import { useBreakpoint } from '@/hooks/useMediaQuery';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils';
import { NavItem } from '@/types';

const navigationItems: NavItem[] = [
  { name: '首页', id: 'home' },
  { name: '作品', id: 'portfolio' },
  { name: '关于', id: 'about' },
  { name: '经历', id: 'experience' },
  { name: '联系', id: 'contact' }
];

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrolled } = useScroll({ threshold: 50 });
  const { isMobile } = useBreakpoint();
  const router = useRouter();

  // 监听滚动以更新活动导航项
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 关闭移动端菜单当路由变化时
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6',
        className
      )}
      role="navigation"
      aria-label="主导航"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="text-2xl font-bold font-serif tracking-tighter">
            <span className="group-hover:text-neutral-600 transition-colors">L.ARCH</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="hidden md:flex space-x-12 text-sm font-medium tracking-wide">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'hover:text-neutral-500 transition-colors uppercase relative',
                  activeSection === item.id ? 'text-neutral-900' : 'text-neutral-600'
                )}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neutral-900"></span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}

        {/* Desktop CTA Button */}
        {!isMobile && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => scrollToSection('contact')}
          >
            联系我
          </Button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div 
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-8 flex flex-col items-center space-y-6 md:hidden border-t border-neutral-100"
          id="mobile-menu"
          role="menu"
        >
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'text-lg font-medium transition-colors',
                activeSection === item.id ? 'text-neutral-900' : 'text-neutral-600'
              )}
              role="menuitem"
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.name}
            </button>
          ))}
          
          <div className="pt-4 border-t border-neutral-100">
            <Button 
              variant="outline" 
              size="md"
              onClick={() => scrollToSection('contact')}
            >
              联系我
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};