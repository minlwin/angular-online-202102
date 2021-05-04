import { Injectable } from "@angular/core";
import { Category, Type } from "./balance.model";
import { ListStorage } from "./base.storage";
import { IdGenerator } from "./id.generator";

const STORAGE_KEY = "com.jdc.balance.category"

export type CategorySearch = { type: Type | '', name?: string, deleted?: boolean }

@Injectable({ providedIn: 'root' })
export class CategoryService extends ListStorage<Category> {

    constructor(private idGen: IdGenerator) {
        super({}, STORAGE_KEY)
    }

    // Home, Income, Expense => Type Or ''
    // Category Management => Type Or '' & Name
    search(params: CategorySearch): readonly Category[] {
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

    switchDeleteStatus(id: number) {
        if (this.resource[id]) {
            const { deleted, ...rest } = this.resource[id]
            this.resource[id] = { ...rest, deleted: !deleted }
        }
    }

    // Add New Or Update
    save(data: Category) {
        if (data.id) {
            // Update
            this.resource[data.id] = data
        } else {
            // Add New
            const { id, ...rest } = data
            const generatedId = this.idGen.next('category')
            this.resource[generatedId] = { ...rest, id: generatedId }
        }
    }

    findById(id: number): Category {
        return this.resource[id]
    }

    isAlreadyExitName(name: string): boolean {
        return Object.values(this.resource).find(category => category.name === name) != undefined
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