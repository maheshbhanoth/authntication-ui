import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl='http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  register(userData: any){
    return this.http.post('${this.baseUrl}/register', userData);
  }
}
