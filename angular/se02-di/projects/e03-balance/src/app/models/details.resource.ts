import { Injectable } from "@angular/core";
import { BalanceDetails } from "./balance.model";
import { ListStorage } from "./base.storage";
import { IdGenerator } from "./id.generator";

const STORAGE_KEY = 'com.jdc.balance.details'

@Injectable({ providedIn: 'root' })
export class DetailsResource extends ListStorage<BalanceDetails> {

    save(balanceId: number, details: BalanceDetails[]) {

        // Delete Old Data
        this.findByBalanceId(balanceId)
            .forEach(target => delete this.resource[target.id])

        // Add New Data
        for (let { id, balance, ...rest } of details) {
            if (id === 0) {
                id = this.ids.next('details')
            }

            this.resource[id] = { id: id, ...rest, balance: balanceId }
        }
    }

    findByBalanceId(id: number): BalanceDetails[] {
        return Object.values(this.resource)
            .filter(details => details.balance === id)
            .map(details => ({ ...details }))
    }

    constructor(private ids: IdGenerator) {
        super({}, STORAGE_KEY)
    }
}