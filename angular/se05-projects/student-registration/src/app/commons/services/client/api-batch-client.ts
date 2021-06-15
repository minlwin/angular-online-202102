import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BatchOperation } from "../../commons/model/entity.model";

@Injectable({ providedIn: 'root' })
export class ApiBatchClient {

    private api = `${environment.api.url}/batch`

    constructor(private http: HttpClient) { }

    execute(operations: BatchOperation[]) {
        return this.http.post(this.api, { requests: operations })
    }
}