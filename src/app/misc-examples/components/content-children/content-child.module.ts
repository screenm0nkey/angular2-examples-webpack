import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {MyComponent, SuperListComponent} from "./problem-one";
import {FixMyComponent, FixSuperListComponent, SuperListDirective} from "./problem-one-fix";
import {RookieComponent} from "./main";

@NgModule({
  imports: [SharedModule],
  declarations: [
    RookieComponent,
    MyComponent,
    SuperListComponent,
    FixMyComponent,
    FixSuperListComponent,
    SuperListDirective
  ]
})
export class ContentChildModule {
}

export {RookieComponent};
