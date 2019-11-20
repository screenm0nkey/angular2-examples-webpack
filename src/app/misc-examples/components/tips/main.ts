import {Component} from '@angular/core';
import {RubbishService} from '../dependency-injection/injectables.service';

@Component({
  selector: 'tips-main-component',
  template: `
    <div class='comps'>
      <use-ngif></use-ngif>
    </div>
  `
})
export class TipsMainComponent {
  constructor(rubbishSerivce: RubbishService) {
    const str = `%cRubbishService is providedIn root, and there available globally`;
    console.log(str, 'color:lime', rubbishSerivce.imAString)
  }
}
