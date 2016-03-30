import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'misc-app',
    template: require('./main.html'),
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES]
})
export class MiscExamples {
    constructor() {
    }
}
