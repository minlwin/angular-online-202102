import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './resolve-to.component.html',
  styles: [
  ]
})
export class ResolveToComponent {

  product: any

  constructor(route: ActivatedRoute) {
    route.data.subscribe(data => this.product = data.product)
  }

}
