/*
 * Angular
 */
import {Component} from '@angular/core';

@Component({
  selector: 'public',
  template: `
    <h1>Protected content</h1>
    <p>This is public content</p>
  `
})
export class ProtectedComponent {
}
