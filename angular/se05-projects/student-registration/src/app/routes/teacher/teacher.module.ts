import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MasterModule } from 'src/app/domains/master/master.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';



@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule,
    MasterModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
