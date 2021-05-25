import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap } from 'rxjs/operators';
import { CourseClient } from "../client/course.client";
import { Course } from "../model/course.model";

@Injectable({ providedIn: 'root' })
export class CourseService {

    constructor(private client: CourseClient) { }

    save(value: any): Observable<Course[]> {
        const resp = value.objectId ? this.client.update(value) : this.client.create(value)
        return resp.pipe(
            switchMap(data => this.search())
        )
    }

    search(): Observable<Course[]> {
        return this.client.search().pipe(
            map(resp => resp.results)
        )
    }

}