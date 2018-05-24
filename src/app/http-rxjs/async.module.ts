import { NgModule } from "@angular/core";
import { AsyncRoutingModule } from "./async.routes.module";
import { SharedModule } from "../shared/shared.module";
import { MainHttpRxJs } from "./async.component";
import { JohnLinquistModule } from "./john-linquist/john.module";

@NgModule({
  imports: [
    SharedModule,
    AsyncRoutingModule,
    JohnLinquistModule,
  ],
  declarations: [
    MainHttpRxJs
  ]
})
export class HttpRxJsModule {}
