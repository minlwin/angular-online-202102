import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-prop-child-binding',
    template: `
        <ul>
            <li *ngFor="let item of list">{{item}}</li>
        </ul>
    `
})
export class PropBindingChild {

    list: string[] = []

    @Input() set keyword(str: string) {
        if (str) {
            this.list.push(str)
        }
    }
}