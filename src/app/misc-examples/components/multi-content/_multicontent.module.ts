import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {EmitterComponent, EmitterSub1Component, EmitterSub2Component} from './emitter-component';
import {ContentProjectionExample, Message} from './transclusion';
import {MultiContentComponent, MultiContentConfigComponent} from "./multi-content";
import {AccordionModule} from "./accordian/_accordian.module";

@NgModule({
  imports: [SharedModule],
  exports: [
    MultiContentComponent, MultiContentConfigComponent,
    EmitterComponent, EmitterSub1Component, EmitterSub2Component,
    ContentProjectionExample,
    Message,
    AccordionModule
  ],
  declarations: [
    MultiContentComponent, MultiContentConfigComponent,
    EmitterComponent, EmitterSub1Component, EmitterSub2Component,
    ContentProjectionExample,
    Message
  ]
})
export class MultiContentModule {
}

