import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import routes from './routes';
import {InjectComponent} from './components/inject/injecting-token';

@Component({
    selector: 'misc-app',
    template: require('./main.html'),
    styles : [require('../../styles/layout.css')],
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES, InjectComponent]
})

export class MiscExamples {}
export default routes;
