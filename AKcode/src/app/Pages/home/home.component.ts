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
  constructor(private authGitService: AuthGitService,
              private router: Router, private alertService: AlertService, private spinner: NgxSpinnerService
    ) { this.user = localStorage.getItem('Usuario');
        this.email = localStorage.getItem('Email');
      // this.authGitService.getUserData().subscribe(
    //   data => {
    //     this.user = data;
    //     console.log(data);
    //     console.log(this.user.login);
    //     this.authGitService.getReposUser(this.user.login).subscribe(
    //       data => {
    //         this.repos = data;
    //         console.log(this.repos);
    //       }
    //     );
    //   }
    // );
    }

  ngOnInit() {
    
    console.log('como acceder a los datos', this.user);
    console.log(this.repos);
    this.user = localStorage.getItem('Usuario');
    this.email = localStorage.getItem('Email');
    console.log(this.authGitService.user);
    this.alertService.success('Bienvenido');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log('finalizo');
    this.user = localStorage.getItem('Usuario');
    this.email = localStorage.getItem('Email');
 
  }

}
