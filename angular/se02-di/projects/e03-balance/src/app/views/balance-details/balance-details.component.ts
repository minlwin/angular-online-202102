import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Balance, BalanceDetails, BalanceWithDetails } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';

@Component({
  templateUrl: './balance-details.component.html',
  styles: [
  ]
})
export class BalanceDetailsComponent {

  private balanceVO: BalanceWithDetails | null = null

  constructor(route: ActivatedRoute, service: BalanceService) {
    route.paramMap.subscribe(map => {
      const id = Number(map.get('id'))
      if (id) {
        this.balanceVO = service.findViewById(id)
      }
    })
  }

  get balance(): Balance | null {
    return this.balanceVO?.balance || null
  }

  get details(): BalanceDetails[] {
    return this.balanceVO?.details || []
  }
}
