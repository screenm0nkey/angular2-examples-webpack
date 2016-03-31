import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CustomersComponent} from './components/customers/customers.component';
import {OrdersComponent} from './components/customers/customer-detail.component';
import {ChickensComponent} from './components/chickens/chickens.component';
import {InventoryApp} from './components/inventory/inputs';


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
    {path: '/inventory', name: 'Inventory', component: InventoryApp}
])
export class MiscExamples {
    constructor() {
    }
}
