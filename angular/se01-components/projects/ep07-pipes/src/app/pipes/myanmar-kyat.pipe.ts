import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mmk'
})
export class MyanmarKyatPipe implements PipeTransform {

  constructor(private df: DecimalPipe) { }

  transform(value: number | string | null | undefined, currencyCode: string = "JPY", behind: boolean = true): string | null {

    if (value) {
      let str = typeof value == 'number' ? this.df.transform(value) : value
      return behind ? `${str} ${currencyCode}` : `${currencyCode} ${str}`
    }

    return null;
  }

}
