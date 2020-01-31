import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from './user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000';
  showMobileMenu: boolean = false;  
  connectedUser: User;
  offline: boolean = true;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
      if (this.authService.getToken()) {
        this.loadUser().subscribe(result => {
          this.connectedUser = result;  
        });
      }
    }

  addUser(user): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/register`, user);
  };

  loadUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/me`)
      .pipe(
        tap(result => {
          this.connectedUser = result;
          this.offline = false;
        })
      );
  };

  onClickMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  };

  disconnectedUser(){
    this.connectedUser =  undefined;
    this.offline= true;
  };

  getTeamsByUser(){
    return this.http.get<any[]>(`${this.baseUrl}/teams/userteams/${this.connectedUser.id}`);
  }
}
