import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {AppComponent} from "./app.component";
import {PushNotificationComponent} from "./notification.component";

@NgModule({
  imports: [SharedModule],
  declarations: [AppComponent, PushNotificationComponent]
})
export class NotifcationModule {
}

export {AppComponent};
