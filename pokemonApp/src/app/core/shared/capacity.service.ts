import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapacityService {

  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  getCapacities(): Observable<any>{
    return this.http.get(`${this.baseUrl}/capacities`)
  }

  addCapacity(capacity): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/capacities`, capacity);
  }
}
