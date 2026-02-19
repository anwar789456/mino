export interface QuizCategory {
  id: number;
  title: string;
  description: string;
  totalSets: number;
  icon: string;
}

export type QuizStatus = 'DRAFT' | 'OPEN' | 'CLOSED';

export interface Quiz {
  id: number;
  title: string;
  description: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  dateStart: string;
  dateEnd: string;
  status: QuizStatus;
  courseId: number;
  xpReward: number;
  questions: QuestionQuiz[];
}

export type QuestionType = 'MCQ' | 'TRUE_FALSE';

export interface QuestionQuiz {
  id: number;
  quizId: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  type: QuestionType;
}

export type QuizCardStatus = 'CONTINUE' | 'START' | 'LOCKED';

export interface QuizCard {
  id: number;
  title: string;
  totalQuestions: number;
  level: string;
  progress: number;
  status: QuizCardStatus;
  icon: string;
  xpRequired?: number;
}
