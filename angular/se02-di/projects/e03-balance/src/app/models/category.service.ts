import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Category, Type } from "./balance.model";
import { IdGenerator } from "./id.generator";

@Injectable({ providedIn: 'root' })
export class CategoryService {

    private resource: { [id: number]: Category } = {}

    constructor(private idGen: IdGenerator) { }

    // Home, Income, Expense => Type Or ''
    // Category Management => Type Or '' & Name
    search(params: { type: Type | '', name?: string, deleted?: boolean }): readonly Category[] {
        return Object.values(this.resource).filter(cat => {
            if (params.type && cat.type !== params.type) {
                return false
            }

            if (params.name && (!cat.name.toLocaleLowerCase().startsWith(params.name.toLocaleLowerCase()))) {
                return false
            }

            return !params.deleted
        })
    }

    delete(id: number) {
        const target = this.resource[id]
        if (target) {
            target.deleted = true
        }
    }

    // Add New Or Update
    save(data: Category) {
        if (data.id) {
            // Update
            this.resource[data.id] = data
        } else {
            // Add New
            const id = this.idGen.next('category')
            data.id = id
            this.resource[id] = data
        }
    }

    validateName(control: AbstractControl) {

    }

    getNewObject(): Category {
        return {
            id: 0,
            type: '',
            name: '',
            deleted: false
        }
    }
}