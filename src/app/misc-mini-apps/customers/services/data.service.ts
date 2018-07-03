import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class CustomersDataService {
  constructor(private _http: HttpClient) {
  }

  getCustomers() {
    return this._http.get("/json/customers.json");
  }
}
