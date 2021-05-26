import { Dto } from "./app.model";
import { Course } from "./course.model";

export interface Class extends Dto {
    startDate: Date
    days: any[]
    teacher: string
    course: Course
}