import { Injectable } from "@angular/core";
import { switchMap, tap } from 'rxjs/operators';
import { Role } from "src/app/commons/commons/model/role.model";
import { User } from "src/app/commons/commons/model/user.model";
import { RoleService } from "src/app/commons/services/roles.service";
import { UserService } from "src/app/commons/services/users.service";

@Injectable({ providedIn: 'root' })
export class SecurityContext {

    user?: User
    role?: Role
    sessionToken?: string

    constructor(private users: UserService, private roles: RoleService) { }

    get authority(): string {
        return this.role?.name || 'Anonymous'
    }

    signIn(token: string) {
        this.sessionToken = token
        return this.users.getCurrentUser().pipe(
            tap(user => this.user = user),
            switchMap(user => this.roles.getUserRole(user.objectId!)),
            tap(role => this.role = role)
        )
    }

    isInRole(...roles: string[]): boolean {

        for (const role of roles) {
            if (role === this.role?.name) {
                return true
            }
        }
        return false;
    }

    clear() {
        this.user = undefined
        this.role = undefined
        this.sessionToken = undefined
    }
}