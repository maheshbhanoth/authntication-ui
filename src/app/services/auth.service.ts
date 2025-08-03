import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Use backticks for template literals
  private baseUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) {}

  // Fix string interpolation syntax
  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  healthCheck(): Observable<any> {
    return this.http.get(`${this.baseUrl}/health-check`);
  }
}