import { Component } from '@angular/core';

@Component({
    selector: 'next-input',
    template: `
    <h4>Press enter key</h4>
    <input (keyup.enter)="next.focus()">
    <input type="text">
    <input #next>
  `
})
export class NextComponent { }