import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from 'src/app/domains/security/views/forbidden/forbidden.component';
import { HomeComponent } from 'src/app/domains/security/views/home/home.component';
import { SignInComponent } from 'src/app/domains/security/views/sign-in/sign-in.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: '', redirectTo: '/public/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
