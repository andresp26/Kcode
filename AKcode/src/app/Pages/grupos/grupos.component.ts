import { Component, OnInit } from '@angular/core';
import { AuthGitService } from 'src/app/service/auth-git.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  constructor(private authGitService: AuthGitService,
    private router: Router) { }

  ngOnInit() {
  }


  signOut() {
    this.authGitService.signOut();
    this.router.navigate(['/login']);
  }
}
