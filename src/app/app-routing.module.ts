import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './security/signin/signin.component';
import { RegisterComponent } from './security/register/register.component';

//Importar componentes CRUD
import { MembersComponent } from './pages/members/members.component';
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";


const app_routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'members', component: MembersComponent},
  { path: 'create', component:CreateComponent},
  { path: 'edit/:id', component:EditComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],

  exports: [RouterModule],
})
export class ApproutingModule {}
