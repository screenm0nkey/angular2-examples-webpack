import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {SpeedyMainComponent} from "./main";
import {SpeedingComponent} from "./speedy.component";
import {BoxZoneComponent, SpeedingZonesComponent} from "./speedy-with-zones.component";
import {BoxComponent} from "./box.component";
import {SimpleNgFor} from "./simple-ngfor.directive";

@NgModule({
  imports: [SharedModule],
  declarations: [
    SpeedyMainComponent,
    SpeedingComponent,
    BoxComponent,
    SimpleNgFor,
    SpeedingZonesComponent,
    BoxZoneComponent
  ]
})
export class SpeedyModule {
}

export {SpeedyMainComponent};
