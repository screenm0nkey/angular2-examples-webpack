import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {MultiTransclusion, ContentProjectionComponent} from './main';
import {EmitterComponent, Comp1, Comp2} from './emitter-component';
import {TransclusionSampleApp, Message} from './transclusion';
import {Tab,Tabset,TabsSampleApp} from './tabs';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MultiTransclusion, ContentProjectionComponent,
    EmitterComponent, Comp1, Comp2,
    TransclusionSampleApp, Message,
    Tab,Tabset,TabsSampleApp
  ]
})
export class MultiConentModule {
}

export {MultiTransclusion}
