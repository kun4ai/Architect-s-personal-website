import { PortfolioProject } from '@/types';

export const portfolioData: PortfolioProject[] = [
  {
    id: 1,
    title: "云端美术馆",
    category: "公共建筑",
    image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1000&auto=format&fit=crop",
    description: "位于山顶的现代艺术中心，利用自然光影与混凝土的极简对话。",
    tags: ["Rhino", "V-Ray", "Sustainability"],
    featured: true,
    year: "2023",
    location: "成都",
    area: "8,500㎡",
    status: "completed"
  },
  {
    id: 2,
    title: "森之私宅",
    category: "住宅设计",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
    description: "与自然共生的独栋住宅，探索木材与玻璃的边界。",
    tags: ["Revit", "Lumion", "Residential"],
    featured: true,
    year: "2023",
    location: "杭州",
    area: "320㎡",
    status: "completed"
  },
  {
    id: 3,
    title: "未来方舟",
    category: "商业综合体",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop",
    description: "集办公、休闲于一体的城市地标，强调垂直绿化系统。",
    tags: ["Grasshopper", "Eco-design", "Urban"],
    featured: true,
    year: "2022",
    location: "深圳",
    area: "45,000㎡",
    status: "ongoing"
  },
  {
    id: 4,
    title: "旧厂房改造",
    category: "城市更新",
    image: "https://images.unsplash.com/photo-1558435186-d31d1366727e?q=80&w=1000&auto=format&fit=crop",
    description: "保留工业遗迹的同时注入现代办公功能，新旧材质的碰撞。",
    tags: ["Renovation", "Interior", "SketchUp"],
    featured: false,
    year: "2022",
    location: "上海",
    area: "2,800㎡",
    status: "completed"
  },
  {
    id: 5,
    title: "极简书屋",
    category: "室内设计",
    image: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1000&auto=format&fit=crop",
    description: "以纯白为基调的阅读空间，利用漫反射光营造静谧氛围。",
    tags: ["Interior", "Lighting", "Minimalism"],
    featured: false,
    year: "2021",
    location: "北京",
    area: "180㎡",
    status: "completed"
  },
  {
    id: 6,
    title: "滨海剧院",
    category: "公共建筑",
    image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=1000&auto=format&fit=crop",
    description: "流线型外立面呼应海浪形态，拥有世界级的声学设计。",
    tags: ["Parametric", "Acoustics", "Culture"],
    featured: true,
    year: "2021",
    location: "青岛",
    area: "12,000㎡",
    status: "completed"
  }
];

export const getCategories = (): string[] => {
  const categories = ["全部", ...new Set(portfolioData.map(item => item.category))];
  return categories;
};

export const getFilteredPortfolio = (activeFilter: string): PortfolioProject[] => {
  if (activeFilter === "全部") {
    return portfolioData;
  }
  return portfolioData.filter(item => item.category === activeFilter);
};

export const getFeaturedProjects = (): PortfolioProject[] => {
  return portfolioData.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  return portfolioData.filter(project => project.category === category);
};