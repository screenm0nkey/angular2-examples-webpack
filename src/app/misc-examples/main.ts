import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import routes from './routes';

@Component({
    selector: 'misc-app',
    template: require('./main.html'),
    styles : [require('../../styles/layout.css')],
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES]
})

export class MiscExamples {}
export default routes;
