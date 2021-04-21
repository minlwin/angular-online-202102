import { Component, Input } from "@angular/core";

@Component({
    selector: 'search-bar',
    templateUrl: 'search-bar.html'
})
export class SearchBar {

    @Input()
    type?: string
}