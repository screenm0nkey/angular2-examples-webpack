import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {AccordianModule} from './accordian/app.module';
import {MultiTransclusion} from './_main';
import {Comp1, Comp2, EmitterComponent} from './emitter-component';
import {Message, TransclusionSampleApp} from './transclusion';
import {ContentChildrenModule} from "../content-children/_content-children.module";
import {LinquistDirectivesModule} from "../directives-linquist/_linquist-directives.module";
import {MultiContentComponent, MultiContentConfigComponent} from "./multi-content";

@NgModule({
  imports: [SharedModule, AccordianModule, ContentChildrenModule, LinquistDirectivesModule],
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
