import { Component } from '@angular/core';
import { BalanceVO } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';

@Component({
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  list: readonly BalanceVO[] = []

  constructor(private service: BalanceService) { }

  search(form: any) {
    this.list = this.service.search(form);
  }

}
