import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    constructor(private _http:Http) {
        console.log(this);
    }

    getCustomers () {
        return this._http.get('/json/customers.json').map(res => res.json());
    }
}