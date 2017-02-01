import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {MainChildrenApp} from "./main";
import {ViewChildrenComponent, SuperItemComponent} from "./children-child";
import {CountdownViewChildParentComponent, CountdownTimerComponent} from "./view-child";

@NgModule({
  imports: [SharedModule],
  declarations: [
    MainChildrenApp,
    ViewChildrenComponent, SuperItemComponent,
    CountdownViewChildParentComponent, CountdownTimerComponent
  ]
})
export class ChildViewsModule {
}

export {MainChildrenApp}
