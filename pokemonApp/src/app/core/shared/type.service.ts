import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getTypes(): Observable<any>{
    return this.http.get(`${this.baseUrl}/types`)
  }

  addType(type): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/types`, type);
  }
}
