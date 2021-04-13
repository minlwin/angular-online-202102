import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './custom-directive.component.html',
  styles: [
  ]
})
export class CustomDirectiveComponent implements OnInit {

  form: FormGroup

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
