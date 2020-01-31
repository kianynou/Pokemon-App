import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/core/shared/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None   
})
export class SignupComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    email: [''],
    password: [''],
    confirmPassword: [''],
    username: [''],
  }, { validator: this.checkPasswords });


  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  addUser(){
    let newUser = {
      username : this.userForm.value.username, 
      email : this.userForm.value.email,                
      password : this.userForm.value.password,     
      }
      this.userService.addUser(newUser).subscribe(
        result=>{
          console.log(result)
        }
      );  
      this.router.navigateByUrl('/pokemon/pokedex')
  }

}
