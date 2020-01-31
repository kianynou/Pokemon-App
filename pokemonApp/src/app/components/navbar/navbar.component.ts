import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/shared/user.service';
import { AuthService } from 'src/app/core/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router, 
    private userService: UserService, 
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.userService.disconnectedUser();
  }

}
