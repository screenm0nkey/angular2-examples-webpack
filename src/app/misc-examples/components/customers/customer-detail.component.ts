import {Component} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "./services/data.service";
import {Customer} from "./services/customer.model";

@Component({
  selector: "orders-component",
  template: `
    <div class="comps">
      <div>
        <p style="background-color: lightgrey">
          The data used in this view is retrieved using <code>Params</code> from <code>ActivatedRoute</code>
          and it's only passed when the component is instantiated
        </p>

        <p><a routerLink="../"><< Back to all Customers</a></p>

        <section *ngIf="customer">
          <p x-large>{{customer.firstName}} {{customer.lastName}}</p>
          <p><img src="/images/{{customer.gender | lowercase}}.png" class="avatar" width="20px"></p>
          <p>{{customer.address}}</p>
          <p>{{customer.city}}</p>
          <p>{{customer.state.name}}</p>
        </section>
      </div>
    </div>
  `
})
export class CustomerDetailComponent {
  customer: Customer;

  constructor(private route: ActivatedRoute, public dataService: DataService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params["id"], 10);
      this.dataService
        .getCustomers()
        .map(customers => {
          return customers.find(c => c.id === id);
        })
        .subscribe(customer => (this.customer = customer));
    });
  }
}
