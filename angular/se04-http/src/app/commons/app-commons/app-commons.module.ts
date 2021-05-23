import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClassComponent } from './icons/class/class.component';
import { CourseComponent } from './icons/course/course.component';
import { PencilComponent } from './icons/pencil/pencil.component';
import { PlusComponent } from './icons/plus/plus.component';
import { SaveComponent } from './icons/save/save.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentsComponent } from './students/students.component';
import { CardComponent } from './widgets/card/card.component';
import { ModalDialogComponent } from './widgets/modal-dialog/modal-dialog.component';


@NgModule({
  declarations: [
    ModalDialogComponent,
    CardComponent,
    LoginComponent,
    PlusComponent,
    PencilComponent,
    SaveComponent,
    CourseComponent,
    StudentsComponent,
    ClassComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalDialogComponent,
    CardComponent,
    PlusComponent,
    PencilComponent,
    SaveComponent,
    CourseComponent,
    StudentsComponent,
    ClassComponent
  ]
})
export class AppCommonsModule { }
