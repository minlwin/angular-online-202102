import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BalanceType } from 'src/app/services/abstract.service';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {

  type?: BalanceType
  list: any[] = []

  constructor(route: ActivatedRoute, private service: BalanceService) {
    route.params.subscribe(data => this.type = data['type'])
  }

  search(form: any) {
    this.service.searchDetails(form).subscribe(data => this.list = data)
  }

}
