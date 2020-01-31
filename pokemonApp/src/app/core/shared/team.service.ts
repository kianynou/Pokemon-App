import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  addTeam(team): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/teams/create`, team);
  }
  
  getAllTeams(): Observable<any>{
    return this.http.get(`${this.baseUrl}/teams`);
  }

  deleteTeam(team){
    return this.http.delete<Team>(`${this.baseUrl}/teams/${team.id}`);
  }

}
