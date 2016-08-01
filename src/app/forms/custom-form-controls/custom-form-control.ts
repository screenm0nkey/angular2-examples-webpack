import {Component, forwardRef, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS} from '@angular/forms';


export function createCounterRangeValidator(maxValue, minValue) {
    return (c:FormControl) => {
        let err = {
            rangeError: {
                given: c.value,
                max: maxValue || 10,
                min: minValue || 0
            }
        };
        return (c.value > +maxValue || c.value < +minValue) ? err : null;
    }
}

@Component({
    selector: 'counter-input',
    template: `
        <button (click)="increase()">+</button> {{counterValue}} <button (click)="decrease()">-</button>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CounterInputComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CounterInputComponent),
            multi: true
        }
    ]
})
export class CounterInputComponent implements ControlValueAccessor, OnChanges {
    propagateChange:any = (newValue : any) => {};
    validateFn:any = () => {};

    @Input('counterValue') _counterValue = 0;
    @Input() counterRangeMax;
    @Input() counterRangeMin;

    ngOnInit(){
        console.log(this)
    }

    get counterValue() {
        return this._counterValue;
    }

    set counterValue(val) {
        this._counterValue = val;
        this.propagateChange(val);
    }

    ngOnChanges(inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
        }
    }

    writeValue(value) {
        if (value) {
            this.counterValue = value;
        }
    }

    registerOnChange(fn) {
        debugger
        this.propagateChange = fn;
    }

    registerOnTouched() {}

    increase() {
        this.counterValue++;
    }

    decrease() {
        this.counterValue--;
    }

    validate(c:FormControl) {
        return this.validateFn(c);
    }
}