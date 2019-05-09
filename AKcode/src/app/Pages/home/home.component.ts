import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthGitService } from '../../service/auth-git.service';
import { RouteReuseStrategy, Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from 'src/app/Models/Usuario.class';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  repos: any;
  email: any;
  seguidores = 0;
  seguidos = 0;
  constructor(private authGitService: AuthGitService, private _ususervice: UsuarioService,
              private router: Router, private alertService: AlertService, private spinner: NgxSpinnerService
    ) {  }

  ngOnInit() {
    this.user = localStorage.getItem('Usuario');
    this.email = localStorage.getItem('Email');
    this.ConsultarRepositorios();
    this.InformacionUsurio();
    this.spinner.show();
    this._ususervice.GetById(this.user).pipe().subscribe(x =>  {
      if (!x) {
        const usu: Usuario = {
          username : this.user,
          email: this.email,
          fechaingreso : new Date().toJSON().toString()
       };
       this.spinner.hide();
       this._ususervice.add(usu).then(function(success) {
        this.alertService.success('Bienvenido!!'); });
     }
    });
  }



  ConsultarRepositorios() {
    this.spinner.show();
    this.authGitService.getReposUser(this.user)
    .pipe().subscribe(
          data => {
          console.log(data);
          this.spinner.hide();
          this.repos = data;
          },
          err => {
            console.log(err);
        }
    );
  }

  InformacionUsurio() {
    this.spinner.show();
    this.authGitService.getUserData()
    .pipe().subscribe(
          data => {
          console.log(data);
          this.spinner.hide();
          this.seguidores = data.followers;
          this.seguidos = data.following;
          },
          err => {
            console.log(err);
          }
    );
  }
}
