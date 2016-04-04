import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CustomersComponent} from './components/customers/customers.component';
import {OrdersComponent} from './components/customers/customer-detail.component';
import {ChickensComponent} from './components/chickens/chickens.component';
import {InventoryApp} from './components/inventory/inputs';
import {HostStuffComponent} from './components/host-binding/main'
import {EmitterComponent} from './components/emitter/emitter-component'
import {ChangeDetectionMain} from './components/change-detection/main'
import {ImmutableMain} from './components/immutable/main'
import { FocusInput } from './components/focusing-input/focus-input'


@Component({
    selector: 'misc-app',
    template: require('./main.html'),
    styles: [require('./main.css')],
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/customers', name: 'Customers', component: CustomersComponent, useAsDefault: true},
    {path: '/customers/:id', name: 'CustomerDetail', component: OrdersComponent,  data: { isProd: 'smoked-fish'}},
    {path: '/chickens', name: 'Chickens', component: ChickensComponent},
    {path: '/inventory', name: 'Inventory', component: InventoryApp},
    {path: '/hoststuff', as: 'HostStuff', component: HostStuffComponent},
    {path: '/emitter', as: 'Emitter', component: EmitterComponent},
    {path: '/change-detection', as: 'ChangeDetection', component: ChangeDetectionMain},
    {path: '/change2', as: 'Change2', component: ImmutableMain},
    {path: '/focus-input', as: 'FocusInput', component: FocusInput},
])
export class MiscExamples {
    constructor() {
    }
}
