import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from './app-validators';

@Component({
  templateUrl: './validations.component.html',
})
export class ValidationsComponent implements OnInit {

  form: FormGroup

  formValue: any

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      name: ["", Validators.required],
      phone: ["", [AppValidators.phone]],
      email: ["", Validators.compose([Validators.required, Validators.email])]
    })

  }

  ngOnInit(): void {
    this.formValue = this.form.value
  }

  save() {
    console.log(this.form.value)
  }

  getStatus(name: string) {
    return this.form.get(name)?.valid ? 'fa-check' : 'fa-close'
  }

  get validationStatus() {
    return {
      form: this.form.valid ? 'Valid' : 'Invalid',
      name: this.form.get('name')?.valid ? 'Valid' : 'Invalid',
      phone: this.form.get('phone')?.valid ? 'Valid' : 'Invalid',
      email: this.form.get('email')?.valid ? 'Valid' : 'Invalid',
    }
  }

}
