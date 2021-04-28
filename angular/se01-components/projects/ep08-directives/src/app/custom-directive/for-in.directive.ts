import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appFor] [appForIn]'
})
export class ForInDirective implements OnChanges {

    @Input()
    appForIn: any

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {
        console.log(container)
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.appForIn) {
            // Clear Container
            this.container.clear()

            Object.entries(this.appForIn).forEach((entry, index) => {
                this.container.createEmbeddedView(this.template, {
                    $implicit: entry[0],
                    i: index,
                    v: entry[1]
                })
            })
        }
    }
}