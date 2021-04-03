import { Component } from "@angular/core";

@Component({
    selector: "hello",
    template: `<h2>Hello Component</h2>
                <p>{{message}}</p>
    `,
    styles: [
        `h2 {
            color: blue
        }`
    ]
})
export class HelloComponent {

    message = "This is my first Angular Component"
}