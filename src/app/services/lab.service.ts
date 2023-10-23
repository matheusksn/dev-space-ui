import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lab } from '../components/models/lab';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  private apiBaseUrl = 'http://localhost:8080/api/labs';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllLabs(): Observable<Lab[]> {

    return this.http.get<Lab[]>(`${this.apiBaseUrl}`);
  }

  getLabById(id: number): Observable<Lab> {
    return this.http.get<Lab>(`${this.apiBaseUrl}/${id}`);
  }

  createLab(lab: Lab): Observable<Lab> {
    return this.http.post<Lab>(`${this.apiBaseUrl}`, lab);
  }

  updateLab(id: number, lab: Lab): Observable<Lab> {
    return this.http.put<Lab>(`${this.apiBaseUrl}/${id}`, lab);
  }

  deleteLab(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/${id}`);
  }
}
