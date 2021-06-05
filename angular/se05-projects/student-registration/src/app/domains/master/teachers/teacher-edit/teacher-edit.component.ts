import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from 'src/app/commons/commons/model/teacher.model';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styles: [
  ]
})
export class TeacherEditComponent {

  form: FormGroup

  @Output()
  onSave = new EventEmitter

  @Input()
  set data(data: Teacher | any) {
    if (data.objectId) {
      this.form.patchValue(data)
    } else {
      this.form.reset()
    }
  }

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      objectId: null,
      name: ['', Validators.required],
      phone: ['', Validators.required],
      user: builder.group({
        objectId: null,
        username: '',
        email: ''
      })
    })
  }

  save() {
    this.onSave.emit(this.form.value)
  }
}
