import { Pipe } from 'angular2/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe {
    transform(value:any) {
        if (value) {
            return value.toUpperCase();
        }
        return value;
    }
}