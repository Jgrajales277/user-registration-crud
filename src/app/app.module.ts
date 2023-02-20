
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

//rutas

import { AppComponent } from './app.component';
import { IngresoComponent } from './security/ingreso/ingreso.component';
import { RegistroComponent } from './security/registro/registro.component';
import { ApproutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';

  
@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    RegistroComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
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


