import { Injectable } from "@angular/core";
import { Role } from "src/app/commons/commons/model/role.model";
import { User } from "src/app/commons/commons/model/user.model";

@Injectable({ providedIn: 'root' })
export class SecurityContext {

    user?: User
    role?: Role
    sessionToken?: string

    get authority(): string {
        return this.role?.name || 'Anonymous'
    }

    clear() {
        this.user = undefined
        this.role = undefined
        this.sessionToken = undefined
    }
}