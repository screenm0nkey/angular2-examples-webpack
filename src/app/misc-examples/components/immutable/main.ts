import {Component} from '@angular/core'

/*
 * The store service dependency for the components below has to be a injected as a dependency
 * in the parent component for the the store to work. doing at each component produces a new
 * instance of the store.
 * */
@Component({
  selector: 'immutable-main',
  template: `
        <h4>Immutable Objects</h4>
        <pre>src/app/misc-examples/components/immutable/immutable.ts</pre>
        <immutable-object-component></immutable-object-component>
        <hr>
        <h4>Immutable Lists</h4>
        <pre>src/app/misc-examples/components/immutable/immutable-list.ts</pre>
        <immutable-list-component></immutable-list-component>
    `,
})
export class ImmutableMain {
}
