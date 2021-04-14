import { Injectable } from "@angular/core";

export type Role = 'Admin' | 'Editor' | 'Member'

export interface Member {
    readonly id: number
    readonly name: string
    readonly role: Role
    readonly phone: string
    readonly email: string
}

@Injectable({ providedIn: 'root' })
export class MemberService {

    private id = 0
    private resources: { [id: number]: Member } = {}

    getAll(): readonly Member[] {
        return Object.values(this.resources)
    }

    save(member: Member) {
        if (member.id) {
            // Update
            this.resources[member.id] = { ...member }
        } else {
            // Add New
            const generatedId = ++this.id
            this.resources[generatedId] = { ...member, id: generatedId }
        }
    }

    findById(id: number) {
        return this.resources[id]
    }
}