import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// import 'rxjs/operator/map';

@Injectable({providedIn: 'root'})
export class LoginService {

  constructor(public http: HttpClient) {
  }

  login(data) {
    data = {email: 'admin@example.com', password: 'Test@123'};
    return this.http.post('/api/login', data);
  }

  getCustomerDetails() {
    return this.http.get('/api/customers/details');
  }

}
