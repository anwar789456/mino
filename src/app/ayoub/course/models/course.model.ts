export interface ContenuPedagogique {
  idContent: number;
  titleC: string;
  duration: number;
  contentType: string;
  courseId: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  content: string;
  contenus?: ContenuPedagogique[];

  // UI display fields
  image?: string;
  progress?: number;
  status?: 'in-progress' | 'next-up' | 'locked';
  unit?: number;
}
