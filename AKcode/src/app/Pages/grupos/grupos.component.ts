import { Component, OnInit } from '@angular/core';
import { AuthGitService } from 'src/app/service/auth-git.service';
import { Router } from '@angular/router';
import { GrupoService } from '../../service/grupo.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Grupo } from 'src/app/Models/Grupo.class';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  public grupos: Grupo[] = [];
  constructor(private router: Router, public _serviceGrupo: GrupoService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this._serviceGrupo.getAll().pipe(
    finalize(() => {

    }))
    .subscribe(
        (data: Grupo[]) => {
          console.log(data);
          this.grupos = data;
          this.spinner.hide();
        },
        err => {
          console.log(err);
        }
    );
    console.log(this.grupos);
  }


}
