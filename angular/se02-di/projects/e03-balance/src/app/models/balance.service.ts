import { Injectable } from "@angular/core";
import { Balance, BalanceDetails, BalanceVO, BalanceWithDetails, StorageService } from "./balance.model";
import { CategoryService } from "./category.service";
import { IdGenerator } from "./id.generator";

const B_RESOURCE = 'com.jdc.balance.balance'
const D_RESOURCE = 'com.jdc.balance.details'

@Injectable({
    providedIn: 'root',
})
export class BalanceService implements StorageService {

    private bResource: { [id: number]: Balance } = {}
    private dResource: { [id: number]: BalanceDetails } = {}

    constructor(private ids: IdGenerator, private categories: CategoryService) { }

    /**
     * Add New Or Save
     * @param value Balance With Details
     * @returns Balance ID
     */
    save(value: BalanceWithDetails): number {

        const { balance, details } = value

        // If New Object set id
        if (balance.id === 0) {
            balance.id = this.ids.next('balance')
        }

        // Save Balance
        this.bResource[balance.id] = { ...balance }

        for (const d of details) {
            // If New Object
            if (d.id === 0) {
                d.id = this.ids.next('details')
            }

            this.dResource[d.id] = { ...d }
        }

        return balance.id;
    }

    /**
     * Find Balance Data for Details View
     * @param id Balance ID
     * @returns Balance With Details for View
     */
    findViewById(id: number): BalanceWithDetails | null {
        const { balance, details } = this.findById(id) as BalanceWithDetails
        balance.category = this.categories.findById(balance.category as number)
        return { balance: balance, details: details.map(a => ({ ...a, balance: balance })) }
    }

    /**
     * Find Balance Data For Edit
     * @param id Balance ID
     * @returns Balance With Details
     */
    findById(id: number): BalanceWithDetails | null {
        return {
            balance: this.bResource[id],
            details: this.getDetailsByBalanceId(id)
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

    private getDetailsByBalanceId(id: number): BalanceDetails[] {
        return Object.values(this.dResource).filter(d => d.balance === id)
    }

    loadResource(): void {
        const bStr = localStorage.getItem(B_RESOURCE)
        if (bStr) {
            this.bResource = JSON.parse(bStr)
        }

        const dStr = localStorage.getItem(D_RESOURCE)
        if (dStr) {
            this.dResource = JSON.parse(dStr)
        }
    }

    saveResource(): void {
        localStorage.setItem(B_RESOURCE, JSON.stringify(this.bResource))
        localStorage.setItem(D_RESOURCE, JSON.stringify(this.dResource))
    }

}