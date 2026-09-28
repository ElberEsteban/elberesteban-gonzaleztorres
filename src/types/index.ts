// src/types/index.ts
export interface Skill {
  name: string;
  level: number;
}

export interface KnowledgeItem {
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  description: string;
}

export interface CertificationItem {
  name: string;
  institution: string;
  year: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  details: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}