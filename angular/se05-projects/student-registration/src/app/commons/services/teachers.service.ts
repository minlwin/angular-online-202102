import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap } from 'rxjs/operators';
import { Pointer } from "../commons/model/pointer.model";
import { Teacher } from "../commons/model/teacher.model";
import { ApiClient } from "./client/api-client";
import { RoleService } from "./roles.service";
import { UserService } from "./users.service";

@Injectable({ providedIn: 'any' })
export class TeachersService {

    private client: ApiClient

    constructor(http: HttpClient, private users: UserService, private roles: RoleService) {
        this.client = new ApiClient(http, 'classes/Teacher')
    }

    save(data: Teacher) {
        if (data.objectId) {
            return this.update(data)
        }

        return this.create(data)
    }

    search(form: { name?: string, phone?: string }) {

        const where: any = {}

        if (form.name) {
            where['name'] = { '$regex': `^n${form.name}` }
        }

        if (form.phone) {
            where['phone'] = { '$regex': `^n${form.phone}` }
        }

        return this.client.get({ where: JSON.stringify(where), include: 'user' }).pipe(
            map(resp => resp.results)
        )

    }

    private create(data: Teacher): Observable<string> {
        const { user, ...others } = data
        return this.users.create(user).pipe(
            switchMap(userId => this.roles.addUserToRole('Teacher', userId)),
            switchMap(userId => this.client.post({ ...others, user: new Pointer('_User', userId) })),
            map(resp => resp.objectId)
        )
    }

    private update(data: Teacher): Observable<string> {
        const { user, ...others } = data
        return this.client.put(others.objectId!, { ...others, user: new Pointer('_User', user.objectId!) }).pipe(
            map(_ => data.objectId!)
        )
    }
}