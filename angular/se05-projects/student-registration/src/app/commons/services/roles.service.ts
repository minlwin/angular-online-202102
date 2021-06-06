import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { Pointer } from "../commons/model/pointer.model";
import { Role } from "../commons/model/role.model";
import { ApiClient } from "./client/api-client";

@Injectable({ providedIn: 'any' })
export class RoleService {

    private client: ApiClient

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, 'roles')
    }

    getRoles(): Observable<Role[]> {
        return this.client.get().pipe(map(resp => resp.results))
    }

    getRole(name: string): Observable<Role> {
        return this.getRoles().pipe(
            map(roles => roles.filter(role => role.name === name).pop() as Role)
        )
    }

    addUserToRole(name: string, userId: string) {
        return this.getRole(name).pipe(
            switchMap(role => this.client.put(role.objectId!, {
                users: {
                    "__op": "AddRelation",
                    "objects": [
                        new Pointer('_User', userId)
                    ]
                }
            })),
            map(_ => userId)
        )
    }

    getUserRole(userId: string): Observable<Role> {

        return this.client.get({ where: JSON.stringify({ users: new Pointer('_User', userId) }) }).pipe(
            map(resp => resp.results as Role[]),
            map(roles => roles[0])
        )
    }
}