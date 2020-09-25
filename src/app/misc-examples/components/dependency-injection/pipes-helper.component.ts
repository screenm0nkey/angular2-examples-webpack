import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marris'
})
export class PipeMapper implements PipeTransform {
  /* 
  this will be a universal pipe for array mappings. You may add more 
  type checkings and runtime checkings to make sure it works correctly everywhere
  */
  transform(value, mappingFunction: Function) {
    return mappingFunction(value)
  }
}


@Component({
  selector: 'pipes-helper',
  template: `
    <div>
      <p class="path">src/app/misc-examples/components/dependency-injection/pipes-helper.component.ts</p>
      <h4>Pipes helper to use for individual, one off pipes</h4>
      <p *ngFor="let item of weightUnits">{{item.label | marris: slashed}}</p>
    </div>
`
})
export class PipeHelperComponent {
  public weightUnits = [{ value: 1, label: 'kg' }, { value: 2, label: 'oz' }];

  public slashed(units) {
    return units + '/hotdog';
  }
}