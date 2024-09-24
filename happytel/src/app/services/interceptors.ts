import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { PersistanceService } from "./persistance.service";

@Injectable()
export class Interceptors implements HttpInterceptor {
  constructor(private persistance: PersistanceService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const language = this.persistance.get("language");
    const token = this.persistance.get("accessToken");

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Accept-Language": language ?? "ru",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const modifiedReq = req.clone({ setHeaders: headers });

    return next.handle(modifiedReq).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log(`Request for ${req.url} completed`, event.body);
        }
      }),
    );
  }
}
