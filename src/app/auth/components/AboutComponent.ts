import {Component} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'about',
  template: `
   <h4>About</h4>
    params = <strong>{{ params }}</strong>,
    queryParams = <strong>{{ queryParams }}</strong>,
    framgment = <strong>{{ fragment }}</strong>,
    data = <strong>{{ data }}</strong> 
    
    
<pre>
<strong>url:</strong>strong> An Observable of the route path(s). The value is provided as an array of strings for each part of the route path.

<strong>data:</strong> An Observable that contains the data object provided for the route. Also contains any resolved values from the resolve guard.

<strong>params: </strong>An Observable that contains the required and optional parameters specific to the route.

<strong>queryParams:</strong> An Observable that contains the query parameters available to all routes.

<strong>fragment:</strong> An Observable of the URL fragment available to all routes.

<strong>outlet:</strong> The name of the RouterOutlet used to render the route. For an unnamed outlet, the outlet name is primary.

<strong>routeConfig:</strong> The route configuration used for the route that contains the origin path.

<strong>parent:</strong> an ActivatedRoute that contains the information from the parent route when using child routes.

<strong>firstChild:</strong> contains the first ActivatedRoute in the list of child routes.

<strong>children:</strong> contains all the child routes activated under the current route.
</pre>
<a id="anchor">I'm an achor</a>
  `
})
export class AboutComponent {
  params: string;
  queryParams: string;
  fragment: string;
  data: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      //route.snapshot.parent.params['org'];
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
