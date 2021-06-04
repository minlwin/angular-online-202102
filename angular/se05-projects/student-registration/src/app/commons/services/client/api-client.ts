import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export class ApiClient {

    private api: string

    constructor(private http: HttpClient, private resource: string) {
        this.api = `${environment.api.url}/${resource}`
    }

    get(form: any = {}) {
        return this.http.get<any>(this.api, { params: form })
    }

    getOne(id: string) {
        return this.http.get<any>(`${this.api}/${id}`)
    }

    post(data: any) {
        return this.http.post<any>(this.api, data)
    }

    put(id: string, data: any) {
        return this.http.put<any>(`${this.api}/${id}`, data)
    }
}