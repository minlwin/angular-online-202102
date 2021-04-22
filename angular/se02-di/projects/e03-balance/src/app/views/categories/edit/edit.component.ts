import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../models/balance.model';

@Component({
  selector: 'category-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent {

  form: FormGroup

  @Input()
  set data(data: Category) {
    this.form.patchValue(data)
  }

  @Output()
  onSave = new EventEmitter


  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: 0,
      type: ['', Validators.required],
      name: ['', Validators.required],
      deleted: false
    }, { validators: [] })
  }

  save() {
    this.onSave.emit(this.form.value)
  }

}
