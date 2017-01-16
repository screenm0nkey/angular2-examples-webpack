import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {TemplateComponent} from './main.component';
import {IfTemplateSampleApp, NgBookIf} from './if';
import {ForTemplateSampleApp,NgBookRepeat} from './for';


@NgModule({
  imports: [SharedModule],
  declarations: [
    TemplateComponent,
    IfTemplateSampleApp, NgBookIf,
    ForTemplateSampleApp,NgBookRepeat
  ]
})
export class TemplatesModule {}

export {TemplateComponent}
