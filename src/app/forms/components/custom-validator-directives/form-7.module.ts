import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {FormSevenComponent} from './form-7.component';
import {FormSevenEmailValidator} from './custom-validator-directive';
import {FormSevenEmailValidatorWithDeps} from './custom-validator-directive-with-deps';

@NgModule({
  imports: [SharedModule],
  declarations: [
    FormSevenComponent,
    FormSevenEmailValidator,
    FormSevenEmailValidatorWithDeps
  ]
})
export class FormSevenModule {
}

export {FormSevenComponent};
