import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {FormEightComponent} from './form-8.component';
import {FormEightSurvey} from './survey';

@NgModule({
  imports: [SharedModule],
  declarations: [
    FormEightComponent,
    FormEightSurvey,
  ],
})
export class FormEightModule {
}

export {FormEightComponent}

