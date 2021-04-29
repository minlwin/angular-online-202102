import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BalanceDetailsVO, BalanceVO, BalanceWithDetailsVO } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';

@Component({
  templateUrl: './balance-details.component.html',
  styles: [
  ]
})
export class BalanceDetailsComponent {

  private balanceVO: BalanceWithDetailsVO | null = null

  constructor(route: ActivatedRoute, service: BalanceService) {
    route.paramMap.subscribe(map => {
      const id = Number(map.get('id'))
      if (id) {
        this.balanceVO = service.findViewById(id)
      }
    })
  }

  get balance(): BalanceVO | null {
    return this.balanceVO?.balance || null
  }

  get details(): BalanceDetailsVO[] | null {
    return this.balanceVO?.details || null
  }
}
