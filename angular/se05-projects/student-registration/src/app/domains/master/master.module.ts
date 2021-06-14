import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonsModule } from 'src/app/commons/commons/commons.module';
import { ClassEditComponent } from './classes/class-edit/class-edit.component';
import { ClassesComponent } from './classes/classes.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { CoursesComponent } from './courses/courses.component';
import { TeacherEditComponent } from './teachers/teacher-edit/teacher-edit.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
  declarations: [
    TeachersComponent,
    CoursesComponent,
    ClassesComponent,
    TeacherEditComponent,
    CourseEditComponent,
    ClassEditComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class MasterModule { }
