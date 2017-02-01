import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {AccordianComponent} from "./accordian.component";
import {AccordionGroup, Accordion} from "./accordian-group.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    AccordianComponent,
    AccordionGroup,
    Accordion
  ]
})
export class AccordianModule {
}

export {AccordianComponent}
