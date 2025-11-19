import React, { useEffect, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { LazyImage } from '@/components/ui/LazyImage';
import { personalInfo } from '@/data/personal';
import { useIntersection } from '@/hooks/useIntersection';

interface HeroProps {
  onExploreClick: () => void;
}

const heroImageUrl = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop";

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isIntersecting } = useIntersection({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900 text-white"
      ref={ref}
      aria-label="首页"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src={heroImageUrl}
          alt="现代建筑背景"
          className="w-full h-full object-cover"
          priority={true}
          placeholder="empty"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/90"></div>
      </div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center max-w-4xl"
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <motion.div
          variants={fadeInUp}
          className="mb-4"
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-neutral-300">
            Architecture Portfolio
          </p>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-8 leading-tight"
          variants={fadeInUp}
        >
          <span>构建空间</span>
          <br />
          <span className="text-neutral-400 italic">重塑生活</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-neutral-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          致力于探索功能与美学的平衡，用极简的设计语言回应复杂的城市问题。
          <br className="hidden md:block" />
          专注商业建筑、文化空间与高端住宅设计。
        </motion.p>
        
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg"
            onClick={onExploreClick}
            className="group"
          >
            浏览作品
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={16} />
          </Button>
          
          <Button 
            variant="ghost"
            size="lg"
            className="group text-white border-white/20 hover:bg-white/10"
            onClick={() => {
              // 下载简历功能
              const link = document.createElement('a');
              link.href = personalInfo.resume;
              link.download = `${personalInfo.name}_简历.pdf`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="mr-2" size={16} />
            下载简历
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2
        }}
      >
        <div className="flex flex-col items-center text-neutral-300">
          <span className="text-xs tracking-wider uppercase mb-2">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <motion.div
          className="w-px h-24 bg-white/20"
          initial={{ scaleY: 0 }}
          animate={isIntersecting ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
      
      <div className="absolute bottom-1/4 right-8 hidden lg:block">
        <motion.div
          className="w-px h-24 bg-white/20"
          initial={{ scaleY: 0 }}
          animate={isIntersecting ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </section>
  );
};