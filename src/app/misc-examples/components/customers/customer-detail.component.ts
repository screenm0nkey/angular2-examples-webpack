import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from './services/data.service';
import {Customer} from "./customer.model";

@Component({
  selector: 'orders-component',
  templateUrl: 'customer-detail.tmpl.html',
})
export class CustomerDetailComponent {
  customer: Customer;
  isProd: string;

  constructor(private route: ActivatedRoute, public dataService: DataService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id'], 10);
      let stream = this.dataService.getCustomers()
        .map(customers => {
          return customers.find(c => c.id === id);
        });
      stream.subscribe(customer => this.customer = customer);
    });
  }

}
