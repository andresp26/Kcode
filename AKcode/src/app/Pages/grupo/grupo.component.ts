import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GrupoService } from '../../service/grupo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Grupo } from '../../Models/Grupo.class';
import { map } from 'rxjs/operators';
import { AlertService } from 'ngx-alerts';



@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  KeyGrupo = '';
  Grupo: any;
  CantidadSeguidores: number;
  esSeguidor:boolean;
  identificadorSeguidor:String;
  
  constructor(private router: Router, public _serviceGrupo: GrupoService,
    private spinner: NgxSpinnerService, private route: ActivatedRoute,private alertas: AlertService) { }

  ngOnInit() {
    this.Grupo = new Grupo();
    this.route.params.subscribe(parametros => {
      this.KeyGrupo = parametros['id'];
      this._serviceGrupo.GetById(parametros['id']).pipe(
           ).subscribe((data) => {
              this.Grupo = data;
              console.log(this.Grupo);
              this.esSeguidor=this.ValidaSeguidor(localStorage.getItem('Usuario'),this.Grupo.seguidores);
              if(this.esSeguidor){
                this.identificadorSeguidor=this.ObtenerIdentificadorSeguidor(localStorage.getItem('Usuario'),this.Grupo.seguidores);
              }
              this.CantidadSeguidores=Object.keys(this.Grupo.seguidores).length;

          });
    });
  }
   //Valida si un usuario es seguidor de un grupo o no 
  ValidaSeguidor(usuario,seguidores) {
      let keys=Object.keys(seguidores);
      let existe=false;
      keys.forEach(function(value){
          let usuarioTemporal=seguidores[value].username;
          if(usuarioTemporal==usuario){
               existe= true;
               
         }
      });
      return existe;

  }

     //Retorna el identificador de un documento seguidor de un grupo 
      ObtenerIdentificadorSeguidor(usuario,seguidores) {
      let keys=Object.keys(seguidores);
      let identificador=''
      keys.forEach(function(value){
          let usuarioTemporal=seguidores[value].username;
          if(usuarioTemporal==usuario){
               identificador= value;
               
         }
      });
      return identificador;

  }



  AddSeguidor() {
    if(!this.esSeguidor){
      this._serviceGrupo.addSeguidor(localStorage.getItem('Usuario'), this.KeyGrupo);
      this.alertas.success('Has seguido al grupo de forma exitosa');

    }else{
      this.alertas.danger('Ya sigues al grupo, no puedes seguirlo de nuevo');

    }
  }

  EliminarSeguidor(){
    if(this.esSeguidor){
      this._serviceGrupo.deleteSeguidor(this.identificadorSeguidor,this.KeyGrupo);
      this.alertas.success('Se dejó de seguir al grupo de forma exitosa');

    }else{
      this.alertas.danger('Ya no sigues el grupo');

    }

  }


}
