import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BalanceType } from '../services/abstract.service';
import { Category, CategoryService } from '../services/category.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent {

  form: FormGroup
  summary = true

  @Input()
  set type(data: any) {
    if (data) {
      this.form.patchValue({ type: data })
      this.summary = false
    }
  }

  @Output()
  onSearch = new EventEmitter

  types: BalanceType[] = []
  categories: Category[] = []

  constructor(builder: FormBuilder, service: CategoryService) {
    this.form = builder.group({
      type: '',
      category: '',
      from: '',
      to: ''
    })

    service.balanceTypes().subscribe(data => this.types = data)

    this.form.get('type')?.valueChanges.subscribe(type => service.search({ type: type }).subscribe(data => this.categories = data))
  }

  search() {
    this.onSearch.emit(this.form.value)
  }
}
