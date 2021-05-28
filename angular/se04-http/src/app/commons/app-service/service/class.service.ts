import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ApiClient } from "../client/api.client";
import { Class } from "../model/class.model";

const API = `${environment.api.url}/classes/Class`

@Injectable({ providedIn: 'root' })
export class ClassService {

    private client: ApiClient
    private convertToVO = (data: any) => {
        const { startDate, ...others } = data
        others['startDate'] = startDate.iso
        return others
    }

    constructor(http: HttpClient) {
        this.client = new ApiClient(http, API)
    }

    search(form: any): Observable<Class[]> {
        const params: any = { include: 'course' }
        return this.client.search(params).pipe(
            map(data => data.results),
            map(data => {
                const array: any[] = data
                return array.map(a => this.convertToVO(a))
            })
        )
    }

    save(data: any): Observable<boolean> {
        const { course, startDate, ...others } = data
        others['course'] = {
            "__type": "Pointer",
            "className": "Course",
            "objectId": course
        }
        others['startDate'] = {
            "__type": "Date",
            "iso": new Date(startDate)
        }

        const resp = others.objectId ? this.client.update(others) : this.client.create(others)

        return resp.pipe(
            map(data => !data.error)
        )
    }

    findById(id: string): Observable<Class> {
        return this.client.findOne(id, { include: 'course' }).pipe(
            map(data => this.convertToVO(data))
        )
    }
}