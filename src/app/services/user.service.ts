import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';  

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

 // login(credentials: any): Observable<any> {
    
 // }

  completeProfile(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/completeProfile`, user);
  }
}
