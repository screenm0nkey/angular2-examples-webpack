import {Component} from '@angular/core';

import {JohnLinquistWikiSearch} from './wikipedia-john-linquist';
import {StarWarsComponent} from './star-wars';
import {ForkJoinComponent}  from './forkjoin-search'

@Component({
    selector: 'app-component',
    template: `
        <john-linquist-wiki></john-linquist-wiki>
        <hr>
        <star-wars></star-wars>
        <hr>
        <forkjoin-app></forkjoin-app>
    `,
    directives: [
        JohnLinquistWikiSearch,
        StarWarsComponent,
        ForkJoinComponent
    ]
})
export class JohnLinquistExamples {
    constructor() {
        console.log(this);
    }
}


