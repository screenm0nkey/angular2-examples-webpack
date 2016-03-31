import { Component, OnInit} from 'angular2/core';

@Component({
    selector: 'chickens-component',
    template: `<h1>chickenss component</h1>`,
    providers: [],
    pipes: [],
    directives: []
})
export class ChickensComponent implements OnInit {
    constructor() {
        console.log(this)
    }
    ngOnInit() {
    }
}