import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SecurityContext } from "./security.context";

@Injectable({ providedIn: 'root' })
export class SecurityInterceptor implements HttpInterceptor {

    constructor(private security: SecurityContext) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let clone = req;

        if (this.security.sessionToken) {
            clone = req.clone({ headers: req.headers.append(environment.api.sessionKey, this.security.sessionToken) })
        }

        return next.handle(clone)
    }

}