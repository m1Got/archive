import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from "@angular/common/http";

import { PersistanceService } from "src/app/core/services";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private persistanceService: PersistanceService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const lng = this.persistanceService.get("lng") ?? "ru";
    const token = this.persistanceService.get("accessToken");

    request = request.clone({
      setHeaders: {
        Authorization: token ? `Bearer ${token}` : "",
        "Access-Control-Allow-Origin": "*",
        "Accept-Language": lng,
      },
    });

    return next.handle(request);
  }
}
