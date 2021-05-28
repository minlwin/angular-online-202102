import { Dto } from "./app.model";
import { Course } from "./course.model";

export interface Class extends Dto {
    course: Course
    startDate: Date
    days: any[]
    teacher: string
}