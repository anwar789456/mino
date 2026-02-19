export interface ContenuPedagogique {
  idContent: number;
  titleC: string;
  duration: number;
  contentType: string;
  coursId: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  content: string;
  contenus?: ContenuPedagogique[];
}
