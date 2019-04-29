import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-connect-view',
  templateUrl: './connect-view.component.html',
  styleUrls: ['./connect-view.component.css']
})
export class ConnectViewComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
  }

  
}
