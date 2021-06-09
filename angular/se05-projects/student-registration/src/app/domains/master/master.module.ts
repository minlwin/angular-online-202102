import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassesComponent } from './classes/classes.component';
import { CoursesComponent } from './courses/courses.component';
import { TeacherEditComponent } from './teachers/teacher-edit/teacher-edit.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';

@NgModule({
  declarations: [
    TeachersComponent,
    CoursesComponent,
    ClassesComponent,
    TeacherEditComponent,
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
