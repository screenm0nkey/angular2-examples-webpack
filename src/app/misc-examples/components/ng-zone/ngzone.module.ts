import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {NgZoneMainComponent} from "./main";
import {NgZoneDemo} from "./runoutside";
import {JordiComponent,BoxComponent} from "./jordi-example";

@NgModule({
  imports: [SharedModule],
  declarations: [
    NgZoneMainComponent,
    NgZoneDemo,
    JordiComponent,BoxComponent
  ]
})
export class NgZoneModule {
}

export {NgZoneMainComponent}
