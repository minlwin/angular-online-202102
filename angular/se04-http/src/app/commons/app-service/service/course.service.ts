import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { CourseClient } from "../client/course.client";
import { Course } from "../model/course.model";

@Injectable({ providedIn: 'root' })
export class CourseService {

    constructor(private client: CourseClient) { }

    search(): Observable<Course[]> {
        return this.client.search().pipe(
            map(resp => resp.results)
        )
    }

}