import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Course } from "../commons/model/course.model";
import { ApiClient } from "./client/api-client";

@Injectable({ providedIn: 'any' })
export class CoursService {

    private client: ApiClient

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, 'classes/Course')
    }

    save(data: any) {
        if (data.objectId) {
            return this.client.put(data.objectId, data).pipe(
                map(_ => data.objectId)
            )
        }

        return this.client.post(data).pipe(
            map(resp => resp.objectId)
        )
    }

    search(form: any) {
        const where: any = {}

        if (form.name) {
            where['name'] = { '$regex': `^${form.name}` }
        }

        if (form.level) {
            where['level'] = form.level
        }

        return this.client.get({ where: JSON.stringify(where) }).pipe(
            map(resp => resp.results)
        )
    }

    findById(id: string): Observable<Course> {
        return this.client.getOne(id)
    }
}