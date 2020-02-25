import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'home',
  template: `
      <h1>Welcome!</h1>
      <p>Sign in and you get access to the public</p>

      <pre> <highlight>ActivatedRoute</highlight>	A service that is provided to each route component 
that contains route specific information such as route parameters, static data, 
resolve data, global query params and the global fragment.

<highlight>RouterState</highlight> The current state of the router including a tree of the 
currently activated routes together with convenience methods for traversing the route tree.</pre>

      <button (click)='goToProduct(id)'>Go to About Us with fragment and queryparams</button>
  `
})
export class HomeComponent {
  id: number = 1;

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  goToProduct(id: string): void {
    this.router.navigate(['../aboutus', id], {
      relativeTo: this.route,
      queryParams: {session_id: 111111},
      fragment: 'anchor'
    });
  }
}
