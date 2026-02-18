import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly apiUrl = 'https://minolingo.online/api/cours';

  constructor(private http: HttpClient) {}

  // ── Courses ──

  createCours(cours: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/cours/create-cours`, cours);
  }

  getCoursById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/cours/get-cours-by-id/${id}`);
  }

  getAllCours(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/cours/get-all-cours`);
  }

  updateCours(id: number, cours: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/cours/update-cours/${id}`, cours);
  }

  deleteCours(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cours/delete-cours/${id}`);
  }

  // ── Contenus Pedagogiques ──

  createContenu(contenu: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contenus/create-contenu`, contenu);
  }

  getContenuById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/contenus/get-contenu-by-id/${id}`);
  }

  getAllContenus(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contenus/get-all-contenus`);
  }

  getContenusByCoursId(coursId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contenus/get-contenus-by-cours-id/${coursId}`);
  }

  updateContenu(id: number, contenu: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/contenus/update-contenu/${id}`, contenu);
  }

  deleteContenu(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/contenus/delete-contenu/${id}`);
  }
}
