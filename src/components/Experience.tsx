import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useIntersection } from '@/hooks/useIntersection';
import { experienceData } from '@/data/experience';
import { cn } from '@/utils';

interface ExperienceProps {
  className?: string;
}

export const Experience: React.FC<ExperienceProps> = ({ className }) => {
  const { ref, isIntersecting } = useIntersection({
    threshold: 0.1,
    triggerOnce: true
  });

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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="experience" 
      className={cn("py-24 bg-neutral-50", className)}
      ref={ref}
      aria-label="工作经历"
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
            工作经历
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            多年建筑设计与项目管理经验，在不同类型的项目中不断学习和成长
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-300 md:transform md:-translate-x-px"></div>

          {/* Experience Items */}
          <motion.div 
            className="space-y-12"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={cn(
                  "relative flex flex-col md:flex-row items-start",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
                variants={fadeInUp}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-white border-4 border-neutral-900 rounded-full transform md:-translate-x-2 z-10"></div>
                
                {/* Content */}
                <div className={cn(
                  "w-full md:w-1/2 ml-12 md:ml-0",
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                )}>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Calendar className="text-neutral-500" size={16} />
                        <span className="text-sm text-neutral-500">
                          {experience.startYear} - {experience.endYear || '至今'}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-neutral-900 mb-1">
                        {experience.position}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg text-neutral-700">
                          {experience.company}
                        </h4>
                        {experience.url && (
                          <a 
                            href={experience.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-neutral-700 transition-colors"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <MapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    {experience.achievements && experience.achievements.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-neutral-900 mb-2">
                          主要成就：
                        </h5>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-neutral-600 flex items-start">
                              <span className="w-1 h-1 bg-neutral-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div>
                        <h5 className="text-sm font-semibold text-neutral-900 mb-2">
                          技术栈：
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div 
          className="mt-24 max-w-4xl mx-auto"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold font-serif mb-12 text-neutral-900 text-center">
            教育背景
          </h3>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">
                  建筑学硕士
                </h4>
                <p className="text-neutral-700 mb-2">清华大学 建筑学院</p>
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                  <Calendar size={14} />
                  <span>2014 - 2016</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">
                  建筑学学士
                </h4>
                <p className="text-neutral-700 mb-2">北京建筑大学</p>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Calendar size={14} />
                  <span>2010 - 2014</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-neutral-100 mt-6">
              <h5 className="text-sm font-semibold text-neutral-900 mb-3">
                相关证书：
              </h5>
              <div className="flex flex-wrap gap-2">
                {['一级注册建筑师', 'LEED AP BD+C', 'BIM认证'].map((cert) => (
                  <span 
                    key={cert}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};