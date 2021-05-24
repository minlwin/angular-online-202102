import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: [
  ]
})
export class ModalDialogComponent {

  @Input()
  title?: string

  showModal = false

  show() {
    this.showModal = true
  }

  hide() {
    this.showModal = false
  }

  pressOK() {

  }
}
