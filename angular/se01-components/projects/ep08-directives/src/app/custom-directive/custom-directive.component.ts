import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './custom-directive.component.html',
  styles: [
  ]
})
export class CustomDirectiveComponent implements OnInit {

  form: FormGroup

  value: any

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    })

    this.form.valueChanges.subscribe(a => this.value = a)
  }

  ngOnInit(): void {
  }

}
