// 个人基本信息
export const personalInfo = {
  name: "李明",
  title: "资深建筑师",
  bio: "我是一位专注于现代建筑设计理念的建筑师，拥有超过8年的建筑设计与项目管理经验。我擅长将创新的设计思维与实用的功能需求相结合，为客户创造既美观又实用的建筑作品。",
  email: "li.ming@email.com",
  phone: "+86 138-8888-8888",
  location: "北京市朝阳区",
  avatar: "/images/avatar.jpg",
  website: "https://li-ming-arch.com",
  social: {
    linkedin: "https://linkedin.com/in/li-ming-arch",
    instagram: "https://instagram.com/li.ming.arch",
    weibo: "https://weibo.com/liming-arch"
  }
};

// 技能信息
export const skills = [
  { name: "建筑概念设计", level: 95 },
  { name: "空间规划", level: 90 },
  { name: "建筑信息建模 (BIM)", level: 88 },
  { name: "项目管理和团队协作", level: 92 },
  { name: "可持续建筑设计和绿色建筑", level: 85 },
  { name: "建筑法规和标准", level: 80 },
  { name: "客户沟通和需求分析", level: 90 },
  { name: "建筑材料选择和应用", level: 87 }
];

// 统计数据
export const stats = {
  completedProjects: 50,
  awards: 5,
  yearsExperience: 8,
  clientSatisfaction: 98
};

// 工作经验
export const experience = [
  {
    id: "1",
    position: "高级建筑师",
    company: "北京建筑设计研究院",
    startYear: 2021,
    endYear: null,
    location: "北京",
    description: "负责大型住宅和商业建筑项目设计，与客户进行需求沟通，制定设计方案并协调项目执行。同时指导初级建筑师，提升团队整体专业水平。",
    achievements: [
      "主导设计北京CBD核心区商业综合体项目",
      "获得LEED金级认证绿色建筑",
      "带领团队完成多个亿元级项目"
    ],
    technologies: ["AutoCAD", "Revit", "SketchUp", "3ds Max", "Adobe Creative Suite"],
    url: "https://bj-design-institute.com"
  },
  {
    id: "2", 
    position: "建筑师",
    company: "上海现代建筑设计集团",
    startYear: 2018,
    endYear: 2021,
    location: "上海",
    description: "参与各类建筑项目的设计工作，包括住宅、商业和公共建筑设计。负责方案设计、施工图设计以及现场技术支持。",
    achievements: [
      "参与设计的上海市中心高层住宅项目获得行业奖项",
      "成功完成5个项目的竣工验收",
      "协调多专业团队，确保项目按时按质完成"
    ],
    technologies: ["AutoCAD", "SketchUp", "Photoshop", "Illustrator"],
    url: "https://smedi.com.cn"
  },
  {
    id: "3",
    position: "建筑设计师",
    company: "深圳华森建筑与工程设计顾问有限公司",
    startYear: 2016,
    endYear: 2018,
    location: "深圳",
    description: "负责中小型住宅和商业项目的建筑设计工作，包括前期调研、概念设计、方案深化和施工图设计。",
    achievements: [
      "独立完成10+个中小型建筑项目",
      "提出的绿色建筑方案获得客户高度认可",
      "协助公司建立标准化设计流程"
    ],
    technologies: ["AutoCAD", "SketchUp", "Office Suite"],
    url: "https://huasen.com.cn"
  }
];

// 教育背景
export const education = [
  {
    degree: "建筑学硕士",
    school: "清华大学建筑学院",
    period: "2014 - 2016",
    description: "专攻建筑设计理论与方法，研究方向为现代住宅建筑设计。完成关于'可持续住宅社区设计'的学位论文。"
  },
  {
    degree: "建筑学学士",
    school: "北京建筑工程学院",
    period: "2010 - 2014", 
    description: "系统学习建筑设计基础理论、建筑结构、建筑材料、建筑物理等专业知识。毕业设计获得优秀毕业设计奖。"
  }
];

// 认证信息
export const certifications = [
  {
    name: "注册建筑师",
    issuer: "中华人民共和国住房和城乡建设部",
    date: "2019",
    description: "一级注册建筑师执业资格证书"
  },
  {
    name: "LEED AP BD+C",
    issuer: "美国绿色建筑委员会",
    date: "2020",
    description: "LEED AP建筑设计施工认证专家"
  },
  {
    name: "BIM认证",
    issuer: "Autodesk",
    date: "2018",
    description: "Revit专业认证"
  }
];

