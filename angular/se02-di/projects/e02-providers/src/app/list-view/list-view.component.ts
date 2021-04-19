import { Component, Inject } from '@angular/core';
import { IStorage } from '../services/storage';

@Component({
  templateUrl: './list-view.component.html',
  styles: [
  ]
})
export class ListViewComponent {

  constructor(@Inject(2) private storage: IStorage) { }

  get list(): string[] {
    return this.storage.list
  }

}
