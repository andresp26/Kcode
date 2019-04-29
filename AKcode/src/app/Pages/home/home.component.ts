import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthGitService } from '../../service/auth-git.service';
import { RouteReuseStrategy, Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
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
  constructor(private authGitService: AuthGitService,
              private router: Router, private alertService: AlertService, private spinner: NgxSpinnerService
    ) {  }

  ngOnInit() {
    console.log('como acceder a los datos', this.user);
    console.log(this.repos);
    this.user = localStorage.getItem('Usuario');
    this.email = localStorage.getItem('Email');
    console.log(this.authGitService.user);
    this.alertService.success('Bienvenido');
    this.ConsultarRepositorios();
    this.InformacionUsurio();
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


  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log('finalizo');
    this.user = localStorage.getItem('Usuario');
    this.email = localStorage.getItem('Email');
 
  }

}
