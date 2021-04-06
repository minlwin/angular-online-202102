import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractService, BalanceType } from "./abstract.service";

@Injectable({ providedIn: 'root' })
export class CategoryService extends AbstractService {

    constructor(http: HttpClient) {
        super(http, "category")
    }

    getNewCategory(): Category {
        return { id: 0, type: 'Income', name: '' }
    }
}

export interface Category {
    id: number
    type: BalanceType
    name: string
}