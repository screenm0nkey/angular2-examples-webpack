import {NgModule} from "@angular/core";
import {EggheadExamplesModule} from "./egghead-example/egghead.module";
import {SharedModule} from "../shared/shared.module";
import {MiniAppsRoutingModule} from "./mini-apps-routing.module";
import {MiniAppsComponent} from "./mini-apps.component";
import {CustomersModule} from "./customers/customers.module";
import {ReduxChatAppModule} from "./chat-app-redux/ts/app.module";

@NgModule({
  // modules only need to be imported if they are not lazy loaded
  imports: [
    SharedModule,
    MiniAppsRoutingModule,
    EggheadExamplesModule,
    CustomersModule,
    ReduxChatAppModule
  ],
  declarations: [MiniAppsComponent]
})
export class MiniAppsModule {
}
