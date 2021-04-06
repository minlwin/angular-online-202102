import { Component } from '@angular/core';
import { BalanceType } from '../services/abstract.service';
import { Category, CategoryService } from '../services/category.service';

declare var $: any

@Component({
  templateUrl: './category.component.html',
})
export class CategoryComponent {

  target: Category
  types: BalanceType[] = []

  list: Category[] = []

  constructor(private service: CategoryService) {
    this.target = service.getNewCategory()
    service.balanceTypes().subscribe(data => this.types = data)
  }

  addNew() {
    this.edit(this.service.getNewCategory())
  }

  edit(data: Category) {
    this.target = data
    $('#editDialog').modal('show')
  }

  save(data: Category) {
    $('#editDialog').modal('hide')
    const result = data.id ? this.service.update(data.id, data) : this.service.create(data)
    result.subscribe(() => this.load())
  }

  private load() {
    this.service.search({}).subscribe(data => this.list = data)
  }
}
