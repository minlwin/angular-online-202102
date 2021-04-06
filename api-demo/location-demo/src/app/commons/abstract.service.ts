import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

const BASE_API = 'http://localhost:8080'
const REGIONS = ['North', 'East', 'South', 'West', 'Central', 'Lower']

export class AbstractService {

    protected api: string

    constructor(protected http: HttpClient, resource: string) {
        this.api = `${BASE_API}/${resource}`
    }

    search(form: any) {
        return this.http.get<any[]>(this.api, { params: form })
    }

    regions() {
        return of(REGIONS)
    }
}