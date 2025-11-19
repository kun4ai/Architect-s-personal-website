import { PersonalInfo, ContactInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "李建筑",
  title: "高级建筑设计师",
  tagline: "构建空间 · 重塑生活",
  bio: [
    "拥有 8 年专业建筑设计经验，专注于将可持续发展理念与当代美学相结合。我擅长使用参数化设计工具（Rhino/Grasshopper）来解决复杂的形态构建问题，同时也注重施工图的精确落地。",
    "在我的职业生涯中，我参与了从大型城市综合体到私人定制住宅的各类项目。我相信每一个项目都有其独特的'场地精神'（Genius Loci），设计师的任务就是去发现并强化它。"
  ],
  quote: "建筑不仅是空间的容器，更是光与时间的艺术。",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  resume: "/resume.pdf",
  location: "中国 上海",
  experience: "8+",
  projects: "50+",
  skills: [
    { name: "Autodesk Revit / BIM", level: 95, category: "BIM/CAD", icon: "🏗️" },
    { name: "Rhino + Grasshopper", level: 90, category: "参数化设计", icon: "🦏" },
    { name: "Adobe Creative Suite", level: 85, category: "可视化", icon: "🎨" },
    { name: "Lumion / Enscape / V-Ray", level: 90, category: "可视化", icon: "🌅" },
    { name: "AutoCAD", level: 95, category: "BIM/CAD", icon: "📐" },
    { name: "SketchUp", level: 88, category: "建模", icon: "🏠" }
  ]
};

export const contactInfo: ContactInfo = {
  email: "hello@l-arch.com",
  phone: "+86 138 0013 8000",
  address: "上海市黄浦区南京东路100号",
  social: {
    github: "https://github.com/l-arch",
    linkedin: "https://linkedin.com/in/l-arch",
    instagram: "https://instagram.com/l.arch.studio",
    website: "https://l-arch.com"
  }
};