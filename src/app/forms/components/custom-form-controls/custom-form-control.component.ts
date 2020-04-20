import { Component, forwardRef, Input, OnChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { createCounterRangeValidator } from './dynamic-counter-range-validator';


@Component({
  selector: 'custom-range-form-item',
  template: `
        <button (click)='increase()'>+</button> {{counterValue}} <button (click)='decrease()'>-</button>
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
export class FormTenCounterInputComponent implements ControlValueAccessor, OnChanges {
  // @ts-ignore
  @Input('counterValue') _counterValue = 0;
  @Input() counterRangeMax: number;
  @Input() counterRangeMin: number;

  private propagateChange: Function;
  private validateFn: Function;

  get counterValue() {
    return this._counterValue;
  }

  // If either the increment() or decrement() button is clicked,
  // we want to propagate the new value to the outside world using propagateChange()
  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange && this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
  }

  // component itself now performs validation as it's added to NG_VALIDATORS
  validate(c: FormControl) {
    return this.validateFn && this.validateFn(c);
  }

  // ControlValueAccessor interface method
  // this method that writes a new value from the form model into the view or (if needed) DOM property.
  writeValue(value) {
    if (value) {
      this.counterValue = value;
    }
  }

  // ControlValueAccessor interface method
  // is a method that registers a handler that should be called when something in the view has changed.
  // It gets a function that tells other form directives and form controls to update their values.
  registerOnChange(fn: Function) {
    this.propagateChange = fn;
  }

  // ControlValueAccessor interface method
  registerOnTouched() {
  }

  // ControlValueAccessor interface method
  setDisabledState(isDisabled: boolean) { }

  increase() {
    this.counterValue++;
  }

  decrease() {
    this.counterValue--;
  }
}
