import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DaysPipe } from './pipes/days.pipe';
import { TimesPipe } from './pipes/times.pipe';

@NgModule({
  declarations: [
    DaysPipe,
    TimesPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DaysPipe,
    TimesPipe
  ]
})
export class CommonsModule { }
