import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchbarComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchbarComponent,
    FiltroPipe
  ]
})
export class SearchbarModule { }
