import { Component } from '@angular/core';

import { DynamicListComponent } from './dynamic-list.component';
import { OneRendererComponent } from './one-renderer.component';
import { TwoRendererComponent } from './two-renderer.component';
import { Renderer } from './renderer';

@Component({
    selector: 'dynamic-list-app',
    template: `
        <h4>Dynamic List {{num}}</h4>
        <a href="http://www.stackoverflow.com/a/37232017/370935" target="_blank">stackoverflow.com/a/37232017/370935</a>
        <dynamic-list [items]="items" [renderer]="renderer"></dynamic-list>
    `,
    directives: [
        DynamicListComponent
    ]
})
export class DynamicListAppComponent {
    items: string[] = [ 'one', 'two', 'three' ];
    renderer: Renderer;
    num : number;
    constructor() {
        this.num = Math.round(Math.random());
        this.renderer = this.num ? OneRendererComponent : TwoRendererComponent;
    }
}