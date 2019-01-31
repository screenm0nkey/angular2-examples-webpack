import {NgModule} from '@angular/core';
import {SocketIoConfig, SocketIoModule} from 'ng6-socket-io';
import {SharedModule} from '../../../shared/shared.module';
import {AppComponent} from './main.component';
import {PushNotificationComponent} from './notification.component';
import {SocketApp} from './socket-component';

const config: SocketIoConfig = { url: 'https://socket-chat-example-qsaokhakmv.now.sh', options: {} };

@NgModule({
  imports: [
    SharedModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    AppComponent,
    PushNotificationComponent,
    SocketApp
  ],
})
export class NotifcationModule {
}

export {AppComponent};
