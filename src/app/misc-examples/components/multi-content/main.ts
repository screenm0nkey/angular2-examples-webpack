import {Component} from '@angular/core';
import {EmitterComponent} from './emitter-component';
import {ContentProjectionComponent} from './multi-content';

@Component({
    selector: 'main',
    template: `
        <multi-content>
            <div header>This is projected to the header region</div>
            <emitter-component body></emitter-component>
        </multi-content>  
    `,
    directives : [EmitterComponent, ContentProjectionComponent]
})
export class MultiTransclusion {}
