import { Injectable } from "@angular/core";
import { Balance } from "./balance.model";
import { ListStorage } from "./base.storage";
import { IdGenerator } from "./id.generator";

const STORAGE_KEY = 'com.jdc.balance.balance'

@Injectable({
    providedIn: 'root'
})
export class BalanceResource extends ListStorage<Balance> {

    findById(id: number): Balance {
        return { ...this.resource[id] }
    }

    save(balance: Balance) {

        let balanceId = balance.id
        if (balanceId) {
            // Edit
            this.resource[balanceId] = { ...balance }
        } else {
            // Create
            balanceId = this.ids.next('balance')
            const { id, ...rest } = balance
            this.resource[balanceId] = { ...rest, id: balanceId }
        }

        return balanceId
    }


    constructor(private ids: IdGenerator) {
        super({}, STORAGE_KEY)
    }
}