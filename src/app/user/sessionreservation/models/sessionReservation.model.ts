export interface Session {
  id: number;
  title: string;
  level: string;
  date: string;
  time: string;
  duration: string;
  readinessScore: number;
  status: 'UPCOMING' | 'COMPLETED' | 'MISSED';
  image: string;
  tip: string;
}

export interface Certification {
  id: number;
  title: string;
  subtitle: string;
  status: 'passed' | 'active' | 'locked';
  progress?: string;
  date?: string;
  estimatedExam?: string;
  icon: string;
}

export interface PracticeItem {
  id: number;
  title: string;
  description: string;
  color: string;
}
