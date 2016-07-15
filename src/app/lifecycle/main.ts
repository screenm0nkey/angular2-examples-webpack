import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import routes from './routes';

@Component({
    selector: 'lifecycle-main',
    styles : [require('../../styles/layout.css')],
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="miscellaneous">
            <nav>
                <a [routerLink]="['/lifecycle', 'overview']">Overview</a>
                <a [routerLink]="['/lifecycle', 'peekaboo']">Peekaboo</a>
                <a [routerLink]="['/lifecycle', 'spy']">Spy</a>
                <a [routerLink]="['/lifecycle', 'on-changes']">OnChanges</a>
                <a [routerLink]="['/lifecycle', 'after-view']">AfterView</a>
                <a [routerLink]="['/lifecycle', 'after-content']">AfterContent</a>
            </nav>
            <div id="container">
                <router-outlet></router-outlet>
            </div>
        </div>   
    `,
})
export class LifecycleMain {}
export default routes;