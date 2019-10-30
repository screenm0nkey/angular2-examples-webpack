import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {NgZoneMainComponent} from './ngzone-main.component';
import {NgZoneDemo} from './runoutside';
import {BoxComponent} from './box.component';
import {BoxZoneComponent, SpeedingZonesComponent} from './speedy-with-zones.component';
import {SimpleNgFor} from './simple-ngfor.directive';
import {SpeedingComponent} from './speedy.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    NgZoneMainComponent,
    NgZoneDemo,
    SpeedingComponent,
    BoxComponent,
    SimpleNgFor,
    SpeedingZonesComponent,
    BoxZoneComponent
  ]
})
export class NgZoneModule {

}

export {NgZoneMainComponent};
