import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class ApiClientInterceptor implements HttpInterceptor {

    private appId = environment.api.appId
    private apiKey = environment.api.apiKey

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req.clone({
            headers: req.headers
                .append(this.appId.key, this.appId.value)
                .append(this.apiKey.key, this.apiKey.value)
        }))
    }

}