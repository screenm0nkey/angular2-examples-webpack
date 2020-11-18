import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { InvalidDateValidatorDirective } from '@standaloneApp/shared/invalid-date.directive';
import { SpinnerModule } from '@standaloneApp/shared/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    OverlayModule,
    TranslateModule,
    NgbModule,
    SpinnerModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InvalidDateValidatorDirective,
    SpinnerModule,
    TranslateModule,
    AppMaterialModule,
    NgbModule
  ],
  declarations: [
    InvalidDateValidatorDirective
  ],
})
export class InsertsSharedModule { }
