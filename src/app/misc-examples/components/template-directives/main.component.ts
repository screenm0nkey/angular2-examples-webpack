import {Component} from '@angular/core';

@Component({
  selector: 'template-component',
  template: `
    <div class='comps'>
      <ng-book-if-template></ng-book-if-template>
      <ng-book-repeat-template></ng-book-repeat-template>
    </div>
  `
})
export class TemplateComponent {
}
