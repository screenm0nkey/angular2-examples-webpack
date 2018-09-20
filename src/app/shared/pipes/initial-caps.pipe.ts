import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialCapsPipe',
  pure : true // this is not necessary as it's default is set to true
})
export class InitialCapsPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
  }
}
