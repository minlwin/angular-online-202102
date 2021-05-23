import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './commons/app-commons/pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'master', loadChildren: () => import('./domain/master/master.module').then(m => m.MasterModule) },
  { path: 'registration', loadChildren: () => import('./domain/registration/registration.module').then(m => m.RegistrationModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
