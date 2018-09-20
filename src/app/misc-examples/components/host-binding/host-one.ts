import {Component, Directive, HostBinding, HostListener} from '@angular/core';

/**
 * <input silly-input>
 */
@Directive({
  selector: '[silly-input]'
})
export class NgModelStatusOne {
  count: number = 0;

  constructor() {
    this.smvalue = 'Default Valuez';
    // this will update the view input's value
    setTimeout(() => (this.smvalue = 'something else'), 2000); // changes the input's text
    setTimeout(() => (this.isFixed = false), 4000); // changes the inputs colour
  }

  // it's binding the input element's 'value' property to this.smvalue.
  // so when we change this.smvalue the input's value property updates to match.
  // it could also be written as  '@HostBinding() value: string;' with this.value
  @HostBinding('value') smvalue: string;
  // @HostBinding() value: string

  // @HostListener will listen to the 'input' event on the host element
  // and then invoke the method which follows the decorator
  // with the input's value ($event.target.value)
  @HostListener('input', ['$event.target.value'])
  iCanBeCalledAnythingAsLongAsIFollowTheHostListenerDecorator(updatedValue: string) {
    this.smvalue = updatedValue + ++this.count;
  }

  // here we're binding the 'class.fixed-mixed' property of the host element to
  // this.isFixed property. when we set this.isFixed to true it then sets class.fixed-mixed = true.
  // if this.isFixed === true it will add the 'fixed-mixed' class to the input and the
  // input text will appear in red. set it to false and it will not add class.
  @HostBinding('class.fixed-mixed') isFixed: boolean = true;
}

@Component({
  selector: 'host-one-component',
  styles: ['.fixed-mixed {color: red}'],
  template: `
    <p class='file'>misc-examples/components/host-binding/host-one.ts</p>
    <h4>@HostBinding && @HostListener</h4>
    <code>@HostListener('input', ['$event.target.value'])</code>
    <code>@HostBinding('value') smvalue: string;</code>
    <p> @HostBinding binds the 'smvalue' value of the directive to the host element's 'value'
      property. As the element is an &lt;input&gt;, it will change the value of the input when 'smvalue' is changed.
      Try typing into the input.
    </p>
    <input silly-input>
  `
})
export class HostOne {
}
