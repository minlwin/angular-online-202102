import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { Balance, BalanceDetails, BalanceVO, BalanceWithDetails } from "./balance.model";
import { BalanceResource } from "./balance.resource";
import { CategoryService } from "./category.service";
import { DetailsResource } from "./details.resource";

export interface BalanceSearch {
    type: string
    category: string
    from: string
    to: string
}

@Injectable({
    providedIn: 'root',
})
export class BalanceService {

    constructor(
        private datePipe: DatePipe,
        private balances: BalanceResource,
        private details: DetailsResource,
        private categories: CategoryService) { }

    /**
     * Add New Or Save
     * @param value Balance With Details
     * @returns Balance ID
     */
    save(value: BalanceWithDetails): number {

        // save balance
        const balanceId = this.balances.save(value.balance);

        // save details
        this.details.save(balanceId, value.details)

        // Return Balance ID
        return balanceId;
    }

    /**
     * Find Balance Data for Details View
     * @param id Balance ID
     * @returns Balance With Details for View
     */
    findViewById(id: number): BalanceWithDetails {
        const dto = this.findById(id)
        const { category, ...rest } = dto.balance
        return {
            balance: { ...rest, category: this.categories.findById(category) },
            details: dto.details
        }
    }

    /**
     * Find Balance Data For Edit
     * @param id Balance ID
     * @returns Balance With Details
     */
    findById(id: number): BalanceWithDetails {
        return {
            balance: this.balances.findById(id),
            details: this.details.findByBalanceId(id)
        }
    }

    /**
     * Search Details Data
     * @param form 
     */
    searchDetails(form: BalanceSearch): readonly BalanceDetails[] {
        return this.balanceSearch(form)
            .map(a => a.id)
            .map(balanceId => this.details.findByBalanceId(balanceId)
                .map(d => {
                    let { balance, ...rest } = d
                    balance = this.balances.findById(balanceId)
                    const { category, ...others } = balance
                    balance = { ...others, category: this.categories.findById(category) }
                    return {
                        ...rest,
                        balance: balance
                    }
                })
            ).reduce((a, b) => a.concat(b), [])
    }

    /**
     * Search Balance Data
     * @param form 
     */
    search(form: BalanceSearch): readonly BalanceVO[] {

        let balance = 0
        return this.balanceSearch(form).map(b => {

            let { category, ...rest } = b
            category = this.categories.findById(category)

            balance = category.type === 'Income' ? balance + b.total : balance - b.total

            return {
                ...rest,
                category: category,
                balance: balance
            }
        });

    }

    private balanceSearch(form: BalanceSearch): Balance[] {
        return this.balances.list.filter(a => {

            // category
            if (form.category && form.category !== a.category) {
                return false
            }

            // type
            if (form.type && form.type !== this.categories.findById(a.category).type) {
                return false
            }

            const date = this.datePipe.transform(a.useDate, 'yyyy/MM/dd')!

            // from
            if (form.from && form.from.localeCompare(date) > 0) {
                return false
            }

            // to
            if (form.to && form.to.localeCompare(date) < 0) {
                return false
            }

            return true
        })
    }


}