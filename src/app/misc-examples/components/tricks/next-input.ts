import { Component } from "@angular/core";

@Component({
  selector: "next-input",
  template: `
    <h4>Jump focus using events</h4>
    <p>Type in first input and then press tab</p>
    <input (keyup.enter)="next.focus()">
    <input type="text">
    <input #next>
  `
})
export class NextComponent {}
