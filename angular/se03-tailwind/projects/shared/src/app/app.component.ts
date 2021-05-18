import { Component, ViewChild } from '@angular/core';
import { ModalDialogComponent } from './utils/app-commons/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'shared';

  @ViewChild(ModalDialogComponent)
  dialog?: ModalDialogComponent

  showDialog() {
    this.dialog?.openDialog()
  }


}
