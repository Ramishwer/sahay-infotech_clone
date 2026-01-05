
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export interface AIResponse {
  roadmap: string[];
  techStack: string[];
  estimation: string;
  complexity: 'Low' | 'Medium' | 'High';
}
