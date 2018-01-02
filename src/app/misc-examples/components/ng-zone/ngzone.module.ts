import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/shared.module";
import { NgZoneMainComponent } from "./main";
import { NgZoneDemo } from "./runoutside";

@NgModule({
  imports: [SharedModule],
  declarations: [NgZoneMainComponent, NgZoneDemo]
})
export class NgZoneModule {}

export { NgZoneMainComponent };
