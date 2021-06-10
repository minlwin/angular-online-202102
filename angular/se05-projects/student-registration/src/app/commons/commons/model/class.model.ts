import { Course } from "./course.model";
import { Entity } from "./entity.model";
import { Teacher } from "./teacher.model";

export interface Class extends Entity {

    teacher: Teacher
    course: Course
    startDate: any
    days: any[]
    times: {
        start: string
        end: string
    }
}