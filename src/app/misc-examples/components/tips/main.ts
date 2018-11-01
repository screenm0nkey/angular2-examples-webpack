import {Component} from '@angular/core';
import {RubbishService} from '../dependency-injection/services/some-service';

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
    const str = `%cRubbishService is definied in another module but can be accessed 
    here as services are available globally once defined`;
    console.log(str, 'color:lime', rubbishSerivce.imAString)
  }
}
