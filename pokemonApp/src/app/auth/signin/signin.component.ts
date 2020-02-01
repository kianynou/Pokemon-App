import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/shared/auth.service';
import { UserService } from 'src/app/core/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private userService: UserService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password)
      .subscribe(
          results => {
          // success callback
          // load connected user profile and redirect to the list of posts
          this.userService.loadUser().subscribe(result => {
            this.router.navigateByUrl('/profil');
          })
        },
        error => {
          // error callback
          // display error messages
        }
      );
  }

}
