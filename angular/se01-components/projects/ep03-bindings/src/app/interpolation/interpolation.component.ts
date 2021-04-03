import { Component } from '@angular/core';

@Component({
  templateUrl: './interpolation.component.html',
})
export class InterpolationComponent {

  model = {
    title: "Text Interpolation",
    image: "angular.jpg"
  }

  item = "Component Item"
  header = "Component Header"

  data: Data = { id: 100, name: "Hello Angular" }

  times(a: number, b: number): number {
    return a * b
  }

  array = ["JavaScript", "TypeScript", "Angular"]

}

export interface Data {
  id: number,
  name: string
}
