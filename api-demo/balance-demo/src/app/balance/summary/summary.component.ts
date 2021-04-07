import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BalanceService } from 'src/app/services/balance.service';
@Component({
  templateUrl: './summary.component.html',
  styles: [
  ]
})
export class SummaryComponent {

  list: any[] = []

  constructor(private service: BalanceService) { }

  search(form: any) {
    this.service.search(form).pipe(

      map(list => {
        let summary = 0

        return list.map(item => {
          const { total, ...data } = item

          if (data.type === 'Income') {
            data.income = total
            summary += total
          } else {
            data.expense = total
            summary -= total
          }

          data.total = summary

          return data
        })
      })
    ).subscribe(result => this.list = result)
  }
}
