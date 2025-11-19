import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    // 设置视窗高度变量
    const handleResize = () => {
      document.documentElement.style.setProperty(
        '--vh', 
        `${window.innerHeight * 0.01}px`
      );
    };

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

  // 模拟的数据
  const personalInfo = {
    name: "李建筑",
    title: "高级建筑设计师",
    bio: "拥有 8 年专业建筑设计经验，专注于将可持续发展理念与当代美学相结合。"
  };

  const portfolioProjects = [
    {
      id: 1,
      title: "城市综合体设计",
      category: "公共建筑",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
      description: "一个现代城市综合体设计，融合了商业、办公和住宅功能。"
    },
    {
      id: 2,
      title: "私人定制住宅",
      category: "住宅建筑",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      description: "为年轻家庭设计的现代住宅，注重实用性和美观性。"
    },
    {
      id: 3,
      title: "文化中心改造",
      category: "室内设计",
      image: "https://images.unsplash.com/photo-1558285493-37a86e81f5c4?q=80&w=1200&auto=format&fit=crop",
      description: "老旧文化中心的现代化改造，创造新的文化空间。"
    }
  ];

  const skills = [
    { name: "Autodesk Revit / BIM", level: 95, category: "BIM/CAD", icon: "🏗️" },
    { name: "Rhino + Grasshopper", level: 90, category: "参数化设计", icon: "🦏" },
    { name: "Adobe Creative Suite", level: 85, category: "可视化", icon: "🎨" }
  ];

  const experiences = [
    {
      id: 1,
      year: "2023-至今",
      role: "高级建筑设计师",
      company: "创新建筑设计事务所",
      location: "上海",
      desc: "负责大型城市综合体和公共建筑项目设计，指导年轻设计师团队。"
    },
    {
      id: 2,
      year: "2019-2023",
      role: "建筑设计师",
      company: "国际建筑设计公司",
      location: "上海",
      desc: "参与多个获奖住宅和商业项目设计，擅长使用BIM技术。"
    },
    {
      id: 3,
      year: "2016-2019",
      role: "初级建筑设计师",
      company: "现代建筑事务所",
      location: "北京",
      desc: "从概念设计到施工图绘制，积累了丰富的项目经验。"
    }
  ];

  const contactInfo = {
    email: "hello@l-arch.com",
    phone: "+86 138 0013 8000",
    address: "上海市黄浦区南京东路100号",
    social: {
      github: "https://github.com/l-arch",
      linkedin: "https://linkedin.com/in/l-arch",
      instagram: "https://instagram.com/l.arch.studio"
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
        
        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
        
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="text-2xl font-bold font-serif tracking-tighter">
              <span className="hover:text-neutral-600 transition-colors">L.ARCH</span>
            </div>
            
            <div className="hidden md:flex space-x-12 text-sm font-medium tracking-wide">
              <a href="#home" className="text-neutral-900 hover:text-neutral-500 transition-colors uppercase relative">
                首页
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neutral-900"></span>
              </a>
              <a href="#portfolio" className="hover:text-neutral-500 transition-colors uppercase">作品</a>
              <a href="#about" className="hover:text-neutral-500 transition-colors uppercase">关于</a>
              <a href="#experience" className="hover:text-neutral-500 transition-colors uppercase">经历</a>
              <a href="#contact" className="hover:text-neutral-500 transition-colors uppercase">联系</a>
            </div>
            
            <a href="#contact" className="hidden md:block border border-neutral-300 px-4 py-1 text-sm hover:bg-neutral-50 transition-colors">联系我</a>
          </div>
        </nav>
        
        {/* Main Content */}
        <main role="main">
          {/* Hero Section */}
          <section id="home" className="pt-20 md:pt-32 min-h-screen flex flex-col justify-center items-center px-6 bg-gray-100">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-center text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {personalInfo.title}
            </motion.p>
            
            <motion.p 
              className="text-center max-w-2xl mb-10 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.button
              className="bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition-colors"
              onClick={handleExploreClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              查看作品
            </motion.button>
          </section>
          
          {/* Portfolio Section */}
          <section id="portfolio" className="py-20 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">精选作品</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-gray-500">{project.category}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* About Section */}
          <section id="about" className="py-20 px-6 bg-gray-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">关于我</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                      alt="建筑师头像"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg mb-6">
                    我是李建筑，一名拥有8年经验的高级建筑设计师。我专注于将可持续发展理念与当代美学相结合，擅长使用参数化设计工具解决复杂的形态构建问题。
                  </p>
                  
                  <p className="text-lg mb-8">
                    我相信每一个项目都有其独特的"场地精神"（Genius Loci），设计师的任务就是去发现并强化它。通过我的作品，我致力于创造既美观又实用的空间，为用户带来身临其境的体验。
                  </p>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">核心技能</h3>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-base font-medium">{skill.icon} {skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-gray-800 h-2.5 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Experience Section */}
          <section id="experience" className="py-20 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">工作经历</h2>
              
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  {/* 时间线 */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      className="relative pl-12 pb-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* 时间点 */}
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-white border-4 border-gray-800 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-sm text-gray-500 mb-1">{exp.year}</div>
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <div className="text-base text-gray-700 mb-2">{exp.company} · {exp.location}</div>
                        <p className="text-gray-600">{exp.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="py-20 px-6 bg-gray-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">联系我</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6">联系信息</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">邮箱</h4>
                        <p className="text-gray-600">{contactInfo.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">电话</h4>
                        <p className="text-gray-600">{contactInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">地址</h4>
                        <p className="text-gray-600">{contactInfo.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-4">关注我</h3>
                    <div className="flex space-x-4">
                      <a href={contactInfo.social.github} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href={contactInfo.social.linkedin} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={contactInfo.social.instagram} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6">发送消息</h3>
                  
                  <form className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium mb-1">姓名</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-1">邮箱</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-1">消息</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      发送消息
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="py-8 px-6 bg-black text-white">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} L.ARCH. 保留所有权利。</p>
          </div>
        </footer>
      </div>
      
      {/* Loading Overlay */}
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

export default Home;