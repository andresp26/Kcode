import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Usuario } from '../Models/Usuario.class';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private angularFireDataBase: AngularFireDatabase,
    private angularFireStorage: AngularFireStorage) { }


    GetById(id)  {
      return this.angularFireDataBase.object('/usuarios/' + id).valueChanges();
    }

    add(_usu: Usuario) {
       return this.angularFireDataBase.object('/usuarios/' + _usu.username).set(_usu);
    }
}
