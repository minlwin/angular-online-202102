import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiClient } from "src/app/commons/services/client/api-client";
import { RoleService } from "src/app/commons/services/roles.service";
import { UserService } from "src/app/commons/services/users.service";
import { SecurityContext } from "./security.context";

@Injectable({ providedIn: 'any' })
export class SignInService {

    private client: ApiClient

    constructor(http: HttpClient,
        private userService: UserService,
        private roleService: RoleService,
        private security: SecurityContext) {
        this.client = new ApiClient(http, 'login')
    }

    signIn(form: any) {
        return this.client.get(form).pipe(
            tap(resp => this.security.sessionToken = resp.sessionToken),
            switchMap(resp => this.userService.getCurrentUser()),
            tap(user => this.security.user = user),
            switchMap(user => this.roleService.getUserRole(user.objectId!)),
            tap(role => this.security.role = role),
            map(role => role.name)
        )
    }
}