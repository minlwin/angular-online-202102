import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers/teachers.component';
import { CoursesComponent } from './courses/courses.component';
import { ClassesComponent } from './classes/classes.component';



@NgModule({
  declarations: [
    TeachersComponent,
    CoursesComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MasterModule { }
