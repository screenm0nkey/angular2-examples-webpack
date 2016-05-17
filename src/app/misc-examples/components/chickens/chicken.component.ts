import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'chicken-component',
    inputs: ['name'],
    template: `
        <div>
          <span>{{name}}</span>
          <button (click)="sayHello()">Say {{name}}</button>
        </div>
    `
})
export class ChickenComponent {
    @Output() hello:EventEmitter<any> /*EventEmitter<string>*/= new EventEmitter();
    name:string;

    constructor() {
        console.log(this);
    }

    sayHello() {
        this.hello.next(this.name);
    }
}