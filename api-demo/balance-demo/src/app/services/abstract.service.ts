import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

const BASE = 'http://localhost:8080'

export type BalanceType = 'Income' | 'Expense'

export abstract class AbstractService {

    protected api: string

    constructor(protected http: HttpClient, resource: string) {
        this.api = `${BASE}/${resource}`
    }

    balanceTypes() {
        return of<BalanceType[]>(['Income', 'Expense'])
    }

    search(form: any) {
        return this.http.get<any[]>(this.api, { params: form })
    }

    findById(id: any) {
        return this.http.get<any>(`${this.api}/${id}`)
    }

    create(data: any) {
        return this.http.post<any>(this.api, data)
    }

    update(id: any, data: any) {
        return this.http.put<any>(`${this.api}/${id}`, data)
    }
}