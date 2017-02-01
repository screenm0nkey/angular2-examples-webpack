import {NgModule} from "@angular/core";
import {MiscRoutingModule} from "./misc.routes.module";
import {SharedModule} from "../shared/shared.module";
import {MiscExamplesComponent} from "./misc.component";
import {ChildViewsModule} from "./components/view-children/childviews.module";
import {TricksModule} from "./components/tricks/tricks.module";
import {AccordianModule} from "./components/accordian/accordian.module";
import {ChickenModule} from "./components/chickens/chicken.module";
import {ChangeModule} from "./components/change-detection/change.module";
import {ContentChildModule} from "./components/content-children/content-child.module";
import {CustomersModule} from "./components/customers/customers.module";
import {FocusingInputModule} from "./components/focusing-input/focusing.module";
import {HostBindingModule} from "./components/host-binding/hosting.module";
import {DirectivesLinquistModule} from "./components/directives-linquist/directives.module";
import {ImmutableModule} from "./components/immutable/immutable.module";
import {DIModule} from "./components/inject/di.module";
import {InputBindingModule} from "./components/input-binding/inputbinding.module";
import {MultiContentModule} from "./components/multi-content/multicontent.module";
import {NgZoneModule} from "./components/ng-zone/ngzone.module";
import {NotifcationModule} from "./components/notifications/notifications.module";
import {SocketApp} from "./components/socket-io/socket-component";
import {MiscLifecycleModule} from "./components/lifecycle/lifecycle.module";
import {TemplatesModule} from "./components/templates/templates.module";


@NgModule({
  imports: [
    MiscRoutingModule,
    SharedModule,
    TricksModule,
    ChildViewsModule,
    AccordianModule,
    ChickenModule,
    ChangeModule,
    ContentChildModule,
    CustomersModule,
    FocusingInputModule,
    HostBindingModule,
    ImmutableModule,
    DIModule,
    InputBindingModule,
    MultiContentModule,
    NgZoneModule,
    NotifcationModule,
    MiscLifecycleModule,
    TemplatesModule,
    DirectivesLinquistModule
  ],
  exports: [SharedModule],
  declarations: [
    MiscExamplesComponent,
    SocketApp
  ]
})
export class MiscExamplesModule {
}
