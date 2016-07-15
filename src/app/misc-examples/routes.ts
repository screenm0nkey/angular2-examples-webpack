import {CustomersComponent} from './components/customers/customers.component';
import {CustomerDetailComponent} from './components/customers/customer-detail.component';
import {ChickensComponent} from './components/chickens/main.component';
import {InventoryApp} from './components/inventory/inputs';
import {HostStuffComponent} from './components/host-binding/main';
import {MultiTransclusion} from './components/multi-content/main';
import {ChangeDetectionMain} from './components/change-detection/main';
import {ImmutableMain} from './components/immutable/main';
import {FocusInput} from './components/focusing-input/main';
import {NgZoneMainComponent} from './components/ng-zone/main';
import {AccordianComponent} from './components/accordian/accordian';
import {DynamicExamplesMain} from './components/dynamic-loader/main';
import {RookieComponent} from './components/content-children/main';
import {ViewChildrenComponent} from './components/view-children/problem-one-fix';
import {SocketApp} from './components/socket-io/socket-component';
import {TricksMainComponent} from './components/tricks/main';
import {AppComponent} from './components/notifications/app.component';

export default [
    {path: '', redirectTo: 'customers', terminal: true},
    {path: 'customers', component: CustomersComponent},
    {path: 'customers/:id', component: CustomerDetailComponent},
    {path: 'chickens', component: ChickensComponent},
    {path: 'inventory', component: InventoryApp},
    {path: 'hoststuff', component: HostStuffComponent},
    {path: 'emitter', component: MultiTransclusion},
    {path: 'change-detection', component: ChangeDetectionMain},
    {path: 'change2', component: ImmutableMain},
    {path: 'focus-input', component: FocusInput},
    {path: 'ngzone', component: NgZoneMainComponent},
    {path: 'accordian', component: AccordianComponent},
    {path: 'dynamic-component', component: DynamicExamplesMain},
    {path: 'rookie-mistakes', component: RookieComponent},
    {path: 'view-children', component: ViewChildrenComponent},
    {path: 'socket-io', component: SocketApp},
    {path: 'notifications', component: AppComponent},
    {path: 'tricks', component: TricksMainComponent}
]

