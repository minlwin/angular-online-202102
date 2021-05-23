import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonsModule } from 'src/app/commons/app-commons/app-commons.module';
import { ClassComponent } from './class/class.component';
import { CourseComponent } from './course/course.component';
import { MasterRoutingModule } from './master-routing.module';



@NgModule({
  declarations: [
    CourseComponent,
    ClassComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    AppCommonsModule
  ]
})
export class MasterModule { }
