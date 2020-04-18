import { Injectable } from '@angular/core';
import { Talent } from './talent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  talent: Set<Talent> = new Set<Talent>();
  private baseURL = 'http://localhost:3000/talent'

  constructor(private http: HttpClient) { }

  //recépurération de la liste des talents  
  getTalent(): Observable<Talent[]>{
    return this.http.get<Talent[]>(`${this.baseURL}`)
  }

//ajout d'un nouveau talent dans la base de donnée

  addTalent(newTalent: Talent): Observable<any> {
    return this.http.post<any>(`${this.baseURL}`, newTalent)
  }



}
