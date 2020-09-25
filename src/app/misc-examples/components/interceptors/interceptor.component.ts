import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'interceptor-component',
  template: `
    <div class='comps'>
     <section collapse-it>
     <p class="path">src/app/misc-examples/components/interceptors/interceptor.component.ts</p>
       <h4>{{title}}</h4>
       <button (click)="getCustomerDetails()">Get customer details</button>
     </section>
    </div>
  `,
})
export class InterceptorComponent implements OnInit {
  title = 'Angular-Interceptor';

  constructor(public loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.login({}).subscribe(data => { });
  }

  getCustomerDetails() {
    this.loginService.getCustomerDetails().subscribe((data) => {
      console.log('----->>>', data);
    });
  }
}
