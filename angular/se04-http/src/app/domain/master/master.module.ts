import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppCommonsModule } from 'src/app/commons/app-commons/app-commons.module';
import { ClassComponent } from './class/class.component';
import { CourseComponent } from './course/course.component';
import { MasterRoutingModule } from './master-routing.module';
import { TeacherComponent } from './teacher/teacher.component';



@NgModule({
  declarations: [
    CourseComponent,
    ClassComponent,
    TeacherComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    AppCommonsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class MasterModule { }
