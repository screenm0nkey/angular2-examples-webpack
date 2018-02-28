import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {AppComponent} from "./main.component";
import {PushNotificationComponent} from "./notification.component";
import {SocketApp} from "./socket-component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    AppComponent,
    PushNotificationComponent,
    SocketApp
  ]
})
export class NotifcationModule {
}

export {AppComponent};
