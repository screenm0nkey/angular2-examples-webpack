import {Component, Input} from '@angular/core';

@Component({
    selector: 'person',
    template: `
        <style>div{border: 2px solid blue}</style>
        <div>My id: {{id}}</div>
    `,
})
export class Person {
    @Input() id;
}
