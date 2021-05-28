import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: any): unknown {

    if (value.length) {
      const array: boolean[] = value
      return array.map((value, index) => value ? this.getDay(index) : null).filter(value => value != null)
    }

    return this.getDay(value);
  }

  private getDay(index: number): string {
    let result = ''

    switch (index) {
      case 0:
        result = 'MON'
        break
      case 1:
        result = 'TUE'
        break
      case 2:
        result = 'WED'
        break
      case 3:
        result = 'THR'
        break
      case 4:
        result = 'FRI'
        break
      case 5:
        result = 'SAT'
        break
      case 6:
        result = 'SUN'
        break
      default:
        break
    }

    return result;
  }

}
