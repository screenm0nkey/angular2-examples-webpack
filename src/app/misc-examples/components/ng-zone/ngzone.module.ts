import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {NgZoneMainComponent} from './main';
import {NgZoneDemo} from './runoutside';
import {NgStyleSampleApp} from './ng-style';

@NgModule({
  imports: [SharedModule],
  declarations: [
    NgZoneMainComponent,
    NgZoneDemo,
    NgStyleSampleApp
  ]
})
export class NgZoneModule {
}

export {NgZoneMainComponent}
