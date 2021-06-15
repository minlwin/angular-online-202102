import { Pipe, PipeTransform } from '@angular/core';

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(value: any): unknown {

    if (typeof value == 'number') {
      return DAYS[value]
    }

    if (value && value.length) {
      const array: boolean[] = value
      return array.map((value, index) => value ? DAYS[index] : null).filter(d => d != null)
    }

    return null;
  }

  getApiData(data: string): boolean[] {
    const targetDays = data.split(',').map(str => str.trim())
    return DAYS.map(day => this.contains(day, targetDays))
  }

  private contains(day: string, array: string[]): boolean {
    return array.find(str => str === day) != undefined
  }

}
