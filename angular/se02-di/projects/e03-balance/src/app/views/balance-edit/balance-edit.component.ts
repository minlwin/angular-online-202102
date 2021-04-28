import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BalanceDto, Category, Type } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';
import { CategorySearch, CategoryService } from '../../models/category.service';

@Component({
  templateUrl: './balance-edit.component.html',
  styles: [
  ]
})
export class BalanceEditComponent implements OnInit {

  type = ''
  categories: readonly Category[] = []

  form: FormGroup

  constructor(
    builder: FormBuilder,
    route: ActivatedRoute,
    catService: CategoryService,
    private serivce: BalanceService) {

    this.form = builder.group({
      // Balance Form
      balance: builder.group({
        id: 0,
        useDate: ['', [Validators.required, Validators.pattern('yyyy-MM-dd')]],
        categoryId: ['', Validators.required],
        total: [0, Validators.min(500)],
        employee: ['', Validators.required]
      }),
      // Balance Details List
      details: builder.array([

      ])
    })

    route.params.subscribe(params => {
      this.type = params['type']
      const id = Number(params['id'])

      const categorySearch: CategorySearch = { type: this.type as Type }

      // Edit
      if (id) {
        // Get Balance Data & Details Data
        const dto: BalanceDto | null = this.serivce.findById(id);

        if (dto) {

          // Set Balance Data to Edit
          this.form.patchValue({ balance: dto.balance })

          // Set Details data to Edits
        }
      } else {
        categorySearch.deleted = false
      }

      this.categories = catService.search(categorySearch)
    })
  }

  ngOnInit(): void {
  }

}
