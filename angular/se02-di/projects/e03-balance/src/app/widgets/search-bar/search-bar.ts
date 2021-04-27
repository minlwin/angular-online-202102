import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Category } from "../../models/balance.model";
import { CategoryService } from "../../models/category.service";

@Component({
    selector: 'search-bar',
    templateUrl: 'search-bar.html'
})
export class SearchBar implements OnChanges {

    @Input()
    type?: string

    @Output()
    onSearch = new EventEmitter

    form: FormGroup

    categories: readonly Category[] = []

    constructor(builder: FormBuilder, service: CategoryService) {
        this.form = builder.group({
            type: '',
            category: '',
            from: '',
            to: ''
        })

        this.form.get('type')?.valueChanges.subscribe(value => {
            this.categories = value ? service.search({ type: value }) : []
            this.form.patchValue({ category: '' })
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.form.patchValue({ type: this.type || '' })
    }

    search() {
        this.onSearch.emit(this.form.value)
    }
}