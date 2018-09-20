import {Component} from '@angular/core';

@Component({
  selector: 'ng-style-demo',
  template: `
    <section>
      <p class='path'>misc-examples/components/ng-style/ng-style.ts</p>
      <h4>Using ngStyle demo</h4>
      <div [style.background-color]=''yellow''>
        Uses fixed yellow background
      </div>
      <div [ngStyle]='{color: 'white', 'background-color': 'blue'}'>
        Uses fixed white text on blue background
      </div>
      <div>
          <span [ngStyle]='{color: 'red'}' [style.font-size.px]='fontSize'>
            red text
          </span>
      </div>
      <div [ngStyle]='style'></div>
      <div>
          <span [ngStyle]='{color: color}'>
            {{ color }} text
          </span>
      </div>
      <div [style.background-color]='color'
           style='color: white;'>
        {{ color }} background
      </div>
      <div class='ui input'>
        <input type='text' name='color' value='{{color}}' #colorinput>
      </div>
      <div class='ui input'>
        <input type='text' name='fontSize' value='{{fontSize}}' #fontinput>
      </div>
      <button class='ui primary button' (click)='apply(colorinput.value, fontinput.value)'>
        Apply settings
      </button>
    </section>
  `
})
export class NgStyleSampleApp {
  color: string;
  fontSize: number;
  style: {
    'background-color': string;
    'border-radius': string;
    border?: string;
    width?: string;
    height?: string;
  };

  constructor() {
    this.fontSize = 16;
    this.color = 'blue';
    this.style = {
      'background-color': '#ccc',
      'border-radius': '50px',
      height: '30px',
      width: '30px'
    };
  }

  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }
}
