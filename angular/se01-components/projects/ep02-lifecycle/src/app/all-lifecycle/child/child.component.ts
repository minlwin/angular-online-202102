import { Component, Input } from '@angular/core';
import { LifecycleAware } from '../liifecycle';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent extends LifecycleAware {

  @Input()
  message?: string

  get comp(): string {
    return "Child"
  }

}
