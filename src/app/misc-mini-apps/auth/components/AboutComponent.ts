import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'about',
  styles: ['{code {display:inline-block}}'],
  template: `
   <h4>About</h4>
    <p>
    params = <strong>{{ params }}</strong><br>
    queryParams = <strong>{{ queryParams }}</strong><br>
    framgment = <strong>{{ fragment }}</strong><br>
    data = <strong>{{ data }}</strong> 
</p>
    
    
<p>
<code>url:</code>code> An Observable of the route path(s). The value is provided as an array of strings for each part of the route path.
<br>
<code>data:</code> An Observable that contains the data object provided for the route. Also contains any resolved values from the resolve guard.
<br>
<code>params: </code>An Observable that contains the required and optional parameters specific to the route.
<br>
<code>queryParams:</code> An Observable that contains the query parameters available to all routes.
<br>
<code>fragment:</code> An Observable of the URL fragment available to all routes.
<br>
<code>outlet:</code> The name of the RouterOutlet used to render the route. For an unnamed outlet, the outlet name is primary.
<br>
<code>routeConfig:</code> The route configuration used for the route that contains the origin path.
<br>
<code>parent:</code> an ActivatedRoute that contains the information from the parent route when using child routes.
<br>
<code>firstChild:</code> contains the first ActivatedRoute in the list of child routes.
<br>
<code>children:</code> contains all the child routes activated under the current route.
</p>

<a id='anchor'>I'm an achor</a>
  `
})
export class AboutComponent {
  params: string;
  queryParams: string;
  fragment: string;
  data: string;

  constructor(private route: ActivatedRoute) {
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
