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
  Grupo: any;
  
  constructor(private router: Router, public _serviceGrupo: GrupoService,
    private spinner: NgxSpinnerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.Grupo = new Grupo();
    this.route.params.subscribe(parametros => {
      this.KeyGrupo = parametros['id'];
      this._serviceGrupo.GetById(parametros['id']).pipe(
           ).subscribe((data) => {
              this.Grupo = data;
              console.log(this.Grupo);
              this.ValidaSeguidor();
          });
    });
  }

  ValidaSeguidor() {
    // this.Grupo.seguidores
  }

  AddSeguidor() {
     this._serviceGrupo.addSeguidor(localStorage.getItem('Usuario'), this.KeyGrupo);
  }


}
