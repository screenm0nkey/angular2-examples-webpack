import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize',
  pure: false // the default is true
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    return value ? value.toUpperCase() : value;
  }
}
