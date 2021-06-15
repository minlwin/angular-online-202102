import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Class } from "../commons/model/class.model";
import { BatchOperation } from "../commons/model/entity.model";
import { ApiDate, Pointer } from "../commons/model/pointer.model";
import { DaysPipe } from "../commons/pipes/days.pipe";
import { ApiBatchClient } from "./client/api-batch-client";
import { ApiClient } from "./client/api-client";

const PATH = 'classes/Class'

@Injectable({ providedIn: 'any' })
export class ClassService {

    private client: ApiClient

    constructor(http: HttpClient, private batch: ApiBatchClient, private daysPipe: DaysPipe) {
        this.client = new ApiClient(http, PATH)
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
            startDate['$gte'] = new ApiDate(new Date(form.from))
        }

        // Date To
        if (form.to) {
            startDate['$lte'] = new ApiDate(new Date(form.to))
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

    upload(courseId: string, teacherId: string, file: any): Observable<boolean> {

        const subject = new Subject<boolean>()

        if (null != file) {
            const reader = new FileReader

            reader.onload = event => {
                const result = event.target?.result

                if (result) {
                    const lines: string[] = result.toString().split('\n')
                    const resources = lines.map(line => line.split('\t'))
                        .filter(array => array.length === 4)
                        .map(array => ({
                            course: new Pointer('Course', courseId),
                            teacher: new Pointer('Teacher', teacherId),
                            startDate: new ApiDate(new Date(array[0])),
                            times: {
                                start: array[1].trim(),
                                end: array[2].trim()
                            },
                            days: this.daysPipe.getApiData(array[3])
                        }))
                        .map(data => new BatchOperation(PATH, data))

                    this.batch.execute(resources).subscribe(data => {
                        subject.next(true)
                    })
                }
            }

            reader.readAsText(file)
        } else {
            subject.next(false)
        }

        return subject
    }



    private convert(resp: any): any {
        const { startDate, ...others } = resp
        return { ...others, startDate: new Date(startDate.iso) }
    }
}