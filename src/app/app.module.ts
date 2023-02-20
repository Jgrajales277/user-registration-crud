
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

  
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    HttpClientModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


