import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CrearGrupoComponent } from './Pages/crear-grupo/crear-grupo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Inicio', component: HomeComponent },
  { path: 'crearGrupo', component: CrearGrupoComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
