import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Course } from "../model/course.model";

const API = `${environment.api.url}/classes/Course`

@Injectable({ providedIn: 'root' })
export class CourseClient {

    private headers: HttpHeaders

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders
        this.headers.append(environment.api.header.appId.key, environment.api.header.appId.value)
        this.headers.append(environment.api.header.apiKey.key, environment.api.header.apiKey.value)
    }

    create(data: Course): Observable<any> {
        return this.http.post(API, data, { headers: this.headers })
    }

    update(data: Course): Observable<any> {
        return this.http.put(`${API}/${data.objectId}`, data, { headers: this.headers })
    }

    search(): Observable<any> {
        return this.http.get(API, { headers: this.headers })
    }
}