import {Pipe} from "@angular/core";

@Pipe({name: 'capitalize'})
export class CapitalizePipe {
  transform(value: any) {
    return value ? value.toUpperCase() : value;
  }
}
