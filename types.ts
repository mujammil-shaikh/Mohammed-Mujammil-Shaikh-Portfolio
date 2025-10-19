
export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolio: string;
    leetcode: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  anonymized?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Award {
  title: string;
  issuer: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface LeetCodeStats {
  solved: string;
  acceptance: string;
  easy: string;
  medium: string;
  hard: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}
