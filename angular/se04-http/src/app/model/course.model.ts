import { BaseModel } from "./base.model";

export interface Course extends BaseModel {
    name: string
    fees: number
    duration: number
    level: string
}