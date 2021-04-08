import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DecimalPipe]
})
export class AppComponent {
  title = 'ep07-pipes';

  data1 = 99
  data2 = 1.3
  data3 = 0.1018

  currencyData = 122291.01912

  currentDate = new Date

}
