import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './Shared/footer/footer.component';
<<<<<<< HEAD
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
=======
import { GruposComponent } from './Pages/grupos/grupos.component';
<<<<<<< HEAD
import { CrearGrupoComponent } from './Pages/crear-grupo/crear-grupo.component';
=======
>>>>>>> 9fb4dfada048a0c46598fe163ccaddbeb140301c
>>>>>>> f08d1c1d1de3f542079f09fbb533cfa424905eea

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    GruposComponent,
    CrearGrupoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
