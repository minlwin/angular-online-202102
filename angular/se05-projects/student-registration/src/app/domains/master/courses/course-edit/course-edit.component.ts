import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COURE_LEVELS } from 'src/app/commons/commons/model/course.model';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styles: [
  ]
})
export class CourseEditComponent {

  form: FormGroup
  levels = COURE_LEVELS

  @Input()
  set data(data: any) {
    if (data.objectId) {
      this.form.patchValue(data)
    } else {
      this.form.reset()
      this.form.patchValue({ level: '' })
    }
  }

  @Output()
  onSave = new EventEmitter

  constructor(bulder: FormBuilder) {
    this.form = bulder.group({
      objectId: null,
      name: ['', Validators.required],
      level: ['', Validators.required],
      fees: [0, Validators.min(10000)],
      duration: [0, Validators.min(10)]
    })
  }

  save() {
    this.onSave.emit(this.form.value)
  }

}
