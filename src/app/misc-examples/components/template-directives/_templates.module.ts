import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {TemplateComponent} from './main.component';
import {IfTemplateSampleApp, NgBookIf} from './simple-ng-book-if.component';
import {NgBookRepeatComponent} from './simple-ng-book-repeat.component';
import { LinquistDirectivesModule } from '../directives-linquist/_linquist-directives.module';
import { NgBookRepeatDirective } from './simple-ng-book-repeat.directive';

@NgModule({
  imports: [SharedModule, LinquistDirectivesModule],
  declarations: [
    TemplateComponent,
    IfTemplateSampleApp,
    NgBookIf,
    NgBookRepeatComponent,
    NgBookRepeatDirective
  ]
})
export class TemplatesModule {
}

export {TemplateComponent};
