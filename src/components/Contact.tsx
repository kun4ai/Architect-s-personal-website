import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Dribbble } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useIntersection } from '@/hooks/useIntersection';
import { contactInfo } from '@/data/personal';
import { cn } from '@/utils';
import { AppError, handleError } from '@/utils';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 表单验证
      if (!formData.name || !formData.email || !formData.message) {
        throw new AppError('请填写所有必填字段', 'VALIDATION_ERROR');
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new AppError('请输入有效的邮箱地址', 'VALIDATION_ERROR');
      }

      // 模拟提交过程
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 这里应该是实际的提交逻辑，比如发送到邮件服务
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={cn("py-24 bg-white", className)}
      ref={ref}
      aria-label="联系我"
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
            联系我
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            欢迎与我讨论建筑设计项目或合作机会，我会尽快回复您的消息
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-8 text-neutral-900">联系方式</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Mail className="text-neutral-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">邮箱</h4>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Phone className="text-neutral-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">电话</h4>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-neutral-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">地址</h4>
                    <p className="text-neutral-600">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4 text-neutral-900">社交媒体</h4>
              <div className="flex space-x-4">
                {contactInfo.socialMedia.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors group"
                    aria-label={`访问${social.platform}`}
                  >
                    {social.platform === 'GitHub' && <Github size={20} className="text-neutral-600 group-hover:text-neutral-900" />}
                    {social.platform === 'LinkedIn' && <Linkedin size={20} className="text-neutral-600 group-hover:text-neutral-900" />}
                    {social.platform === 'Dribbble' && <Dribbble size={20} className="text-neutral-600 group-hover:text-neutral-900" />}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4 text-neutral-900">项目状态</h4>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-medium">目前可接受新项目</span>
                </div>
                <p className="text-green-600 text-sm mt-2">
                  预计3-5个工作日内回复您的咨询
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-neutral-50 p-8 rounded-lg"
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-8 text-neutral-900">发送消息</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-colors"
                  placeholder="请输入您的姓名"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-colors"
                  placeholder="请输入您的邮箱"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-colors"
                  placeholder="请输入消息主题"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  消息 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-colors resize-vertical"
                  placeholder="请详细描述您的项目需求或想法..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 text-sm">
                    消息发送成功！我会尽快回复您。
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">
                    发送失败，请稍后重试或直接联系我。
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    发送中...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    发送消息
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};