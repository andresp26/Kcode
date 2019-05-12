import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { FormsModule } from '@angular/forms';
import { GrupoComponent } from './components/grupo/grupo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    SearchbarComponent,
    FiltroPipe,
    GrupoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    SearchbarComponent,
    FiltroPipe
  ]
})
export class SearchbarModule { }
