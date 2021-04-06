import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BalanceType } from 'src/app/services/abstract.service';

@Component({
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {

  type?: BalanceType

  constructor(route: ActivatedRoute) {
    route.params.subscribe(data => this.type = data['type'])
  }

  search(form: any) {
  }

}
