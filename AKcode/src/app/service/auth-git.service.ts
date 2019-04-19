import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGitService {

  constructor(public fbAuth: AngularFireAuth,
              private router: Router,
    ) { }

  signIn() {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    console.log('Estoy en el provider');
    this.fbAuth.auth.signInWithPopup(provider)
    .then(result => {
      this.router.navigate(['/Inicio']);
    })
    .catch(err => {
      console.log(err);
    });
  }


  signOut() {
  return this.fbAuth.auth.signOut();
}

}
