import { Injectable } from "@angular/core";
import { BaseStorage } from "./base.storage";

const STORAGE_KEY = "com.jdc.balance.ids"

@Injectable({ providedIn: 'root' })
export class IdGenerator extends BaseStorage<{ category: number, balance: number, details: number }> {

    constructor() {
        super({
            category: 0,
            balance: 0,
            details: 0
        }, STORAGE_KEY)
    }

    next(resource: 'category' | 'balance' | 'details'): number {
        const id = ++this.resource[resource]
        this.saveResource()
        return id
    }

}