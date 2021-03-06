import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {FormTenComponent} from './form-10.component';
import {FormTenTemplateDrivenComponent} from './template-driven';
import {FormTenModelDrivenComponent} from './model-driven';
import {FormTenCounterInputComponent} from './custom-form-control.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    FormTenComponent,
    FormTenTemplateDrivenComponent,
    FormTenModelDrivenComponent,
    FormTenCounterInputComponent
  ]
})
export class FormTenModule {
}

export {FormTenComponent};
