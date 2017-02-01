/*
 * Angular
 */
import {Component} from "@angular/core";

@Component({
  selector: 'protected',
  template: `
    <h1>Protected content</h1>
    <p>This is protected content</p>
  `
})
export class ProtectedComponent {
}
