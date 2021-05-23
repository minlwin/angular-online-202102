import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationsComponent } from './registrations/registrations.component';
import { StudentsComponent } from './students/students.component';



@NgModule({
  declarations: [
    RegistrationsComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
