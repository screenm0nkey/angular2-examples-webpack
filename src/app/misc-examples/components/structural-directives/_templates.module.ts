import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/_shared.module';
import { LinquistDirectivesModule } from '../directives-linquist/_linquist-directives.module';
import { NgZoneModule } from '../ng-zone/ngzone.module';
import { TemplateComponent } from './main.component';
import { IfTemplateSampleApp, NgBookIf } from './simple-ng-book-if.component';
import { NgBookRepeatComponent } from './simple-ng-book-repeat.component';
import { NgBookRepeatDirective } from './simple-ng-book-repeat.directive';

@NgModule({
  imports: [SharedModule, LinquistDirectivesModule, NgZoneModule],
  exports: [
    TemplateComponent,
    IfTemplateSampleApp,
    NgBookIf,
    NgBookRepeatComponent,
    NgBookRepeatDirective
  ],
  declarations: [
    TemplateComponent,
    IfTemplateSampleApp,
    NgBookIf,
    NgBookRepeatComponent,
    NgBookRepeatDirective
  ]
})
export class StructuralDirectivesModule {
}

export { TemplateComponent };
