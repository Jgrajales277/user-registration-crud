import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngresoComponent } from './security/ingreso/ingreso.component';
import { RegistroComponent } from './security/registro/registro.component';
import { ProductsComponent } from './pages/products/products.component';

const app_routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productos', component: ProductsComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],

  exports: [RouterModule],
})
export class ApproutingModule {}
