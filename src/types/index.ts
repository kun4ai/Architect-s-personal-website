export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  featured?: boolean;
  year?: string;
  location?: string;
  area?: string;
  status?: 'completed' | 'ongoing' | 'planned';
}

export interface Experience {
  id: number;
  year: string;
  startYear?: string;
  endYear?: string;
  role: string;
  position?: string;
  company: string;
  location?: string;
  desc: string;
  description?: string;
  achievements?: string[];
  technologies?: string[];
  url?: string;
}

export interface Skill {
  name: string;
  level: number;
  category?: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  social: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  quote: string;
  avatar: string;
  resume: string;
  location: string;
  experience: string;
  projects: string;
  skills: Skill[];
}

export interface NavItem {
  name: string;
  id: string;
  href?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
}

export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
  progress?: number;
}