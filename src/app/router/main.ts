import {Component} from '@angular/core';
import {Router, CanReuse, OnReuse, OnActivate, OnDeactivate, ComponentInstruction} from '@angular/router-deprecated';

@Component({
    template: `
    <h4>See the router examples repo for more examples</h4>
    <p>CanReuse, OnReuse, OnActivate, OnDeactivate</p>
<pre>
If routerCanReuse returns or resolves to true, the component instance will 
be reused and the OnDeactivate hook will be run. If routerCanReuse returns 
or resolves to false, a new component will be instantiated, and the existing 
component will be deactivated and removed as part of the navigation.
</pre>
    <button (click)="changeLocation()">Jump to Egghead example</button>
    <a href="https://github.com/angular/router/issues/396" target="_blank">CanDeactivate CanReuse</a>
    <a href="https://angular.io/docs/ts/latest/guide/router-deprecated.html">Router Docs</a>
  `
})
export class RouterMainComponent implements CanReuse, OnReuse, OnActivate, OnDeactivate {

    constructor(private router: Router) {
        console.log("component constructor");
    }

    changeLocation() {
        console.log("you should do this manually in your browser");
        this.router.navigate(['/Egghead', {foo:"bar"}]); //egghead?foo=bar
    }

    /*
     CanReuse checks if you're able to use the same component instance
     OnReuse is run instead of OnActivate if component is being reused instead of reactivated.
     */
    routerCanReuse(next: ComponentInstruction, prev: ComponentInstruction) : boolean {
        console.log(prev);
        console.log(next);
        console.log("can reuse? " + (next.componentType == prev.componentType));
        return next.componentType == prev.componentType;
    }

    routerOnReuse(next: ComponentInstruction, prev: ComponentInstruction) : void {
        console.log("reuse it!");
    }

    /*
     CanActivate is like resolve used to be, can I access this component. Return true if to allow access
     OnActivate is run this on component activation
     */
    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) : void {
        console.log("reuse it!");
    }

    /*
     CanDeactivate = can I leave this page
     if CanDeactivate returns false that means you can leave the page
     */
    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : void {
        console.log("reuse it!");
    }
}