import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@NgModule({
    declarations: [
        ModalDialogComponent
    ],
    imports: [CommonModule],
    exports: [
        ModalDialogComponent
    ]
})
export class AppCommonsModule {

}