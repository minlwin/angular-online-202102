import { Component, Inject } from '@angular/core';
import { IStorage } from '../services/storage';

@Component({
  templateUrl: './provide-class.component.html',
  providers: [
  ]
})
export class ProvideClassComponent {

  constructor(@Inject(3) private storage: IStorage) { }

  addName(name: string) {
    this.storage.add(name)
  }

  get list(): string[] {
    return this.storage.list
  }

}
