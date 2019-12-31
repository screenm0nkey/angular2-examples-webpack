import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/_shared.module";
import { AppComponent } from "./main.component";
import { PushNotificationComponent } from "./notification.component";
import { Ng6SocketAppComponent } from "./ng6-socket-app.component";

@NgModule({
  imports: [SharedModule],
  declarations: [AppComponent, PushNotificationComponent, Ng6SocketAppComponent]
})
export class NotifcationModule {}

export { AppComponent };
