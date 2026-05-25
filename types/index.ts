export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
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
