import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  @Input() grupo: any;

  constructor() { }

  ngOnInit() {
  }

}
