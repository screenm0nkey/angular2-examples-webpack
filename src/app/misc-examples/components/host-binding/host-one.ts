import { Component, Directive, HostBinding, HostListener} from '@angular/core';

/**
 * <input silly-input>
 */
@Directive({
    selector: '[silly-input]'
})
class NgModelStatus {
    count : number = 0;

    constructor() {
        this.smvalue = 'Default Valuez'
    }

    // it's binding the input element's 'value' property to this.smvalue.
    // so when we change this.smvalue the inputs value property updates to match
    // it could also be written as  "@HostBinding() value: string;" with this.value
    @HostBinding('value') smvalue: string;
 // @HostBinding() value: string

    // @HostListener will listen to the 'input' event on the host element
    // and then invoke the method which follows the decorator
    // with the input's value ($event.target.value)
    @HostListener("input", ["$event.target.value"])
    iCanBeCalledAnythingAsLongAsIFollowTheHostListener(updatedValue: string) {
        this.smvalue = updatedValue + (++this.count);
        console.log(this.smvalue);
    }

    // here we're binding the 'class.fixed-mixed' property of the host element to
    // the 'isFixed' property. when we set isFixed to true it then sets class.fixed-mixed = true.
    // if 'isFixed' is true it will add the 'fixed-mixed' class to the input and the
    // input text will appear in red. set it to false and it will not add class.
    @HostBinding('class.fixed-mixed')
    isFixed:Boolean = true;
}


@Component({
    selector: 'host-one-component',
    styles: ['.fixed-mixed {color: red}'],
    template: `
        <pre>@HostBinding('value') smvalue: string;</pre>
        <p> @HostBinding binds the "smvalue" value of the directive to the host element's value
            property using. As the element is an &lt;input&gt; it sets the value of the input.
        </p>
        <input silly-input>
    `,
    directives: [NgModelStatus]
})
export class HostOne {}