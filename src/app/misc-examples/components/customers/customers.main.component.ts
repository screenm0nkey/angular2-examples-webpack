import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from "./services/customer.model";
import { DataService } from "./services/data.service";
import { Sorter } from "./services/sorter.service";

@Component({
  selector: "customers-component",
  templateUrl: "customers.tmpl.html",
  styleUrls: ["./customers.css"]
})
export class CustomersComponent implements OnInit {
  filterText: string = "filter customers";
  displayAsList: boolean;
  customers: Customer[];
  filteredCustomers: Customer[];

  constructor(
    public dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public sorter: Sorter
  ) {
    this.customers = [];
  }

  ngOnInit() {
    this.filterText;
    this.displayAsList = false;
    this.filteredCustomers = this.customers = [];
    this.dataService
      .getCustomers()
      .subscribe(
        (customers: Customer[]) =>
          (this.customers = this.filteredCustomers = customers)
      );
  }

  changeDisplayMode(type) {
    this.displayAsList = type === "list";
  }

  filterChanged(txt) {
    if (txt) {
      let props = ["firstName", "lastName", "orderTotal"];
      let filtered = this.customers.filter(customer => {
        let match = false;
        for (let prop of props) {
          let val = customer[prop] + "";
          match = val.toLowerCase().indexOf(txt) > -1;
          if (match) {
            break;
          }
        }
        return match;
      });
      this.filteredCustomers = filtered;
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  sort(by: string) {
    console.log(by);
    this.sorter.sort(this.filteredCustomers, by);
  }

  onClick(customerId) {
    this.router.navigate([customerId], { relativeTo: this.route });
  }
}
