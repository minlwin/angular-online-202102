import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[hightLight]'
})
export class HightLighDirective {

    @Input() set hightLight(color: string) {
        this.render.setStyle(this.eleRef.nativeElement, 'background-color', color)
    }

    @Input() set size(size: string) {
        if (size) {
            this.render.setStyle(this.eleRef.nativeElement, 'font-size', size)
        }
    }

    bordered = false

    constructor(private eleRef: ElementRef, private render: Renderer2) {
    }

    @HostListener('click') onClick() {
        if (this.bordered) {
            this.removeBorder()
        } else {
            this.setBorder()
        }

        this.bordered = !this.bordered
    }

    private setBorder() {
        this.render.setStyle(this.eleRef.nativeElement, 'border', 'solid 1px red')
    }

    private removeBorder() {
        this.render.removeStyle(this.eleRef.nativeElement, 'border')
    }
}