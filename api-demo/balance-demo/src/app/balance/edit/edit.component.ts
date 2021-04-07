import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { BalanceType } from 'src/app/services/abstract.service';
import { BalanceService } from 'src/app/services/balance.service';
import { Category, CategoryService } from 'src/app/services/category.service';

@Component({
  templateUrl: './edit.component.html',
  providers: [
    DatePipe
  ]
})
export class EditComponent {

  form: FormGroup
  categories: Category[] = []
  types: BalanceType[] = []

  constructor(
    private builder: FormBuilder,
    private service: BalanceService,
    categoryService: CategoryService,
    private router: Router,
    route: ActivatedRoute,
    df: DatePipe) {

    this.form = builder.group({
      balance: builder.group({
        id: 0,
        type: '',
        useDate: df.transform(new Date),
        category: ['', Validators.required],
        total: [0, Validators.min(100)]
      }),
      details: builder.array([])
    })

    categoryService.balanceTypes().subscribe(result => this.types = result)

    this.balance.get('type')?.valueChanges.subscribe(type => categoryService.search({ type: type }).subscribe(result => this.categories = result))

    this.details.valueChanges.subscribe(() => this.balance.patchValue({
      total: this.details.controls.map(c => c.value.amount).reduce((a, b) => a + b)
    }))
    route.params.subscribe(params => {
      const id = Number(params['id'])
      if (id) {
        service.findById(id).subscribe(data => this.balance.patchValue(data))
        service.getDetails(id).subscribe(data => {
          if (data.length) {
            this.details.clear()
            data.map(a => {
              const control = this.detailsControl()
              control.patchValue(a)
              return control
            }).forEach(c => this.details.push(c))
          }
        })
      } else {
        this.form.get('balance')?.patchValue({ type: params['type'] })
        this.addDetails()
      }
    })
  }

  removeDetails(index: number) {
    const control = this.details.controls[index];
    if (control.value.id) {
      this.details.controls[index].patchValue({ deleted: true })
    } else {
      this.details.removeAt(index)
    }
  }

  addDetails() {
    this.details.push(this.detailsControl())
  }

  save() {

    let request = this.service.create(this.balance.value).pipe(
      mergeMap(data => this.service.createDetails(data.id, this.details.value))
    )

    if (this.balance.value.id) {
      request = this.service.update(this.balance.value.id, this.balance.value).pipe(
        mergeMap(data => this.service.updateDetails(data.id, this.details.value))
      )
    }

    request.subscribe(result => {
      this.router.navigate(['/balance/summary', result.id])
    })
  }

  compareCategory(c1?: Category, c2?: Category) {
    return c1?.id === c2?.id
  }

  get balance(): FormGroup {
    return this.form.get('balance') as FormGroup
  }

  get details(): FormArray {
    return this.form.get('details') as FormArray
  }

  private detailsControl() {
    return this.builder.group({
      id: 0,
      balance: null,
      reason: ['', Validators.required],
      details: '',
      amount: [0, Validators.min(100)],
      deleted: false
    })
  }

}
