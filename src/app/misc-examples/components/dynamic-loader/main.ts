import {Component } from '@angular/core';
import {DynamicComponent} from './dynamic-component'
import {AppComponent} from './load-component-from-gist'

@Component({
    selector: 'focus-input',
    template: `<app></app><hr><my-app></my-app>`,
    directives:[DynamicComponent, AppComponent]
})
export class DynamicExamplesMain {
}
