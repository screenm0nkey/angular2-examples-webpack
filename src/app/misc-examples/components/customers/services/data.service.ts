import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  constructor(private _http: Http) {
  }

  getCustomers() {
    return this._http.get('/json/customers.json').map(res => res.json());
  }
}
