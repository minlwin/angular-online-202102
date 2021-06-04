import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Role } from "../commons/model/role.model";
import { ApiClient } from "./client/api-client";

@Injectable({ providedIn: 'any' })
export class RoleService {

    private client: ApiClient

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, 'roles')
    }

    getUserRole(userId: string): Observable<Role> {
        const userCriteria = {
            users: {
                __type: 'Pointer',
                className: '_User',
                objectId: userId
            }
        }

        return this.client.get({ where: JSON.stringify(userCriteria) }).pipe(
            map(resp => resp.results as Role[]),
            map(roles => roles[0])
        )
    }
}