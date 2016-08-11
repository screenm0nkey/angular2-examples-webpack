import {CustomersComponent} from './components/customers/customers.main.component';
import {CustomerDetailComponent} from './components/customers/customer-detail.component';
import {ChickensComponent} from './components/chickens/main.component';
import {MainInputBindingApp} from './components/input-binding/main';
import {HostStuffComponent} from './components/host-binding/main';
import {MultiTransclusion} from './components/multi-content/main';
import {ChangeDetectionMain} from './components/change-detection/main';
import {ImmutableMain} from './components/immutable/main';
import {FocusInput} from './components/focusing-input/main';
import {NgZoneMainComponent} from './components/ng-zone/main';
import {AccordianComponent} from './components/accordian/accordian';
import {DynamicExamplesMain} from './components/dynamic-loader/main';
import {RookieComponent} from './components/content-children/main';
import {MainChildrenApp} from './components/view-children/main';
import {SocketApp} from './components/socket-io/socket-component';
import {TricksMainComponent} from './components/tricks/main';
import {AppComponent} from './components/notifications/app.component';
import {DepInjectionApp} from './components/inject/dependency-injection';


export default [
    {path: '', redirectTo: 'customers', terminal: true},
    {path: 'dependency', component: DepInjectionApp},
    {path: 'customers', component: CustomersComponent},
    {path: 'customers/:id', component: CustomerDetailComponent},
    {path: 'chickens', component: ChickensComponent},
    {path: 'input-binding', component: MainInputBindingApp},
    {path: 'hoststuff', component: HostStuffComponent},
    {path: 'emitter', component: MultiTransclusion},
    {path: 'change-detection', component: ChangeDetectionMain},
    {path: 'change2', component: ImmutableMain},
    {path: 'focus-input', component: FocusInput},
    {path: 'ngzone', component: NgZoneMainComponent},
    {path: 'accordian', component: AccordianComponent},
    {path: 'dynamic-component', component: DynamicExamplesMain},
    {path: 'rookie-mistakes', component: RookieComponent},
    {path: 'view-children', component: MainChildrenApp},
    {path: 'socket-io', component: SocketApp},
    {path: 'notifications', component: AppComponent},
    {path: 'tricks', component: TricksMainComponent}
]

