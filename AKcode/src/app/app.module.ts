import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { GruposComponent } from './Pages/grupos/grupos.component';
import { CrearGrupoComponent } from './Pages/crear-grupo/crear-grupo.component';
//firebase
import { AngularFireAuthModule } from '@angular/fire/auth';//'angularfire2/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';//'angularfire2/firestore';
import { AngularFireModule } from '@angular/fire'; //'angularfire2';
import { environment } from '../environments/environment';
import { AuthGitService } from './service/auth-git.service';
import { ConnectViewComponent } from './Pages/connect-view/connect-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    GruposComponent,
    CrearGrupoComponent,
    ConnectViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [AuthGitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
