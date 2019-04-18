import {NgModule} from '@angular/core';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {SharedModule} from '../../../shared/shared.module';
import {AppComponent} from './main.component';
import {PushNotificationComponent} from './notification.component';
import {Ng6SocketAppComponent} from "./ng6-socket-app.component";

const config: SocketIoConfig = {url: 'http://localhost:1970', options: {}};

@NgModule({
  imports: [
    SharedModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    AppComponent,
    PushNotificationComponent,
    Ng6SocketAppComponent
  ],
  providers: []
})
export class NotifcationModule {
}

export {AppComponent};
