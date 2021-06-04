import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../commons/model/user.model";
import { ApiClient } from "./client/api-client";

@Injectable({ providedIn: 'root' })
export class UserService {

    private client: ApiClient

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, 'users')
    }

    getCurrentUser(): Observable<User> {
        return this.getUser('me')
    }

    getUser(id: string): Observable<User> {
        return this.client.getOne(id)
    }
}