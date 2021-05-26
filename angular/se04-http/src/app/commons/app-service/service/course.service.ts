import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { ApiClient } from "../client/api.client";
import { Course } from "../model/course.model";

const API = `${environment.api.url}/classes/Course`

@Injectable({ providedIn: 'root' })
export class CourseService {

    private client: ApiClient

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, API)
    }

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