import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'https://minolingo.online/api/users';

  constructor(private http: HttpClient) {}

  login(email: string, pwd: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, pwd }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let message = 'An unexpected error occurred. Please try again.';
    if (error.status === 0) {
      message = 'Unable to connect to the server. Please check your internet connection.';
    } else if (error.status === 401) {
      message = error.error?.message || 'Invalid email or password.';
    } else if (error.status === 400) {
      message = error.error?.message || 'Invalid request. Please check your input.';
    } else if (error.status >= 500) {
      message = 'Server error. Please try again later.';
    }
    return throwError(() => message);
  }
}
