import { Component } from '@angular/core';

@Component({
    selector: 'ngzone-main-component',
    template: `<ng-zone-demo></ng-zone-demo>`,
})
export class NgZoneMainComponent {
    constructor() {
        console.log(this);
    }
}
