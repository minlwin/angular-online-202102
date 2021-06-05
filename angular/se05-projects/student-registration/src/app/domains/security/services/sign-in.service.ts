import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { switchMap } from 'rxjs/operators';
import { ApiClient } from "src/app/commons/services/client/api-client";
import { SecurityContext } from "./security.context";

@Injectable({ providedIn: 'any' })
export class SignInService {

    private client: ApiClient

    constructor(http: HttpClient,
        private security: SecurityContext) {
        this.client = new ApiClient(http, 'login')
    }

    signIn(form: any) {
        return this.client.get(form).pipe(
            switchMap(resp => this.security.signIn(resp.sessionToken))
        )
    }
}