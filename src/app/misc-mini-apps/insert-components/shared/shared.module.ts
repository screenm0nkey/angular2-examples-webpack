import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InvalidDateValidatorDirective } from '@insertApp/shared/invalid-date.directive';
import { SpinnerOverlayWrapperModule } from '@insertApp/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.module';
import { SpinnerOverlayModule } from '@insertApp/shared/spinner-overlay/spinner-overlay.module';
import { SpinnerModule } from '@insertApp/shared/spinner/spinner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SpinnerModule,
    SpinnerOverlayWrapperModule,
    AppMaterialModule,
    OverlayModule,
    SpinnerOverlayModule,
    TranslateModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InvalidDateValidatorDirective,
    SpinnerModule,
    SpinnerOverlayWrapperModule,
    TranslateModule,
    AppMaterialModule,
    NgbModule
  ],
  declarations: [
    InvalidDateValidatorDirective
  ],
})
export class InsertsSharedModule { }
