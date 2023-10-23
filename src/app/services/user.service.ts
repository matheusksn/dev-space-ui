import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/auth';  

  constructor(private http: HttpClient,
    private authService: AuthService
    ) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      map((response: any) => {
        if (response.token) {
          this.authService.setAuthToken(response.token);
        }
        return response;
      })
    );
  }
  completeProfile(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/completeProfile`, user);
  }

  
}
