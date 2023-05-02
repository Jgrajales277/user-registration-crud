import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  user: User = {email:"", password:""};
  constructor(private auth: AuthService, private router: Router) {}

  signIn(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.auth.signIn(this.user);
    
  }
}
