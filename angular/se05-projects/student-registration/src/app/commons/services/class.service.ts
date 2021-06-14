import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Class } from "../commons/model/class.model";
import { ApiDate, Pointer } from "../commons/model/pointer.model";
import { ApiClient } from "./client/api-client";

@Injectable({ providedIn: 'any' })
export class ClassService {

    private client: ApiClient

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, 'classes/Class')
    }

    save(data: any) {

        const { course, teacher, startDate, objectId, ...others } = data

        const dto = {
            ...others,
            startDate: new ApiDate(new Date(startDate)),
            course: new Pointer('Course', course.objectId),
            teacher: new Pointer('Teacher', teacher.objectId)
        }

        const resp = objectId ? this.client.put(objectId, dto) : this.client.post(dto)

        return resp.pipe(
            map(result => result.objectId || objectId)
        )
    }

    findById(id: string): Observable<Class> {
        return this.client.getOne(id, { 'include': JSON.stringify(['course', 'teacher']) }).pipe(
            map(resp => this.convert(resp))
        )
    }

    search(form: any) {

        const where: any = {}

        // Teacher
        if (form.teacher) {
            where['teacher'] = new Pointer('Teacher', form.teacher)
        }

        // Course
        if (form.course) {
            where['course'] = new Pointer('Course', form.course)
        }

        const startDate: any = {}

        // Date From
        if (form.from) {
            startDate['$ge'] = new ApiDate(new Date(form.from))
        }

        // Date To
        if (form.to) {
            startDate['$le'] = new ApiDate(new Date(form.to))
        }

        if (Object.keys(startDate).length > 0) {
            where['startDate'] = startDate
        }

        return this.client.get({
            include: JSON.stringify(['teacher', 'course']),
            where: JSON.stringify(where)
        }).pipe(
            map(resp => resp.results as any[]),
            map(array => array.map(data => this.convert(data)))
        )
    }

    private convert(resp: any): any {
        const { startDate, ...others } = resp
        return { ...others, startDate: new Date(startDate.iso) }
    }
}