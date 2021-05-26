import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiClient } from "../client/api.client";

const API = `${environment.api.url}/classes/Class`

@Injectable({ providedIn: 'root' })
export class ClassService {

    private client: ApiClient

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, API)
    }

    search(form: any) {

    }

    save(data: any) {

    }

    findById(id: string) {

    }
}