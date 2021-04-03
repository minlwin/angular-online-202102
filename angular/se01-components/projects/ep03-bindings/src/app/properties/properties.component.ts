import { Component } from '@angular/core';

@Component({
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {

  hideBtn = true

  switchBtnState() {
    this.hideBtn = !this.hideBtn
  }

  targetKeyword: string = ""

  setKeyword(input: any) {
    this.targetKeyword = input.value
    input.value = ""
  }

  backGround = "yellow"

}
