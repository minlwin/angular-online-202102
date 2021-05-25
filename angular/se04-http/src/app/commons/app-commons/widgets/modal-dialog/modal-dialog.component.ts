import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: [
  ]
})
export class ModalDialogComponent {

  @Input()
  title?: string

  @Input()
  disableButton: boolean = true

  @Output()
  okListener = new EventEmitter

  showModal = false

  show() {
    this.showModal = true
  }

  hide() {
    this.showModal = false
  }

  pressOK() {
    this.okListener.emit(true)
  }
}
