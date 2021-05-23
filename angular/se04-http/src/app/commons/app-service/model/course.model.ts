import { Dto } from "./app.model";

export interface Course extends Dto {
    name: string
    fees: number
    duration: number
    level: string
}