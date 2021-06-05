import { Entity } from "./entity.model";
import { User } from "./user.model";

export interface Teacher extends Entity {
    name: string
    phone: string
    user: User
}