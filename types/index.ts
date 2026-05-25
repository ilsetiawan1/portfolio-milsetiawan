export interface Project {
  id: number;
  title: string;
  description_id: string;
  description_en: string;
  image: string;
  date_id: string;
  date_en: string;
  techStack: string[];
  liveUrl: string | null;
  githubUrl: string;
  isDeployed: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface SocialLink {
  platform: string;
  url: string;
}
