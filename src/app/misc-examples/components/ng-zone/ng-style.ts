import {Component} from '@angular/core';

@Component({
  selector: 'ng-style-demo',
  template: require('./ng-style.html')
})
export class NgStyleSampleApp {
  color: string;
  fontSize: number;
  style: {
    'background-color': string,
    'border-radius': string,
    border?: string,
    width?: string,
    height?: string
  };

  constructor() {
    this.fontSize = 16;
    this.color = 'blue';
    this.style = {
      'background-color': '#ccc',
      'border-radius': '50px',
      'height': '30px',
      'width': '30px'
    };
  }

  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }
}


