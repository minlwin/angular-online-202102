import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../models/balance.model';
import { CategoryService } from '../../models/category.service';

declare var $: any

@Component({
  templateUrl: './categories.component.html',
  styles: [
  ]
})
export class CategoriesComponent {

  target: Category = this.service.getNewObject()
  list: readonly Category[] = []
  form: FormGroup

  constructor(buider: FormBuilder, private service: CategoryService) {
    this.form = buider.group({
      type: '',
      name: ''
    })
  }

  search() {
    this.list = this.service.search(this.form.value)
  }

  addNew() {
    this.edit(this.service.getNewObject())
  }

  edit(category: Category) {
    this.target = category
    $('#edit-dialog').modal('show')
  }

  save(data: Category) {
    // Save To Model
    this.service.save(data)
    // Close Dialog
    $('#edit-dialog').modal('hide')
    // Reload List View
    this.search()
  }
}
