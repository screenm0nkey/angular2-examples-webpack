import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import { DynamicFormElevenComponent } from './dynamic-form-11.component';
import { FormElevenComponent } from './main.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    DynamicFormElevenComponent,
    FormElevenComponent
  ]
})
export class FormElevenModule {
}




