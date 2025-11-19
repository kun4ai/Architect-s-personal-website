import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { personalInfo } from '@/data/personal';

const App: React.FC = () => {
  useEffect(() => {
    // 页面加载完成后的初始化逻辑
    const handleResize = () => {
      // 响应式处理逻辑
      document.documentElement.style.setProperty(
        '--vh', 
        `${window.innerHeight * 0.01}px`
      );
    };

    // 设置视窗高度变量
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleExploreClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Head>
        <title>{personalInfo.name} - 建筑师个人网站</title>
        <meta name="description" content={personalInfo.bio} />
        <meta name="keywords" content="建筑,设计,建筑师,建筑项目,室内设计,空间设计" />
        <meta name="author" content={personalInfo.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${personalInfo.name} - 建筑师个人网站`} />
        <meta property="og:description" content={personalInfo.bio} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} - 建筑师个人网站`} />
        <meta name="twitter:description" content={personalInfo.bio} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop" />
        
        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Security */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap" as="style" onLoad={(e) => {
          e.currentTarget.onload = null;
          e.currentTarget.rel = 'stylesheet';
        }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap" />
        </noscript>
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main role="main">
          {/* Hero Section */}
          <Hero onExploreClick={handleExploreClick} />
          
          {/* Portfolio Section */}
          <Portfolio />
          
          {/* About Section */}
          <About />
          
          {/* Experience Section */}
          <Experience />
          
          {/* Contact Section */}
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
      
      {/* Loading Overlay (only shows briefly on initial load) */}
      <motion.div
        className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{ pointerEvents: 'none' }}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 text-sm">加载中...</p>
        </div>
      </motion.div>
    </>
  );
};

export default App;