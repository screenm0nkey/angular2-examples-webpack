import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {LoginService} from "./login.service";
import {ErrorDialogService} from "./errordialog.service";
import {HttpConfigInterceptor} from "./httpconfig.interceptor";
import {ErrorDialogComponent} from "./errordialog.component";
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatDialogModule} from '@angular/material';
import {InterceptorComponent} from "./interceptor.component";

@NgModule({
  imports: [
    SharedModule,
    MatDialogModule
  ],
  declarations: [
    ErrorDialogComponent,
    InterceptorComponent
  ],
  providers: [
    LoginService,
    ErrorDialogService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}
  ],
  entryComponents: [ErrorDialogComponent],
})
export class InterceptorModule {
}
