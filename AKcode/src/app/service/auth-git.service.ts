import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; //'@angular/fire/auth';//
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGitService {
  user: any;
  datos: any[];
  token: any;
  email: any;
  urlDatosUser = 'https://api.github.com/user?access_token=';
  urlReposUser = 'https://api.github.com/users/';
  loginUser: string;
  constructor(public ghAuth: AngularFireAuth,
              private router: Router,
              private http: HttpClient, private ngZone: NgZone
    ) { }

  signIn() {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    this.ghAuth.auth.signInWithPopup(provider)
    .then((result) => {
       localStorage.setItem('Usuario', result.additionalUserInfo.username);
       localStorage.setItem('Email', result.user.email);
       this.token = result.credential.toJSON();
       localStorage.setItem('Token', this.token.oauthAccessToken);
       this.ngZone.run(() =>
            this.router.navigate(['/Inicio'])
       );
    })
    .catch(err => {
      console.log('Se genero el siguiente error: ', err);
    });
  }

  signOut() {
    return this.ghAuth.auth.signOut();
  }

  getUserData() {
    return this.http.get<any>(`${ this.urlDatosUser }${ localStorage.getItem('Token') }`);
  }
 

  getReposUser(userLogin: string) {
    return this.http.get<any>(`${this.urlReposUser}${userLogin}/repos`);
  }
}
