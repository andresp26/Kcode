import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireStorage} from 'angularfire2/storage';
import { Grupo } from '../Models/Grupo.class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Publicacion } from '../Models/Publicacion.class';
@Injectable({
  providedIn: 'root'
})
export class GrupoService {


  constructor(private angularFireDataBase: AngularFireDatabase,
              private angularFireStorage: AngularFireStorage) { }

  getAll(): Observable<any[]> {
    return this.angularFireDataBase.list('/grupos').snapshotChanges().pipe(
      map(changues => changues.map(c =>  ({Key : c.payload.key , ...c.payload.val()})))
    );
  }

  GetById(id)  {
    return this.angularFireDataBase.object('/grupos/' + id).valueChanges();
  }

  add(_grupo: Grupo) {
     return this.angularFireDataBase.database.ref('/grupos').push(_grupo);
  }

  // addPublicacion(_publicacion: Publicacion) {
  //   return this.angularFireDataBase.database.ref('/comentarios').push(_publicacion);
  // }

  addSeguidor(usuario: string , id: string) {
    return this.angularFireDataBase.list('/grupos/' + id + '/seguidores').push( { username: usuario});
  }

  GetSeguirGrupo(idgrupo: string)  {
    return this.angularFireDataBase.object('/grupos' + idgrupo).valueChanges();
  }

  addPublicacion(publicacion: any,  id: string) {
    return this.angularFireDataBase.database.ref('/grupos/' + id + '/publicaciones').push(publicacion);
  }

  GetPublicaciones(idgrupo: string) : Observable<any[]>  {
    return this.angularFireDataBase.list('/grupos/' + idgrupo + '/publicaciones/').snapshotChanges().pipe(
      map(changues => changues.map(c =>  ({Key : c.payload.key , ...c.payload.val()})))
    );
  }

  deleteSeguidor(identificadorSeguidor, idGrupo){
    return  this.angularFireDataBase.list('/grupos/' + idGrupo + '/seguidores/' + identificadorSeguidor).remove();
  }


  addComentario(idgrupo,idpubli, comentario) {
    return this.angularFireDataBase.database.ref('/grupos/' + idgrupo + '/publicaciones/' + idpubli + '/comentarios').push(comentario);
  }

  GetComentarios(idgrupo,idpubli) : Observable<any[]>  {
    return this.angularFireDataBase.list('/grupos/' + idgrupo + '/publicaciones/' + idpubli + '/comentarios').snapshotChanges().pipe(
      map(changues => changues.map(c =>  ({Key : c.payload.key , ...c.payload.val()})))
    );
  }

}
