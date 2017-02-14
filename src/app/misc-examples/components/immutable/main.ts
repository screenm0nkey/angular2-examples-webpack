import {Component} from "@angular/core";

/*
 * The store service dependency for the components below has to be a injected as a dependency
 * in the parent component for the the store to work. doing at each component produces a new
 * instance of the store.
 * */
@Component({
  selector: 'immutable-main',
  template: `
<pre>
Angular will still run change detection on an OnPush component 
when any of its <strong>input properties changes, when it fires an event, or when an observable fires an event.</strong> 
</pre>
        <immutable-object-component></immutable-object-component>
        <hr>
        <immutable-list-component></immutable-list-component>
    `,
})
export class ImmutableMain {
}
