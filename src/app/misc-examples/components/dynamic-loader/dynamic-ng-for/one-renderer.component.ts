import { Component } from '@angular/core';

import { Renderer } from './renderer';

@Component({
    selector: 'one-renderer',
    template: '<div>ONE</div>'
})
export class OneRendererComponent implements Renderer {
}