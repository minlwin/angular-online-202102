import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Course } from "../model/course.model";

const API_META = {
    "X-Parse-Application-Id": "8mD3V4aoRtqZJnZXCXxumhH1FJQDhy3HGaxMG2qF",
    "X-Parse-REST-API-Key": "ar2ozqOGm55SsDcm3KvZoFye2sKAozsZ7eEdtxKU"
}

@Injectable({ providedIn: 'root' })
export class CourseService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Course[]> {
        const response = this.http.get<any>('https://parseapi.back4app.com/classes/Course', { headers: API_META })
        return response.pipe(map(a => a.results))
    }
}