import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Category, StorageService, Type } from "./balance.model";
import { IdGenerator } from "./id.generator";

const STORAGE_KEY = "com.jdc.balance.category"

@Injectable({ providedIn: 'root' })
export class CategoryService implements StorageService {

    private resource: { [id: number]: Category } = {}

    constructor(private idGen: IdGenerator) { }

    loadResource(): void {
        const data = localStorage.getItem(STORAGE_KEY)

        if (data) {
            this.resource = JSON.parse(data)
        }
    }

    saveResource(): void {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.resource))
    }

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

    switchDeleteStatus(id: number) {
        const target = this.resource[id]
        if (target) {
            target.deleted = !target.deleted
            this.saveResource()
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

        this.saveResource()
    }

    validateName(control: AbstractControl): ValidationErrors | null {
        const name = control.value

        for (const cat of Object.values(this.resource)) {
            if (name === cat.name) {
                return {
                    error: 'Name is already exsts!'
                }
            }
        }

        return null
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