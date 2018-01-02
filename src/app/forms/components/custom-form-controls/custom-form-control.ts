import { Component, forwardRef, Input, OnChanges } from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

export function createCounterRangeValidator(maxValue, minValue) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };
    return c.value > +maxValue || c.value < +minValue ? err : null;
  };
}

@Component({
  selector: "counter-input",
  template: `
        <button (click)="increase()">+</button> {{counterValue}} <button (click)="decrease()">-</button>
  `,
  providers: [
    // In order to get hold of a ControlValueAccessor for a form control, Angular internally injects all
    // values that are registered on the NG_VALUE_ACCESSORS token. So all we need to do is to extend the
    // multi-provider for NG_VALUE_ACCESSORS with our own value accessor instance (which is our component).
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTenCounterInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTenCounterInputComponent),
      multi: true
    }
  ]
})
export class FormTenCounterInputComponent
  implements ControlValueAccessor, OnChanges {
  propagateChange: any = (newValue: any) => {};
  validateFn: any = (c: FormControl) => {}; // this is replaced

  @Input("counterValue") _counterValue = 0;
  @Input() counterRangeMax;
  @Input() counterRangeMin;

  get counterValue() {
    return this._counterValue;
  }

  // If either the increment() or decrement() button is clicked,
  // we want to propagate the new value to the outside world using propagateChange()
  set counterValue(val) {
    this._counterValue = val;
    console.log("propagateChange ", val);
    this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = createCounterRangeValidator(
        this.counterRangeMax,
        this.counterRangeMin
      );
    }
  }

  //component itself now performs validation as it's added to NG_VALIDATORS
  validate(c: FormControl) {
    const isValid = this.validateFn(c);
    console.log("validate ", isValid, c);
    return isValid;
  }

  // this method that writes a new value from the form model into the view or (if needed) DOM property.
  writeValue(value) {
    if (value) {
      console.log("writeValue", value);
      this.counterValue = value;
    }
  }

  //is a method that registers a handler that should be called when something in the view has changed.
  //It gets a function that tells other form directives and form controls to update their values.
  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increase() {
    this.counterValue++;
  }

  decrease() {
    this.counterValue--;
  }
}
