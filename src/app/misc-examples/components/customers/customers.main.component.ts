import {Component, OnInit} from '@angular/core';
import {Customer} from "./customer.model";
import {DataService} from './services/data.service';
import {Sorter} from './services/sorter.service';

@Component({
  selector: 'customers-component',
  templateUrl: 'customers.tmpl.html',
  styleUrls: ['./customers.css']
})
export class CustomersComponent implements OnInit {
  filterText: string;
  displayAsList: boolean;
  customers: Customer[];
  filteredCustomers: Customer[];

  constructor(public dataService: DataService, public sorter: Sorter) {
    this.customers = [];
  }

  ngOnInit() {
    this.filterText = "filter customers";
    this.displayAsList = false;
    this.filteredCustomers = this.customers = [];
    this.dataService.getCustomers().subscribe(
      customers => this.customers = this.filteredCustomers = customers
    );
  }

  changeDisplayMode(type) {
    this.displayAsList = type === 'list';
  }

  filterChanged(txt) {
    if (txt) {
      // let props = ['firstName', 'lastName', 'address', 'city', 'orderTotal'];
      let props = ['firstName', 'lastName', 'orderTotal'];
      let filtered = this.customers.filter(customer => {
        let match = false;
        for (let prop of props) {
          let val = customer[prop] + '';
          match = val.toLowerCase().indexOf(txt) > -1;
          if (match) {
            break
          }
          ;
        }
        return match;
      });
      this.filteredCustomers = filtered;
    }
    else {
      this.filteredCustomers = this.customers;
    }
  }

  sort(by: string) {
    console.log(by);
    this.sorter.sort(this.filteredCustomers, by);
  }
}
