import {Component} from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'interceptor-component',
  template: `
    <div class='comps'>
     <section>
       <h4>{{title}}</h4>
       <button (click)="getCustomerDetails()">Get customer details</button>
     </section>
    </div>
  `,
})
export class InterceptorComponent {
  title = 'Angular-Interceptor';

  constructor(public loginService: LoginService) {
    this.loginService.login({}).subscribe(data => {
      console.log('----->>>', data);
    });
  }

  getCustomerDetails() {
    this.loginService.getCustomerDetails().subscribe((data) => {
      console.log('----->>>', data);
    });
  }
}
