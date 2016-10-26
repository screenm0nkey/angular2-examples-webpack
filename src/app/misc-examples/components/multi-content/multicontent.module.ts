import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {MultiTransclusion} from './main';
import {EmitterComponent, Comp1, Comp2} from './emitter-component';
import {ContentProjectionComponent} from './multi-content';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MultiTransclusion,
    EmitterComponent, Comp1, Comp2,
    ContentProjectionComponent
  ]
})
export class MultiConentModule {
}

export {MultiTransclusion}
