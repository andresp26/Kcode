import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GrupoService } from '../../service/grupo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Grupo } from '../../Models/Grupo.class';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  KeyGrupo = '';
  Grupo = new Grupo();
  
  constructor(private router: Router, public _serviceGrupo: GrupoService,
    private spinner: NgxSpinnerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.KeyGrupo = parametros['id'];
      this._serviceGrupo.GetById(parametros['id']).pipe(
           ).subscribe((data: Grupo) => {
              this.Grupo = data;
              console.log(this.Grupo);
              this.ValidaSeguidor();
          });
    });
  }

  ValidaSeguidor() {
    // this.Grupo.Seguidore
  }

  AddSeguidor() {
     this._serviceGrupo.addSeguidor(localStorage.getItem('Usuario'), this.KeyGrupo);
  }


}
