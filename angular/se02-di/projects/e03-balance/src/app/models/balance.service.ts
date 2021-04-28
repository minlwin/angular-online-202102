import { Injectable } from "@angular/core";
import { BalanceDto, BalanceVO, StorageService } from "./balance.model";

@Injectable({
    providedIn: 'root',
})
export class BalanceService implements StorageService {

    findById(id: number): BalanceDto | null {
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