import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CustomersDataService {
  constructor(private _http: HttpClient) {
  }

  getCustomers() {
    return this._http.get('/assets/json/customers.json');
  }
}
