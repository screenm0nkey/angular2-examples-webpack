import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'about',
  styles: ['code {display : inline-block;}'],
  template: `
   <h4>About</h4>
    <p>
      params = <highlight>{{ params }}</highlight><br>
      queryParams = <highlight>{{ queryParams }}</highlight><br>
      framgment = <highlight>{{ fragment }}</highlight><br>
      data = <highlight>{{ data }}</highlight> 
    </p>
        
        
    <p>
      <highlight>ActivatedRoute properties</highlight><br>
      <code>route.url:</code> An Observable of the route path(s). The value is provided as an array of strings for each part of the route path.
      <br><br>
      <code>route.data:</code> An Observable that contains the data object provided for the route. Also contains any resolved values from the resolve guard.
      <br><br>
      <code>route.params: </code>An Observable that contains the required and optional parameters specific to the route.
      <br><br>
      <code>route.queryParams:</code> An Observable that contains the query parameters available to all routes.
      <br><br>
      <code>route.fragment:</code> An Observable of the URL fragment available to all routes.
      <br><br>
      <code>route.outlet:</code> The name of the RouterOutlet used to render the route. For an unnamed outlet, the outlet name is primary.
      <br><br>
      <code>route.routeConfig:</code> The route configuration used for the route that contains the origin path.
      <br><br>
      <code>route.parent:</code> an ActivatedRoute that contains the information from the parent route when using child routes.
      <br><br>
      <code>route.firstChild:</code> contains the first ActivatedRoute in the list of child routes.
      <br><br>
      <code>route.children:</code> contains all the child routes activated under the current route.
    </p>

    <a id='anchor'>I'm an achor</a>
  `
})
export class AboutComponent {
  params: string;
  queryParams: string;
  fragment: string;
  data: string;

  constructor(public route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      // route.snapshot.parent.params['org'];
      this.params = params['id'];
    });

    route.queryParams.subscribe((data: any) => {
      this.queryParams = data['session_id'];
    });

    route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
    });

    route.data.subscribe((data: any) => {
      this.data = data.preload;
    });
  }
}
