import { Entity } from "./entity.model";

export interface User extends Entity {
    username: string
    email: string
}