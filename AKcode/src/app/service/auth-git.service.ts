import { Injectable } from '@angular/core';
import { AngularFirestore,} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGitService {
  
  fire: any;
  gitProvider: any;
  constructor(_fireStore: AngularFirestore) { 
  this.fire = _fireStore;
  this.gitProvider = this.fire.auth.GithubAuthProvider();
  }
  


  
};
