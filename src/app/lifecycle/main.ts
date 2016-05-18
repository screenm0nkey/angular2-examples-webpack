import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {PeekABooParentComponent} from './peekaboo/peekaboo-parent.component.ts';
import {SpyParentComponent} from './spy/spy.component';
import {OnChangesParentComponent} from './on-changes/on-changes-parent.component';
import {AfterViewParentComponent} from './after-view/after-view-parent.component';
import {AfterContentParentComponent} from './after-content/after-content-parent.component';

@Component({
    selector: 'lifecycle-main',
    directives: [ROUTER_DIRECTIVES],
    styles : [
        require('../../styles/layout.css')
    ],
    template: `
        <div class="miscellaneous">
        <nav>
            <a [routerLink]="['/Lifecycle/Peekaboo']">Peekaboo</a>
            <a [routerLink]="['/Lifecycle/Spy']">Spy</a>
            <a [routerLink]="['/Lifecycle/OnChanges']">OnChanges</a>
            <a [routerLink]="['/Lifecycle/AfterView']">AfterView</a>
            <a [routerLink]="['/Lifecycle/AfterContent']">AfterContent</a>
        </nav>
        <div id="container">
            <router-outlet></router-outlet>
        </div>
        </div>   
    `,
})
@RouteConfig([
    {path: '/peekaboo', component: PeekABooParentComponent, name: 'Peekaboo', useAsDefault: true},
    {path: '/spy', component: SpyParentComponent, name: 'Spy'},
    {path: '/on-changes', component: OnChangesParentComponent, name: 'OnChanges'},
    {path: '/after-view', component: AfterViewParentComponent, name: 'AfterView'},
    {path: '/after-content', component: AfterContentParentComponent, name: 'AfterContent'}
])
export class LifecycleMain {

}