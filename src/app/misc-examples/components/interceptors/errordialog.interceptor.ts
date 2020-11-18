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

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem("token");
    if (token) {
      // "Authorization : Bearer" format are most likely implementing OAuth 2.0 bearer tokens.
      const authreq = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      });
    }
    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json")
      });
    }

    // The practice of cloning a request to set new headers is so common that there's a setHeaders shortcut for it:
    req = req.clone({ setHeaders: { "Accept": "application/json" } });

    console.log("%cHttpConfigInterceptor HttpRequest", "color:yellow", req);
    // this deals with the response
    return next
      .handle(req)
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
