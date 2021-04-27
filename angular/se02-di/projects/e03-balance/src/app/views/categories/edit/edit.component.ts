import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../models/balance.model';
import { CategoryService } from '../../../models/category.service';

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

  constructor(builder: FormBuilder, service: CategoryService) {
    this.form = builder.group({
      id: 0,
      type: ['', Validators.required],
      name: ['', [Validators.required, (control: AbstractControl) => {
        if (service.isAlreadyExitName(control.value)) {
          // Error
          return { error: 'Category name is already registered.' }
        }
        return null
      }]],
      deleted: false
    })
  }

  save() {
    this.onSave.emit(this.form.value)
  }

}
