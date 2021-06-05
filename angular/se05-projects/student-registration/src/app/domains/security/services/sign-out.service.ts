import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiClient } from "src/app/commons/services/client/api-client";

@Injectable({ providedIn: 'root' })
export class SignOutService {

    private client: ApiClient

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, 'logout')
    }

    logOut() {
        return this.client.post({})
    }
}