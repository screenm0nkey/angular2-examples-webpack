import {Component, Directive} from "@angular/core";

/**
 * <input silly-input>
 */
@Directive({
  selector: '[silly-input-two]',
  host: {
    "[value]": 'smvalue',
    "[class.fixed-mixed]": "isFixed",
    "(input)": "hostInputUpdateEventHandler($event.target.value)"
  }
})
export class NgModelStatusTwo {
  count: number = 0;
  smvalue: string;
  isFixed: boolean = true;

  constructor() {
    this.smvalue = 'Default Valuez';
    // this will update the view input's value
    setTimeout(() => this.smvalue = 'something else', 2000); // changes the input's text
    setTimeout(() => this.isFixed = false, 4000); // changes the inputs colour
  }

  hostInputUpdateEventHandler(updatedValue: string) {
    this.smvalue = updatedValue + (++this.count);
    console.log(this.smvalue);
  }
}
@Component({
  selector: 'host-one-part-two-component',
  styles: ['.fixed-mixed {color: red}'],
  template: `
        <p class="file">misc-examples/components/host-binding/host-one-part-2.ts</p>
        <h4>host: &#123;"[class.fixed-mixed]": "isFixed"&#125;</h4>
        This example is identicle to host-one-component but we're using the directives' :host property rather than <br>
        using the @HostBinding decorators.
        <pre>host: &#123;"[value]": 'smvalue'&#125;</pre>
        <input silly-input-two>
    `,
})
export class HostOnePartTwo {
}
