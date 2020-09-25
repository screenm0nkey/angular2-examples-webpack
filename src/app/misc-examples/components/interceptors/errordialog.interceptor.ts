import { Injectable } from "@angular/core";
import { ErrorDialogService } from "./errordialog.service";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ErrorDialogInterceptor implements HttpInterceptor {
  constructor(public errorDialogService: ErrorDialogService) {
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem("token");
    if (token) {
      // "Authorization : Bearer" format are most likely implementing OAuth 2.0 bearer tokens.
      request = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + token)
      });
    }
    if (!request.headers.has("Content-Type")) {
      request = request.clone({
        headers: request.headers.set("Content-Type", "application/json")
      });
    }
    request = request.clone({
      headers: request.headers.set("Accept", "application/json")
    });
    console.log("%cHttpConfigInterceptor HttpRequest", "color:yellow", request);

    // this deals with the response
    return next
      .handle(request)
      .pipe(map(this.onSuccess), catchError(this.onError));
  }

  onSuccess(event: HttpEvent<any>) {
    if (event instanceof HttpResponse) {
      console.log("%cHttpConfigInterceptor HttpResponse", "color:gold", event);
      try {
        const json = JSON.parse(event.body);
        Object.assign(event, json);
      } catch (error) {
        console.error("Reponse not JSON format", event.url);
      }
    }
    return event;
  }

  onError(error: HttpErrorResponse) {
    debugger;
    let data;
    if (error.error) {
      data = {
        reason:
          error.error && error.error.reason
            ? error.error.reason
            : error.message,
        status: error.status
      };
    }
    this.errorDialogService.openDialog(data || error);
    return throwError(error);
  }
}
