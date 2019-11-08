import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {AccordionModule} from './accordian/_accordian.module';
import {MultiTransclusion} from './_main.component';
import {Comp1, Comp2, EmitterComponent} from './emitter-component';
import {Message, TransclusionSampleApp} from './transclusion';
import {ContentChildrenModule} from "../content-children/_content-children.module";
import {LinquistDirectivesModule} from "../directives-linquist/_linquist-directives.module";
import {MultiContentComponent, MultiContentConfigComponent} from "./multi-content";

@NgModule({
  imports: [SharedModule, AccordionModule, ContentChildrenModule, LinquistDirectivesModule],
  declarations: [
    MultiTransclusion,
    MultiContentComponent, MultiContentConfigComponent,
    EmitterComponent,
    Comp1,
    Comp2,
    TransclusionSampleApp,
    Message
  ]
})
export class MultiContentModule {
}

export {MultiTransclusion};
