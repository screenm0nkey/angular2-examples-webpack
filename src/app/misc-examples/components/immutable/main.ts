import {Component} from "@angular/core";

/*
 * The store service dependency for the components below has to be a injected as a dependency
 * in the parent component for the the store to work. doing at each component produces a new
 * instance of the store.
 * */
@Component({
  selector: 'immutable-main',
  template: `
        
        <immutable-object-component></immutable-object-component>
        <hr>
        <immutable-list-component></immutable-list-component>
    `,
})
export class ImmutableMain {
}
