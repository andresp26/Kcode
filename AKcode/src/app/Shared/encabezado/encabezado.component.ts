import { Component, OnInit } from '@angular/core';
import { AuthGitService } from '../../service/auth-git.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private authGitService: AuthGitService,
    private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.authGitService.signOut();
    this.router.navigate(['/login']);
  }
}
