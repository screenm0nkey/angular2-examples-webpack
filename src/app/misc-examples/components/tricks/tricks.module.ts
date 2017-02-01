import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {TricksMainComponent} from "./main";
import {ScrollComponent} from "./scroll-bottom";
import {NextComponent} from "./next-input";
import {Typewriter} from "./typewriter";

@NgModule({
  imports: [SharedModule],
  declarations: [
    TricksMainComponent,
    ScrollComponent,
    NextComponent,
    Typewriter
  ]
})
export class TricksModule {
}

export {TricksMainComponent}
