import {Component } from '@angular/core';

import {DynamicComponent} from './dynamic-component'
import {GistAppComponent} from './load-component-from-gist'
import {DynamicListAppComponent} from './dynamic-ng-for/app.component'

@Component({
    selector: 'focus-input',
    template: `
        <dynamic-component-app></dynamic-component-app>
        <hr>
        <gist-app></gist-app>
        <hr>
        <dynamic-list-app></dynamic-list-app>
    `,
    directives:[DynamicComponent, GistAppComponent, DynamicListAppComponent]
})
export class DynamicExamplesMain {
}
