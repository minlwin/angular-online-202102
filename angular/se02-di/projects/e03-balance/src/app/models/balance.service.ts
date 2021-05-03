import { Injectable } from "@angular/core";
import { BalanceDetails, BalanceVO, BalanceWithDetails } from "./balance.model";
import { BalanceResource } from "./balance.resource";
import { CategoryService } from "./category.service";
import { DetailsResource } from "./details.resource";

@Injectable({
    providedIn: 'root',
})
export class BalanceService {

    constructor(private balances: BalanceResource, private details: DetailsResource, private categories: CategoryService) { }

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
    searchDetails(form: any): readonly BalanceDetails[] {
        return []
    }

    /**
     * Search Balance Data
     * @param form 
     */
    search(form: any): readonly BalanceVO[] {
        return [];
    }


}