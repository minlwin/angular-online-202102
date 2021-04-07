import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent {

  balance: any
  details: any[] = []

  constructor(route: ActivatedRoute, service: BalanceService) {
    route.params.subscribe(params => {
      const id = Number(params['id'])

      if (id) {
        service.findById(id).subscribe(data => this.balance = data)
        service.getDetails(id).subscribe(data => this.details = data)
      }
    })
  }

}
