import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  makeAuthenticatedRequest(method: string, endpoint: string, data: any) {
    const headers = new HttpHeaders();

    if (this.getAuthToken() !== null) {
      headers.set('Authorization', `Bearer ${this.getAuthToken()}`);
    }

    const options = {
      headers: headers,
      body: data
    };

    const url = `${this.apiUrl}/${endpoint}`;

    return this.http.request(method, url, options);
  }
  isAuthenticated(): boolean {
    const token = window.localStorage.getItem('auth_token'); 

    return !!token; 
  }
}
