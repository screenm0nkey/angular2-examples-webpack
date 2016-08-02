import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';

import {DataService} from './services/data.service';
import {Customer} from "./customer.model";
import {XLarge} from './directives/x-large.directive';

@Component({
    selector: 'orders-component',
    template: require('./customer-detail.tmpl.html'),
    directives: [XLarge, ROUTER_DIRECTIVES],
    providers: [DataService]
})
export class CustomerDetailComponent {
    customer:Customer;
    isProd:string;

    constructor(private route: ActivatedRoute, public dataService:DataService) {}

    ngOnInit() {
        this.route.params.subscribe((params:any) => {
            let id = parseInt(params.id, 10);
            let stream = this.dataService.getCustomers()
                .map(customers => {
                    return customers.find(c => c.id === id);
                });
            stream.subscribe(customer => this.customer = customer);
        });
    }

}