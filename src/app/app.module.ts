
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas

import { AppComponent } from './app.component';
import { IngresoComponent } from './security/ingreso/ingreso.component';
import { RegistroComponent } from './security/registro/registro.component';
import { ApproutingModule } from './app-routing.module';


  
@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
