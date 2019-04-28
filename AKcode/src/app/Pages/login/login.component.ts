import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGitService } from '../../service/auth-git.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              public authGitService: AuthGitService
    ) { }

  ngOnInit() {
  }

  login() {
  this.authGitService.signIn();
   this.router.navigate(['/conectando']);
  }

  ValidaUsuario() {
    this.router.navigate(['/Inicio']);
  }

}
