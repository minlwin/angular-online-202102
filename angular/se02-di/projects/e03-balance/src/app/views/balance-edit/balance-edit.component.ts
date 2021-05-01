import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Type } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';
import { CategorySearch, CategoryService } from '../../models/category.service';

const MIN_AMOUNT = 500

@Component({
  templateUrl: './balance-edit.component.html',
  styles: [
  ]
})
export class BalanceEditComponent {

  type = ''
  categories: readonly Category[] = []

  form: FormGroup

  constructor(
    private builder: FormBuilder,
    route: ActivatedRoute,
    private router: Router,
    catService: CategoryService,
    private serivce: BalanceService) {

    // Build Form 
    this.form = builder.group({
      // Balance Form
      balance: builder.group({
        id: 0,
        useDate: ['', Validators.required],
        category: ['', Validators.required],
        total: [0, Validators.min(MIN_AMOUNT)],
        employee: ['', Validators.required]
      }),
      // Balance Details List
      details: builder.array([])
    })

    // Calculate Total
    this.detailsFormArray.valueChanges.subscribe(data => {
      this.form.get('balance')?.
        patchValue({ total: this.detailsFormArray.controls.map(a => a.value.amount || 0).reduce((a, b) => a + b) })
    })

    // Get Params
    route.params.subscribe(params => {
      this.type = params['type']
      const id = Number(params['id'])

      const categorySearch: CategorySearch = { type: this.type as Type }

      // Edit
      if (id) {
        // Get Balance Data & Details Data
        const dto = this.serivce.findById(id);

        if (dto) {

          // Set Balance Data to Edit
          this.form.patchValue({ balance: dto.balance })

          // Set Details data to Edits
          dto.details.forEach(d => {
            const control = this.getDetailsControl()
            control.patchValue(d)
            this.detailsFormArray.push(control)
          })
        }
      } else {
        categorySearch.deleted = false
        this.addDetails()
      }

      this.categories = catService.search(categorySearch)
    })
  }

  save() {
    // Save Form Data
    const id: number = this.serivce.save(this.form.value)
    // Navigate to Details View
    this.router.navigate(["/balance", this.type, id, 'details'])
  }

  addDetails() {
    this.detailsFormArray.push(this.getDetailsControl())
  }

  removeDetails(index: number) {
    this.detailsFormArray.removeAt(index)

    if (this.detailsFormArray.length == 0) {
      this.addDetails()
    }
  }

  get detailsFormArray(): FormArray {
    return this.form.get('details') as FormArray
  }

  private getDetailsControl(): FormGroup {
    return this.builder.group({
      id: 0,
      balance: 0,
      item: ['', Validators.required],
      unit: [0, Validators.min(1)],
      amount: [0, Validators.min(MIN_AMOUNT)],
      remark: ''
    })
  }

}
