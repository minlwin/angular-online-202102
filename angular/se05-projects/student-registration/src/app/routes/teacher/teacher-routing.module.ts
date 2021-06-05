import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from 'src/app/domains/master/classes/classes.component';
import { CoursesComponent } from 'src/app/domains/master/courses/courses.component';
import { TeachersComponent } from 'src/app/domains/master/teachers/teachers.component';
import { HomeComponent } from 'src/app/domains/security/views/home/home.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  {
    path: '', component: TeacherComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'classes', component: ClassesComponent },
      { path: '', redirectTo: '/teacher/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
