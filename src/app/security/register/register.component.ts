
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = {email: '', password:''};

  passwordVerification: string = '';


  constructor(private auth: AuthService, private router: Router ) {}


signUp(form: NgForm) {
  
  console.log(form.value);

  if(this.user.password !== this.passwordVerification) {
    return;

  }

  if(form.invalid) {
    return;
  }
    this.auth.signUp(this.user)


  }

}
