import {NgModule} from '@angular/core';
import {routing} from './misc.routes';
import {SharedModule} from '../shared/shared.module';

import {MiscExamplesComponent} from './misc.component';
import {AccordianModule} from './components/accordian/accordian.module';
import {ChickenModule} from './components/chickens/chicken.module';
import {ChangeModule} from './components/change-detection/change.module';
import {ContentChildModule} from './components/content-children/content-child.module';
import {CustomersModule} from './components/customers/customers.module';
import {FocusingInputModule} from './components/focusing-input/focusing.module';
import {HostStuffModule} from './components/host-binding/hosting.module';
import {ImmutableModule} from './components/immutable/immutable.module';
import {DIModule} from './components/inject/di.module';
import {InputBindingModule} from './components/input-binding/inputbinding.module';
import {MultiConentModule} from './components/multi-content/multicontent.module';
import {NgZoneModule} from './components/ng-zone/ngzone.module';
import {NotifcationModule} from './components/notifications/notifications.module';
import {SocketApp} from './components/socket-io/socket-component';
import {ChildViewsModule} from './components/view-children/childviews.module';
import {TricksModule} from './components/tricks/tricks.module';
import {MiscLifecycleModule} from './components/lifecycle/lifecycle.module';
// import {DynamicModule} from './components/dynamic-loader/dynamic.module';


@NgModule({
  imports: [
    routing,
    SharedModule,
    AccordianModule,
    ChickenModule,
    ChangeModule,
    ContentChildModule,
    CustomersModule,
    FocusingInputModule,
    HostStuffModule,
    ImmutableModule,
    DIModule,
    InputBindingModule,
    MultiConentModule,
    NgZoneModule,
    NotifcationModule,
    ChildViewsModule,
    TricksModule,
    MiscLifecycleModule
    // DynamicModule
  ],
  exports : [SharedModule],
  declarations: [
    MiscExamplesComponent,
    SocketApp
  ]
})
export class MiscExamplesModule {
}
