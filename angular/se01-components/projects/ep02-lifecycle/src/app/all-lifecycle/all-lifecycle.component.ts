import { Component } from '@angular/core';
import { LifecycleAware } from './liifecycle';

@Component({
  templateUrl: './all-lifecycle.component.html',
  styles: [
  ]
})
export class AllLifecycleComponent extends LifecycleAware {

  get comp(): string {
    return "Parent"
  }

  message = "Hello Lifecycle"

  count = 0

  get messageForChild(): string {
    return `Count is ${this.count}`
  }

  countUp(up: boolean) {
    if (up) {
      ++this.count
    } else {
      --this.count
    }
  }

}
