import { Component } from '@angular/core';
import { Renderer } from './renderer';

@Component({
    selector: 'two-renderer',
    template: '<div>TWOs</div>'
})
export class TwoRendererComponent implements Renderer {
}