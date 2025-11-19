import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ExternalLink, Filter } from 'lucide-react';
import { LazyImage } from '@/components/ui/LazyImage';
import { Button } from '@/components/ui/Button';
import { useIntersection } from '@/hooks/useIntersection';
import { portfolioData, getCategories, getFilteredPortfolio } from '@/data/portfolio';
import { cn } from '@/utils';

interface PortfolioProps {
  className?: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ className }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { ref, isIntersecting } = useIntersection({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = getCategories();
  const filteredProjects = useMemo(() => {
    return getFilteredPortfolio(selectedCategory);
  }, [selectedCategory]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      id="portfolio" 
      className={cn("py-24 bg-neutral-50", className)}
      ref={ref}
      aria-label="作品集"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-neutral-900">
            代表作品
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            精选项目展示，每一个作品都承载着对空间的理解与对生活的感悟
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'ghost'}
            onClick={() => setSelectedCategory('all')}
            className="text-sm uppercase tracking-wider"
          >
            <Filter className="mr-2" size={14} />
            全部
          </Button>
          
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'ghost'}
              onClick={() => setSelectedCategory(category)}
              className="text-sm uppercase tracking-wider"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${selectedCategory}-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.4,
                  layout: { duration: 0.3 }
                }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Overlay */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    )}>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={hoveredProject === project.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex gap-3"
                        >
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-white border-white/20 hover:bg-white/10"
                            onClick={(e) => {
                              e.stopPropagation();
                              // 查看项目详情
                              const modal = document.createElement('div');
                              modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
                              modal.innerHTML = `
                                <div class="max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg p-8">
                                  <div class="flex justify-between items-start mb-6">
                                    <h3 class="text-2xl font-bold">${project.title}</h3>
                                    <button class="text-neutral-500 hover:text-neutral-700 text-2xl">&times;</button>
                                  </div>
                                  <img src="${project.image}" alt="${project.title}" class="w-full h-auto rounded-lg mb-4" />
                                  <p class="text-neutral-600 mb-4">${project.description}</p>
                                  <div class="grid grid-cols-2 gap-4 text-sm">
                                    <div><strong>年份:</strong> ${project.year}</div>
                                    <div><strong>类型:</strong> ${project.category}</div>
                                    <div><strong>面积:</strong> ${project.size}</div>
                                    <div><strong>位置:</strong> ${project.location}</div>
                                  </div>
                                </div>
                              `;
                              document.body.appendChild(modal);
                              
                              const closeBtn = modal.querySelector('button');
                              closeBtn?.addEventListener('click', () => {
                                document.body.removeChild(modal);
                              });
                              
                              modal.addEventListener('click', (e) => {
                                if (e.target === modal) {
                                  document.body.removeChild(modal);
                                }
                              });
                            }}
                          >
                            <Eye size={16} />
                          </Button>
                          
                          {project.url && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-white border-white/20 hover:bg-white/10"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.url, '_blank');
                              }}
                            >
                              <ExternalLink size={16} />
                            </Button>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-neutral-500">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-neutral-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>{project.location}</span>
                      <span>{project.size}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                // 这里可以实现加载更多功能
                console.log('Load more projects');
              }}
            >
              加载更多作品
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};