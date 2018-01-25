import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {TemplateComponent} from "./main.component";
import {IfTemplateSampleApp, NgBookIf} from "./simple-ng-book-if.component";
import {NgBookRepeatComponent, NgBookRepeatDirective} from "./simple-ng-book-repeat.component";

@NgModule({
  imports: [SharedModule],
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
