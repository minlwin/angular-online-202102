import { Entity } from "./entity.model";

export interface Course extends Entity {
    name: string
    level: string
    duration: number
    fees: number
}

export const COURE_LEVELS = [
    'Basic',
    'Intermediate',
    'Advance'
]