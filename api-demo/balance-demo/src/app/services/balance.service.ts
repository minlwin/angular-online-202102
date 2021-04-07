import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract.service";

@Injectable({ providedIn: 'root' })
export class BalanceService extends AbstractService {

    constructor(http: HttpClient) {
        super(http, "balance")
    }

    getDetails(id: number) {
        return this.http.get<any[]>(`${this.api}/details/${id}`)
    }

    searchDetails(form: any) {
        return this.http.get<any[]>(`${this.api}/details`, { params: form })
    }

    createDetails(id: number, list: any[]) {
        return this.http.post<any>(`${this.api}/details/${id}`, list)
    }

    updateDetails(id: number, list: any[]) {
        return this.http.put<any>(`${this.api}/details/${id}`, list)
    }
}