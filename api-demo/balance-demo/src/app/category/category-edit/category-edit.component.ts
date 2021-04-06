import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BalanceType } from 'src/app/services/abstract.service';
import { Category } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styles: [
  ]
})
export class CategoryEditComponent {

  @Input()
  types?: BalanceType[]

  @Input()
  set item(data: Category) {
    this.form.patchValue(data)
  }

  @Output()
  onSave = new EventEmitter<Category>()

  form: FormGroup

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: 0,
      type: '',
      name: ['', Validators.required]
    })
  }

  save() {
    this.onSave.emit(this.form.value)
  }
}
