
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

//rutas

import { AppComponent } from './app.component';
import { SigninComponent } from './security/signin/signin.component';
import { RegisterComponent } from './security/register/register.component';
import { ApproutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MembersComponent } from './pages/members/members.component';

//clases para trabajar con firebase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule} from "@angular/fire/compat/firestore";

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//importar configuración de firebase
import { environment } from "src/environments/environment";
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';





@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MembersComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,

      

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


