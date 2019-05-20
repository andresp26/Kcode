import { Component, OnInit, Input } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
@Input() Publicacion;
  constructor(public router:Router) { }

  ngOnInit() {
  }

}
