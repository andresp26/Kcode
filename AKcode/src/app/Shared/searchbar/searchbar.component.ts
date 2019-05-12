import { GrupoService } from './../../service/grupo.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  grupos: any[] = [];
  textoBuscar = '';
  vacio = false;
  constructor(private _serviceGrupo: GrupoService,
              private spinner: NgxSpinnerService,) { }

  ngOnInit() {
    //this.spinner.show();
    this._serviceGrupo.getAll().pipe(
      ).subscribe(
          (data) => {
            data.forEach( infoGrupo => {
              let grupo = { name: ''};
              grupo.name = infoGrupo['Nombre'];
              this.grupos.push(grupo);
            //this.spinner.hide();
            });
          },
          err => {
            console.log(err);
          }
        );
  }

  buscar( event ) {
    console.log(event.target.value);
    this.textoBuscar = event.target.value;
    this.vacio = true;
    if ( this.textoBuscar === '') {
      this.vacio = false;
    }
  }
}
