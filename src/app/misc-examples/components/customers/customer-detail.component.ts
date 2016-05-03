import {Component} from '@angular/core';
import {RouterLink, RouteParams, RouteData} from '@angular/router-deprecated';
import {DataService} from './data.service';
import {Customer} from "./customer.model";
import {XLarge} from './x-large.directive';

@Component({
    selector: 'orders-component',
    template: require('./customer-detail.tmpl.html'),
    directives: [XLarge, RouterLink],
    providers: [DataService]
})
export class OrdersComponent {
    customer:Customer;
    isProd:string;

    constructor(routeParams:RouteParams,
                dataService:DataService,
                data:RouteData) {

        this.isProd = data.get('isProd');
        let id = parseInt(routeParams.get('id'), 10);
        let stream = dataService.getCustomers()
            .map(customers => {
                return customers.find(c => c.id === id);
            })
            .subscribe(customer => this.customer = customer);
    }
}