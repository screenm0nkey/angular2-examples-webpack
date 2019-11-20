import {Component, Input} from '@angular/core';

@Component({
  selector: 'super-list-item',
  template: `
      <li>{{name}}</li>`
})
export class SuperListItemComponent {
  @Input('name') name: string;
}
