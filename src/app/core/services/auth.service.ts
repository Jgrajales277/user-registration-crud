import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afStore: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router
  ) {}

  signIn(user: User) {
    const { email, password } = user;
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
        // this.router.navigateByUrl('/members');
        this.router.navigate(['/Members']);

      });
  }

  signUp(user: User) {

    const {email, password, fullName} = user;
    return this.afAuth
      .createUserWithEmailAndPassword(email, password).then((resp) => {
        console.log(resp);
      }).catch((error) => {
        console.error(error);
      })
  }
}
