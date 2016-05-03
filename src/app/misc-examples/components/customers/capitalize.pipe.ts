import { Pipe } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe {
    transform(value:any) {
        if (value) {
            return value.toUpperCase();
        }
        return value;
    }
}