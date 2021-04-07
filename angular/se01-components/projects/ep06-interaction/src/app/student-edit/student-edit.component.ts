import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: [
  ]
})
export class StudentEditComponent {

  @Input()
  set student(data: any) {
    console.log("Value Changes")
    this.form.patchValue(data)
  }

  @Output()
  onSave = new EventEmitter

  form: FormGroup

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: 0,
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required]
    })
  }

  save() {
    this.onSave.emit(this.form.value)
  }

}
