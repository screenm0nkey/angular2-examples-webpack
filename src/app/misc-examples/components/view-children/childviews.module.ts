import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {MainChildrenApp} from "./main";
import {KeepCountComponent, SuperItemComponent, ViewChildrenComponent} from "./children-child";
import {CountdownTimerComponent, CountdownViewChildParentComponent} from "./view-child";

@NgModule({
  imports: [SharedModule],
  declarations: [
    MainChildrenApp,
    ViewChildrenComponent, SuperItemComponent, KeepCountComponent,
    CountdownViewChildParentComponent, CountdownTimerComponent
  ]
})
export class ChildViewsModule {
}

export {MainChildrenApp}
