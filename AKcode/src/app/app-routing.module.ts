import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CrearGrupoComponent } from './Pages/crear-grupo/crear-grupo.component';
import { ConnectViewComponent } from './Pages/connect-view/connect-view.component';
import { GruposComponent } from './Pages/grupos/grupos.component';

const routes: Routes = [
  //{ path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'Inicio', component: HomeComponent },
  { path: 'crearGrupo', component: CrearGrupoComponent },
  { path: 'conectando', component: ConnectViewComponent},
  { path: 'grupos', component: GruposComponent},
  { path: '**', component: LoginComponent}
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
