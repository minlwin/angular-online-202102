import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BalanceDetailsVO } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';

@Component({
  templateUrl: './balance-list.component.html',
  styles: [
  ]
})
export class BalanceListComponent {

  type = ""

  list: readonly BalanceDetailsVO[] = []

  constructor(route: ActivatedRoute, private service: BalanceService) {
    route.params.subscribe(params => {
      this.type = params['type']
    })
  }

  search(form: any) {
    this.list = this.service.searchDetails(form)
  }

}
