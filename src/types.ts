export type ThemeColor = 'amber' | 'sky' | 'emerald' | 'rose';

export interface Project {
  id: string;
  title: string;
  category: string;
  metadata: string;
  shortDescription: string;
  fullStory: string;
  image: string;
  imageAlt: string;
  tools: string[];
  keyLearnings: string[];
  awardOrFeedback?: {
    from: string;
    note: string;
  };
  interactiveType?: 'solar-rover' | 'scratch-game' | 'garden-chart';
}

export interface SkillItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  schoolExample: string;
  level: 'Exploring' | 'Practicing' | 'Confident';
}

export interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
}

export interface GuestbookCheer {
  id: string;
  authorName: string;
  role: 'Classmate' | 'Teacher' | 'Family & Friends' | 'Visitor';
  message: string;
  sticker: string;
  timestamp: string;
}

export interface StudentGoal {
  id: string;
  title: string;
  category: string;
  completed: boolean;
}
