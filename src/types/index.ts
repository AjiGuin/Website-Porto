export type SoftwareCategory = 'AutoCAD' | 'Inventor' | 'SolidWorks' | 'Mastercam';

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  category: 'software' | 'kompetensi';
}

export interface Project {
  id: string;
  title: string;
  category: SoftwareCategory;
  image?: string;
  software: string[];
  year: number;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  skillsUsed: string[];
  thumbnailLabel: string;
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ExperienceEntry {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  tags: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialLabel: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface SocialLink {
  id: 'whatsapp' | 'email' | 'github' | 'linkedin' | 'instagram';
  label: string;
  href: string;
}