// 作品集项目
export const portfolioProjects = [
  {
    id: "1",
    title: "北京 CBD 商业综合体",
    category: "商业建筑",
    year: 2023,
    client: "北京CBD开发集团",
    location: "北京市朝阳区",
    area: "85,000㎡",
    description: "一座集商业、办公、酒店于一体的大型商业综合体。采用现代简约的设计风格，注重空间的功能性和美观性。",
    image: "/images/project1.jpg",
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg", "/images/project1-3.jpg"],
    features: [
      "现代化商业空间设计",
      "绿色建筑认证",
      "智能化管理系统",
      "多功能办公区域"
    ],
    technologies: ["Revit", "SketchUp", "3ds Max", "AutoCAD"],
    status: "completed",
    link: "https://project1.example.com"
  },
  {
    id: "2",
    title: "上海滨江高端住宅",
    category: "住宅建筑", 
    year: 2022,
    client: "上海滨江置业",
    location: "上海市浦东新区",
    area: "45,000㎡",
    description: "坐落于黄浦江畔的高端住宅项目，注重居住环境品质和空间舒适度。采用先进的建筑设计理念，打造智能化绿色住宅。",
    image: "/images/project2.jpg",
    images: ["/images/project2-1.jpg", "/images/project2-2.jpg", "/images/project2-3.jpg"],
    features: [
      "江景视野优化设计",
      "绿色建筑三星认证",
      "智能家居系统",
      "地下两层停车库"
    ],
    technologies: ["Revit", "SketchUp", "Photoshop"],
    status: "completed",
    link: "https://project2.example.com"
  },
  {
    id: "3",
    title: "深圳科技园区办公楼",
    category: "办公建筑",
    year: 2021,
    client: "深圳科技发展集团",
    location: "深圳市南山区", 
    area: "60,000㎡",
    description: "为科技公司设计的现代化办公楼，强调灵活的工作空间和协作环境。建筑外观采用简约现代设计，内部空间布局灵活多变。",
    image: "/images/project3.jpg",
    images: ["/images/project3-1.jpg", "/images/project3-2.jpg"],
    features: [
      "开放式办公空间",
      "灵活隔断设计", 
      "屋顶花园",
      "环保节能系统"
    ],
    technologies: ["AutoCAD", "SketchUp", "Rhino", "Illustrator"],
    status: "completed",
    link: "https://project3.example.com"
  },
  {
    id: "4",
    title: "广州文化中心",
    category: "公共建筑",
    year: 2020,
    client: "广州市政府",
    location: "广州市天河区",
    area: "32,000㎡",
    description: "集图书馆、展览厅、演艺厅于一体的文化建筑。设计灵感来源于岭南传统文化元素，打造具有地域特色的现代文化空间。",
    image: "/images/project4.jpg",
    images: ["/images/project4-1.jpg", "/images/project4-2.jpg", "/images/project4-3.jpg"],
    features: [
      "岭南文化元素融入",
      "多功能文化空间",
      "自然采光优化",
      "声学设计专业"
    ],
    technologies: ["Revit", "SketchUp", "Photoshop", "InDesign"],
    status: "completed", 
    link: "https://project4.example.com"
  },
  {
    id: "5",
    title: "杭州民宿度假村",
    category: "度假建筑",
    year: 2019,
    client: "杭州生态旅游公司",
    location: "杭州市西湖区",
    area: "15,000㎡", 
    description: "位于西湖景区的精品民宿度假村，结合当地自然环境和人文特色，打造独特的度假体验空间。",
    image: "/images/project5.jpg",
    images: ["/images/project5-1.jpg", "/images/project5-2.jpg"],
    features: [
      "生态建筑设计",
      "传统与现代结合",
      "自然材料运用",
      "景观与建筑融合"
    ],
    technologies: ["SketchUp", "AutoCAD", "Photoshop"],
    status: "completed",
    link: "https://project5.example.com"
  },
  {
    id: "6",
    title: "成都医疗中心",
    category: "医疗建筑", 
    year: 2018,
    client: "成都市卫健委",
    location: "成都市锦江区",
    area: "95,000㎡",
    description: "大型综合医疗中心，设计注重医疗功能的专业性和患者就医体验。采用人性化设计理念，优化医疗流程和空间布局。",
    image: "/images/project6.jpg",
    images: ["/images/project6-1.jpg", "/images/project6-2.jpg", "/images/project6-3.jpg"],
    features: [
      "医疗流程优化",
      "无障碍设计",
      "感染控制标准",
      "智能化医疗系统"
    ],
    technologies: ["Revit", "AutoCAD", "SketchUp"],
    status: "completed",
    link: "https://project6.example.com"
  }
];

// 设计理念
export const designPhilosophy = {
  title: "我的设计理念",
  content: "建筑不仅仅是空间的设计，更是人与环境、传统与现代、功能与美学之间的对话。我坚信好的建筑设计应该在满足功能需求的同时，创造出能够触动人心、启发思考的空间体验。\n\n在我的设计实践中，我始终坚持以人为本的理念，深入理解用户的需求和期望。同时，我也非常注重可持续发展，努力将绿色建筑理念融入到每一个项目中，创造既美观又环保的建筑作品。\n\n我认为建筑应该有灵魂，它不仅要与周围环境和谐共存，更要能够反映出使用者的品味和追求。通过精心的空间布局、材质选择和光线设计，我希望能为每一个项目创造独特的个性魅力。"
};

// 联系信息
export const contactInfo = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  address: personalInfo.location,
  social: personalInfo.social,
  workingHours: "周一至周五 9:00-18:00",
  responseTime: "24小时内回复",
  availability: "开放接受新项目合作"
};