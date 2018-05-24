import {Component} from "@angular/core";
import {RubbishService} from "../dependency-injection/services/some-service";

@Component({
  selector: "tracks-main-component",
  template: `
    <div class="comps">
      <scroll-bottom></scroll-bottom>
      <next-input></next-input>
      <typewriter></typewriter>
    </div>
  `
})
export class TricksMainComponent {
  constructor(rubbishSerivce:RubbishService){
    const str = `%cRubbishService is definied in another module but can be accessed 
    here as services are available globally once defined`;
    console.log(str, "color:lime", rubbishSerivce.imAString)
  }
}
