export type ProjectCategory = 'AI & Deep Learning' | 'Web Systems' | 'Mobile Applications' | 'Microservices & Tools' | 'Experimental';

export type StageDifficulty = 'NORMAL' | 'ADVANCED' | 'HARD' | 'ELITE';

export interface ProjectDossier {
  id: string;
  stageNumber: string; // e.g. "STAGE 17-1"
  title: string;
  subtitle: string;
  category: ProjectCategory;
  difficulty: StageDifficulty;
  stars: number; // 1 to 5
  status: 'PUBLISHED' | 'COMPLETED' | 'IN DEVELOPMENT' | 'LIVE PRODUCTION' | 'CLEARED';
  summary: string;
  description: string;
  technicalObjectives: string[];
  metrics: { label: string; value: string }[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  unlocked?: boolean;
  date: string;
  nodePosition: { x: number; y: number }; // Percentage 0-100 on tactical board
}

export type SkillCategory = 'WEAPONS' | 'ARMOR' | 'KEY ITEMS' | 'ORIGINIUM ARTS';

export interface SkillModule {
  id: string;
  name: string;
  category: SkillCategory;
  rarity: '★★★★☆' | '★★★★★' | '★★★★★★';
  tierName: 'INTERMEDIATE' | 'ADVANCED' | 'ELITE' | 'EPIC';
  description: string;
  statModifiers: { stat: string; value: string }[];
  equipped: boolean;
  iconName: string;
}

export interface OperationLogItem {
  code: string; // e.g. "OP-EDU-01"
  type: 'MAIN OPERATION' | 'SIDE OPERATION';
  category: 'EDUCATION' | 'CERTIFICATION' | 'EXPERIENCE' | 'COMPETITION';
  title: string;
  institution: string;
  period: string;
  progress: string; // e.g. "1/1 CLEARED"
  scoreOrAward: string;
  description: string[];
  rewards: string[];
}

export interface OperatorProfile {
  name: string;
  callsign: string;
  codename: string;
  classType: string;
  subClass: string;
  rarityStars: number;
  level: number;
  currentExp: number;
  maxExp: number;
  sanity: string; // "135/135"
  trust: string; // "200%"
  location: string;
  email: string;
  phone: string;
  github: string;
  portfolioUrl: string;
  statusBadge: string;
  headline: string;
  summary: string;
}

export interface LoreDialogue {
  speaker: string;
  paragraph: string;
  chapterTag: string;
}
