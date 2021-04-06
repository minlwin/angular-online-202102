import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './value-changes.component.html',
  styles: [
  ]
})
export class ValueChangesComponent {

  categories = ["Foods", "Drinks", "Snaks"]

  products = [
    { cat: "Foods", name: "Potato Chips" },
    { cat: "Foods", name: "Hot Dogs" },
    { cat: "Drinks", name: "Pepsi" },
    { cat: "Drinks", name: "Cocacola" },
    { cat: "Snaks", name: "Candy" },
    { cat: "Snaks", name: "Chocolet" },
    { cat: "Foods", name: "Humberger" },
  ]

  form: FormGroup

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      category: "",
      product: ""
    })
  }


}
