import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './resolve-form.component.html',
  styles: [
  ]
})
export class ResolveFormComponent {

  list: any[] = []

  constructor(route: ActivatedRoute) {
    route.data.subscribe(data => this.list = data.list)
  }


}
