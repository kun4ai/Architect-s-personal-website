import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Dribbble, Mail, Phone, Heart } from 'lucide-react';
import { contactInfo } from '@/data/personal';
import { cn } from '@/utils';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer 
      className={cn("bg-neutral-900 text-white py-16", className)}
      role="contentinfo"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-block mb-6">
              <div className="text-3xl font-bold font-serif tracking-tighter">
                <span className="group-hover:text-neutral-300 transition-colors">L.ARCH</span>
              </div>
            </Link>
            
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
              专注于建筑设计与空间规划，致力于创造既有功能美学的建筑作品。
              通过精细的设计语言，为每个项目注入独特的个性与情感。
            </p>
            
            <div className="flex space-x-4">
              {contactInfo.socialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors group"
                  aria-label={`访问${social.platform}`}
                >
                  {social.platform === 'GitHub' && <Github size={18} className="text-neutral-400 group-hover:text-white" />}
                  {social.platform === 'LinkedIn' && <Linkedin size={18} className="text-neutral-400 group-hover:text-white" />}
                  {social.platform === 'Dribbble' && <Dribbble size={18} className="text-neutral-400 group-hover:text-white" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">快速导航</h4>
            <nav className="space-y-3" aria-label="页脚导航">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                首页
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                作品集
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                关于我
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                工作经历
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                联系我
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">联系方式</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center text-neutral-400 hover:text-white transition-colors group"
              >
                <Mail size={16} className="mr-3 group-hover:text-neutral-300" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
              
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center text-neutral-400 hover:text-white transition-colors group"
              >
                <Phone size={16} className="mr-3 group-hover:text-neutral-300" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
              
              <p className="text-neutral-400 text-sm leading-relaxed">
                {contactInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm">
              <p className="flex items-center">
                © {currentYear} L.ARCH 建筑师个人网站. 
                <span className="mx-2">用</span>
                <Heart size={14} className="text-red-500 mx-1" />
                <span>精心制作</span>
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="text-neutral-400 hover:text-white transition-colors text-sm group"
              aria-label="回到顶部"
            >
              <span className="mr-2">回到顶部</span>
              <span className="inline-block transform group-hover:-translate-y-1 transition-transform">
                ↑
              </span>
            </button>
          </div>
        </div>

        {/* Additional Credits */}
        <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-xs">
            本网站采用 Next.js、TypeScript 和 Tailwind CSS 构建 |
            图片由 Unsplash 提供 |
            网站由 Trae AI 优化升级
          </p>
        </div>
      </div>
    </footer>
  );
};