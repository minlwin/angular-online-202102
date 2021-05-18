import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: [
  ]
})
export class ModalDialogComponent {

  showDialog = false

  openDialog() {
    this.showDialog = true
  }

  closeDialog() {
    this.showDialog = false
  }
}
