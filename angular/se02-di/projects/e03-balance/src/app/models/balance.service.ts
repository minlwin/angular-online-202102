import { Injectable } from "@angular/core";
import { BalanceVO, BalanceWithDetails, BalanceWithDetailsVO, StorageService } from "./balance.model";

@Injectable({
    providedIn: 'root',
})
export class BalanceService implements StorageService {

    /**
     * Add New Or Save
     * @param value Balance With Details
     * @returns Balance ID
     */
    save(value: BalanceWithDetails): number {
        return 1;
    }

    /**
     * Find Balance Data for Details View
     * @param id Balance ID
     * @returns Balance With Details for View
     */
    findViewById(id: number): BalanceWithDetailsVO | null {
        return null
    }

    /**
     * Find Balance Data For Edit
     * @param id Balance ID
     * @returns Balance With Details
     */
    findById(id: number): BalanceWithDetails | null {
        return null
    }

    /**
     * Search Details Data
     * @param form 
     */
    searchDetails(form: any): readonly import("./balance.model").BalanceDetailsVO[] {
        return []
    }

    /**
     * Search Balance Data
     * @param form 
     */
    search(form: any): readonly BalanceVO[] {
        throw [];
    }

    loadResource(): void {
        console.log("Balance Service Load Resource")
    }

    saveResource(): void {
    }

}