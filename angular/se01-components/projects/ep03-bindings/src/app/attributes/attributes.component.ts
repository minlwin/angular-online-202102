import { Component } from '@angular/core';

@Component({
  templateUrl: './attributes.component.html',
})
export class AttributesComponent {

  currentValue = '0'

  // Multi classes
  multiClass = "bg-info"

  singleClass = true

  textSize = 20

  changeTextSize(size: any) {
    this.textSize = size
  }
}
