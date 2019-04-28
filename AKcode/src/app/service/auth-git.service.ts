import { Injectable } from '@angular/core';
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
  urlDatosUser = 'https://api.github.com/user?access_token=';
  urlReposUser = 'https://api.github.com/users/';
  loginUser: string;
  constructor(public ghAuth: AngularFireAuth,
              private router: Router,
              private http: HttpClient
    ) { }

  signIn() {
    let provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    this.ghAuth.auth.signInWithPopup(provider)
    .then(result => {
      this.user = result.user;
      this.token = result.credential.toJSON();
      console.log('usuario en el servicio', this.token.oauthAccessToken);
      this.router.navigate(['/Inicio']);
    })
    .catch(err => {
      console.log('Se genero el siguiente error: ', err);
    });
  }

  signOut() {
  return this.ghAuth.auth.signOut();
}
getUserData() {
  return this.http.get<any>(`${ this.urlDatosUser }${ this.token.oauthAccessToken }`);
}
getReposUser(userLogin: string) {
  return this.http.get<any>(`${this.urlReposUser}${userLogin}/repos`);
}
}
