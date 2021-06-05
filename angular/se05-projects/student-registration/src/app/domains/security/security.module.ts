import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { ForbiddenComponent } from './views/forbidden/forbidden.component';



@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    ForbiddenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
