import { FormControl, Validator } from '@angular/forms';

export type RangeError = {
  rangeError: {
    given: number;
    max: number;
    min: number;
  }
}

export function createCounterRangeValidator(maxValue: number, minValue: number): Function {
  return (c: FormControl): RangeError => {
    const err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };
    console.log(c.value, maxValue, minValue, (c.value > +maxValue || c.value < +minValue ? err : null))
    
    return c.value > +maxValue || c.value < +minValue ? err : null;
  };
}