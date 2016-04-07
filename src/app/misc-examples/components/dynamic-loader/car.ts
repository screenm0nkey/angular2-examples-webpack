import {Component, Input} from 'angular2/core';

@Component({
    selector: 'car',
    template: `
        <style>div{border: 2px dashed red}</style>
        <div>Car's id: {{id}}</div>
    `,
})
export class Car {
    @Input() id;
}