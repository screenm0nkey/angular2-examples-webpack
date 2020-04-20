import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/_shared.module';
import { FormErrorAppComponent } from './app.component';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { ControlErrorComponent } from './control-error.component';
import { ControlErrorsDirective } from './control-errors.directive';
import { FormSubmitDirective } from './form-submit.directive';


@NgModule({
  imports: [SharedModule],
  declarations: [
    FormErrorAppComponent, 
    ControlErrorsDirective, 
    ControlErrorComponent, 
    ControlErrorContainerDirective, 
    FormSubmitDirective
  ],
  entryComponents: [
    ControlErrorComponent
  ],
})
export class FormErrorAppModule { }
