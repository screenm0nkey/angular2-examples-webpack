import {NgModule} from "@angular/core";
import {SharedModule} from "../../../../shared/shared.module";
import {AccordianExample} from "./app.component";
import {Accordion} from "./accordian.component";
import {AccordionGroup} from "./accordian-group.component";

// without "exports : [AccordianExample]" there will be an error as the parent template
// as it uses <accordian-component></accordian-component> so we need to make it available
// outside of this module
@NgModule({
  imports: [SharedModule],
  exports: [AccordianExample],
  declarations: [
    AccordianExample,
    AccordionGroup,
    Accordion
  ]
})
export class AccordianModule {
}

