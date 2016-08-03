import {Component} from '@angular/core';
import {EmitterComponent} from './emitter-component';
import {ContentProjectionComponent} from './multi-content';

@Component({
  selector: 'main',
  template: `
        <multi-content>
            <div header>
                This content is projected into the "header".    
                These two are the same. one is the long hand syntax
                <pre>
                    &lt;input type="text" [(ngModel)]="newItem"&gt;
                    &lt;input type="text" [ngModel]="newItem" (ngModelChange)="newItem=$event">&gt;
                </pre>
            </div>
            <emitter-component body></emitter-component>
        </multi-content>  
    `,
  directives: [EmitterComponent, ContentProjectionComponent]
})
export class MultiTransclusion {
}
