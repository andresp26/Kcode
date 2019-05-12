import { GrupoService } from './../../service/grupo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  grupos: any[] = [];
  textoBuscar = '';
  vacio = false;
  constructor(private _serviceGrupo: GrupoService) { }

  ngOnInit() {
    this._serviceGrupo.getAll().pipe(
      ).subscribe(
          (data) => {
            data.forEach( infoGrupo => {
              let grupo = { };
              grupo = infoGrupo;
              this.grupos.push(grupo);
            });
          },
          err => {
            console.log(err);
          }
        );
  }

  buscar( event ) {
    this.textoBuscar = event.target.value;
    this.vacio = true;
    if ( this.textoBuscar === '') {
      this.vacio = false;
    }
  }
}
