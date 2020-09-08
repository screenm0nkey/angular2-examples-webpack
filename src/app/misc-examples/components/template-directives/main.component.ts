import { Component } from '@angular/core';

@Component({
  selector: 'template-component',
  template: `
    <div class='comps'>
      <collapse-it> <ng-book-if-template></ng-book-if-template></collapse-it> 
      <collapse-it> <ng-book-repeat-template></ng-book-repeat-template></collapse-it> 
    </div>
  `
})
export class TemplateComponent {
}
