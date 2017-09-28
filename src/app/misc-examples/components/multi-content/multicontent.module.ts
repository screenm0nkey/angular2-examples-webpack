import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {AccordianModule} from "./accordian/app.module";
import {MultiTransclusion, ContentProjectionComponent} from "./named-content";
import {EmitterComponent, Comp1, Comp2} from "./emitter-component";
import {TransclusionSampleApp, Message} from "./transclusion";
import {Tab, Tabset, TabsSampleApp} from "./tabs";


@NgModule({
  imports: [
    SharedModule,
    AccordianModule
  ],
  declarations: [
    MultiTransclusion, ContentProjectionComponent,
    EmitterComponent, Comp1, Comp2,
    TransclusionSampleApp, Message,
    Tab, Tabset, TabsSampleApp,
  ]
})
export class MultiContentModule {
}

export {MultiTransclusion}
