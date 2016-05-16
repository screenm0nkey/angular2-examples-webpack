import {Component } from '@angular/core'
import {Store} from './StoreService';
import { ImmutableObject } from './immutable';
import { ImmutableList } from './immutable-list';

/*
 * The store service dependency for the components below has to be a injected as a dependency
 * in the parent component for the the store to work. doing at each component produces a new
 * instance of the store.
 * */
@Component({
    selector: 'immutable-main',
    providers : [Store],
    template: `
        <h3>Immutable Objects (src/app/misc-examples/components/immutable/immutable.ts)</h3>
        <immutable-object-component></immutable-object-component>
        <hr>
        <h3>Immutable Lists (src/app/misc-examples/components/immutable/immutable-list.ts)</h3>
        <immutable-list-component></immutable-list-component>
    `,
    directives: [ImmutableList, ImmutableObject]
})
export class ImmutableMain {}