import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './security/ingreso/ingreso.component';
import { RegistroComponent } from './security/registro/registro.component';

const app_routes: Routes = [
  { path: 'ingreso', component: IngresoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: 'ingreso', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],

  exports: [RouterModule],
})
export class ApproutingModule {}
