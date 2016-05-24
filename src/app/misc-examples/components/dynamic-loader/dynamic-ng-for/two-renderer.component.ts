import { Component, Input, OnInit } from '@angular/core';
import { Renderer } from './renderer';

@Component({
    selector: 'to-snakecase-renderer',
    template: '<div>{{output}}</div>'
})
export class ToSnakecaseRendererComponent implements Renderer, OnInit {
    @Input() input: string;
    output: string;
    ngOnInit() {
        this.output = this.input.split('').join('_');
    }
}