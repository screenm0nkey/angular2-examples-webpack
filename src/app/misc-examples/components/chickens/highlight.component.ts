import { Component } from '@angular/core';

@Component({
  selector: 'highlight-component',
  styles: ['textarea {width : 300px; font-size : 10px; height:75px;}'],
  template: `
    <p class="path">src/app/misc-examples/components/chickens/highlight.component.ts</p>
    <h4>Attribute Directive</h4>
 
    <dlink [id]="41"></dlink>

    <div>
      <input
          [(ngModel)]="color"
          value="green"
          type="radio"
          name="color"
      />Green
      <input
          [(ngModel)]="color"
          value="yellow"
          type="radio"
          name="color"
      />Yellow
      <input
          [(ngModel)]="color"
          value="cyan"
          type="radio"
          name="color"
      />Cyan
    </div>
    <code>
    <lgt>span [myTooltip]="color" [defaultColor]="'violet'"</lgt>
    </code>

    <p [myHighlight]="color" [defaultColor]="'violet'">
    Mouse over me. I'm a directive using the "host" property
    </p>
    <p [ngStyle]="{ 'background-color': color }">highlight {{ color }}</p>
  `
})
export class HighlightComponent {
  color: string = "green";
  gender: string = "Female";
  constructor() {
  }
}
