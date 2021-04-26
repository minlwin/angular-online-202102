import { Injectable } from "@angular/core";
import { StorageService } from "./balance.model";

@Injectable({
    providedIn: 'root',
})
export class BalanceService implements StorageService {

    loadResource(): void {
        console.log("Balance Service Load Resource")
    }

    saveResource(): void {
    }

}