import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDialogComponent } from 'src/app/commons/app-commons/widgets/modal-dialog/modal-dialog.component';
import { Course } from 'src/app/commons/app-service/model/course.model';
import { CourseService } from 'src/app/commons/app-service/service/course.service';

@Component({
  templateUrl: './course.component.html',
  styles: [
  ]
})
export class CourseComponent {

  @ViewChild(ModalDialogComponent)
  dialog?: ModalDialogComponent

  list: Course[] = []
  form: FormGroup

  constructor(builder: FormBuilder, private service: CourseService) {
    this.form = builder.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      duration: ['', Validators.min(10)],
      fees: ''
    })

    service.search().subscribe(data => this.list = data)
  }


  addNew() {
    this.dialog?.show()
  }

  save(ok: any) {

  }
}
