import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireStorage} from 'angularfire2/storage';
import { Grupo } from '../Models/Grupo.class';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GrupoService {


  constructor(private angularFireDataBase: AngularFireDatabase,
              private angularFireStorage: AngularFireStorage) { }

  getAll(): Observable<any[]> {
    return this.angularFireDataBase.list('/grupos').valueChanges();
  }

  add(obj: Grupo) {
     return this.angularFireDataBase.database.ref('/grupos').push(obj);
  }
}
