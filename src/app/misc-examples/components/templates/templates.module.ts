import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {TemplateComponent} from "./main.component";
import {IfTemplateSampleApp, NgBookIf} from "./simple-ng-book-if.component";
import {ForTemplateSampleApp, NgBookRepeat} from "./simple-ng-book-for.component";


@NgModule({
  imports: [SharedModule],
  declarations: [
    TemplateComponent,
    IfTemplateSampleApp, NgBookIf,
    ForTemplateSampleApp, NgBookRepeat
  ]
})
export class TemplatesModule {
}

export {TemplateComponent}
