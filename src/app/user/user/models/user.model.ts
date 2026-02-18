export type Role = 'ADMIN' | 'TUTEUR' | 'ETUDIANT';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  pwd: string;
  numTel: string;
  dateNaiss: string; // ISO date
  role: Role;
  inscriptionOk: boolean;
  posterForum: boolean;
  avatar: string;

  // TUTEUR only
  CIN?: string;
  yearsOfExperience?: number;
  specialization?: string;

  // ADMIN only
  departement?: string;
  adminCIN?: string; // rename to avoid conflict with TUTEUR's CIN

  // ETUDIANT only
  level?: string;
  xp?: number;
  streak?: number;
  coins?: number;
  language?: string;
  joinDate?: string;
  bio?: string;
}
