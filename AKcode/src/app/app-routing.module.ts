import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CrearGrupoComponent } from './Pages/crear-grupo/crear-grupo.component';
import { GruposComponent } from './Pages/grupos/grupos.component';
import { GrupoComponent } from './Pages/grupo/grupo.component';
import { PublicacionComponent } from './Pages/publicacion/publicacion.component';
import { ListadoSeguidoresComponent } from './Pages/listado-seguidores/listado-seguidores.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'Inicio', component: HomeComponent },
  { path: 'crearGrupo', component: CrearGrupoComponent },
  { path: 'grupos', component: GruposComponent},
  { path: 'grupo/:id', component: GrupoComponent },
  //{ path: 'publicacion/:id', component: PublicacionComponent },
  { path: 'Creargrupo', component: CrearGrupoComponent},
  { path: 'listadoSeguidores/:id', component: ListadoSeguidoresComponent},

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
