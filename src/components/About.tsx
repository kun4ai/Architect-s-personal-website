import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, MapPin } from 'lucide-react';
import { LazyImage } from '@/components/ui/LazyImage';
import { Button } from '@/components/ui/Button';
import { useIntersection } from '@/hooks/useIntersection';
import { personalInfo } from '@/data/personal';
import { cn } from '@/utils';

interface AboutProps {
  className?: string;
}

const profileImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";

export const About: React.FC<AboutProps> = ({ className }) => {
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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      id="about" 
      className={cn("py-24 bg-white", className)}
      ref={ref}
      aria-label="关于我"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="relative">
              <LazyImage
                src={profileImageUrl}
                alt="建筑师个人照片"
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Floating Stats Card */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl border border-neutral-100"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={isIntersecting ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 20, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 mb-1">8+</div>
                  <div className="text-sm text-neutral-600 uppercase tracking-wider">年经验</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="lg:pl-8"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-neutral-900">
                关于我
              </h2>
              <div className="w-20 h-1 bg-neutral-900 mb-8"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-neutral-600 leading-relaxed">
                坚信建筑应该以人为本，通过精心的空间设计和材质选择，
                创造出既满足功能需求又富有情感共鸣的建筑作品。
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">专业技能</h3>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.skills.map((skill, index) => (
                  <div key={skill.name} className="text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-neutral-700">{skill.name}</span>
                      <span className="text-neutral-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <motion.div 
                        className="bg-neutral-900 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isIntersecting ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-neutral-100 rounded-full mb-3 mx-auto">
                  <Users className="text-neutral-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">50+</div>
                <div className="text-sm text-neutral-600 uppercase tracking-wider">项目完成</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-neutral-100 rounded-full mb-3 mx-auto">
                  <Award className="text-neutral-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">5</div>
                <div className="text-sm text-neutral-600 uppercase tracking-wider">设计奖项</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-neutral-100 rounded-full mb-3 mx-auto">
                  <Calendar className="text-neutral-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">2016</div>
                <div className="text-sm text-neutral-600 uppercase tracking-wider">执业开始</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                联系我
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="mt-24 text-center"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-3xl font-bold font-serif mb-16 text-neutral-900"
            variants={fadeInUp}
          >
            设计理念
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "功能至上",
                description: "每一个设计决策都源于对功能的深度思考，确保空间既能完美满足使用需求，又能提供愉悦的体验。"
              },
              {
                title: "美学平衡", 
                description: "在实用性与艺术性之间寻找最佳平衡点，创造既有强烈视觉冲击力又不失温馨感的设计作品。"
              },
              {
                title: "可持续发展",
                description: "将环保理念融入设计过程，选择可持续材料，采用节能技术，为未来创造更美好的建筑环境。"
              }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                className="text-center"
                variants={fadeInUp}
              >
                <h4 className="text-xl font-semibold mb-4 text-neutral-900">
                  {value.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};