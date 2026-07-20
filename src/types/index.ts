export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string;
  category: "AI/ML" | "Full-Stack" | "NLP" | "Systems";
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  org: string;
  date: string;
  points: string[];
}

export interface EducationItem {
  school: string;
  program: string;
  date: string;
  score: string;
  extra?: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  placeholder: boolean;
}
