import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './balance-list.component.html',
  styles: [
  ]
})
export class BalanceListComponent {

  type = ""

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.type = params['type']
    })
  }

}
