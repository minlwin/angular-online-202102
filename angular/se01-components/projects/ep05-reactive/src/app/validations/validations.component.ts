import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './validations.component.html',
})
export class ValidationsComponent {

  form: FormGroup

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])]
    })

  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }

}
