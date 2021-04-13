import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Directive({
    selector: '[errorMessage]'
})
export class ErrorMesssageDirective implements OnChanges {

    @Input() errorMessage: AbstractControl | null | undefined

    @Input() errorMessageName: any

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {
    }

    ngOnChanges() {

        if ((this.errorMessage?.touched || this.errorMessage?.dirty) && this.errorMessage.invalid) {
            this.addError()
        }

        this.errorMessage?.statusChanges.subscribe(status => {
            if ('VALID' === status) {
                this.container.clear()
            } else {
                this.addError()
            }
        })
    }

    private addError() {
        const view = this.container.createEmbeddedView(this.template)
        view.rootNodes[0].innerText = `Please Enter ${this.errorMessageName || 'Value'}`
    }
}