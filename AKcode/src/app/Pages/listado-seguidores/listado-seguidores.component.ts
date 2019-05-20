import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GrupoService } from '../../service/grupo.service';
import { Grupo } from '../../Models/Grupo.class';
import { AuthGitService } from '../../service/auth-git.service';



@Component({
  selector: 'app-listado-seguidores',
  templateUrl: './listado-seguidores.component.html',
  styleUrls: ['./listado-seguidores.component.css']
})
export class ListadoSeguidoresComponent implements OnInit {

KeyGrupo='';
Grupo: any;
Usuarios:String[]=[];
repos: any[]=[];
IdUsuario='';
EmailUsuario='';

  constructor(private router: Router,private route: ActivatedRoute,public _serviceGrupo: GrupoService,public authGitService: AuthGitService) { }

  ngOnInit() {
    this.Grupo= new Grupo();
    this.route.params.subscribe(parametros => {

      this.KeyGrupo = parametros['id'];
      this.IdUsuario=localStorage.getItem('Usuario');
      this.EmailUsuario=localStorage.getItem('Email');
      this._serviceGrupo.GetById(parametros['id']).pipe(
        ).subscribe((data) => {
           this.Grupo = data;
           this.Usuarios=this.obtenerSeguidores(this.Grupo.seguidores);
           this.Usuarios.forEach((valor:string)=>{
                  this.repos[valor]=this.consultarRepositorios(valor);
          });
          console.log(this.repos);


       });
    });
  }

  consultarRepositorios(username){
    let repositorios:String[]=[]
    this.authGitService.getReposUser(username)
    .pipe().subscribe(
          data => {
          data.forEach(repositorio =>{
            repositorios.push(repositorio.name);
        

          });
        },
          err => {
            console.log(err);
        }
    );

    return repositorios;
  }


  obtenerSeguidores(seguidores){
    let usuarios=[];
    let keys=Object.keys(seguidores);
    keys.forEach(function(value){
      usuarios.push(seguidores[value].username);
    });
    return usuarios;

  }
}
