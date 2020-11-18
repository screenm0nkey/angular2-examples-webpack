import { NgModule } from '@angular/core';
import { EggheadMiniAppModule } from './egghead-example/egghead.module';
import { SharedModule } from '../shared/_shared.module';
import { MiniAppsRoutingModule } from './mini-apps-routing.module';
import { MiniAppsComponent } from './mini-apps.component';
import { CustomersModule } from './customers/customers.module';
import { ReduxChatAppModule } from './chat-app-redux/ts/app.module';
import { InsertAppModule } from '@standaloneApp/_app.module';

@NgModule({
  // modules only need to be imported if they are not lazy loaded
  imports: [
    SharedModule,
    MiniAppsRoutingModule,
    EggheadMiniAppModule,
    CustomersModule,
    ReduxChatAppModule,
    InsertAppModule,
  ],
  declarations: [MiniAppsComponent]
})
export class MiniAppsModule {
}
