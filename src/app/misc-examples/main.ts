import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {InjectComponent} from './components/inject/injecting-token';
import {CustomersComponent} from './components/customers/customers.component';
import {OrdersComponent} from './components/customers/customer-detail.component';
import {ChickensComponent} from './components/chickens/main.component';
import {InventoryApp} from './components/inventory/inputs';
import {HostStuffComponent} from './components/host-binding/main';
import {MultiTransclusion} from './components/multi-content/main';
import {ChangeDetectionMain} from './components/change-detection/main';
import {ImmutableMain} from './components/immutable/main';
import {FocusInput} from './components/focusing-input/main';
import {NgZoneMainComponent} from './components/ng-zone/main';
import {AccordianComponent} from './components/accordian/accordian';
import {DynamicComponent} from './components/dynamic-loader/main';
import {RookieComponent} from './components/content-children/main';
import {ViewChildrenComponent} from './components/view-children/problem-one-fix';

@Component({
    selector: 'misc-app',
    template: require('./main.html'),
    styles : [require('../../styles/layout.css')],
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES, InjectComponent]
})
@RouteConfig([
    {path: '/customers', name: 'Customers', component: CustomersComponent, useAsDefault: true},
    {path: '/customers/:id', name: 'CustomerDetail', component: OrdersComponent, data: {isProd: 'smoked-fish'}},
    {path: '/chickens', name: 'Chickens', component: ChickensComponent},
    {path: '/inventory', name: 'Inventory', component: InventoryApp},
    {path: '/hoststuff', as: 'HostStuff', component: HostStuffComponent},
    {path: '/emitter', as: 'Emitter', component: MultiTransclusion},
    {path: '/change-detection', as: 'ChangeDetection', component: ChangeDetectionMain},
    {path: '/change2', as: 'Change2', component: ImmutableMain},
    {path: '/focus-input', as: 'FocusInput', component: FocusInput},
    {path: '/ngzone', as: 'NgZone', component: NgZoneMainComponent},
    {path: '/accordian', as: 'Accordian', component: AccordianComponent},
    {path: '/dynamic-component', as: 'DynamicComponent', component: DynamicComponent},
    {path: '/rookie-mistakes', as: 'RookieComponent', component: RookieComponent},
    {path: '/view-children', as: 'ViewChildrenComponent', component: ViewChildrenComponent}
])
export class MiscExamples {
    constructor() {
    }
}
