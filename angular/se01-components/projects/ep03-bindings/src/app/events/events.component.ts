import { Component } from '@angular/core';

@Component({
  templateUrl: './events.component.html',
  styles: [
  ]
})
export class EventsComponent {

  from = ["JavaScript", "TypeScript", "Angular", "Spring"]

  to: string[] = []

  private dragValue?: string

  drag(event: any) {
    this.dragValue = event.target?.innerText
    event.target.classList.add('bg-info')
    event.target.classList.add('text-white')
  }

  dragEnd(event: any) {
    event.target.classList.remove('bg-info')
    event.target.classList.remove('text-white')
  }

  drop(event: any) {
    if (this.dragValue) {
      if (event.target.id == "to") {
        this.to.push(this.dragValue)
        this.from = this.from.filter(a => a != this.dragValue)
      } else if (event.target.id == "from") {
        this.from.push(this.dragValue)
        this.to = this.to.filter(a => a != this.dragValue)
      }
      this.dragValue = undefined
    }
  }

}
