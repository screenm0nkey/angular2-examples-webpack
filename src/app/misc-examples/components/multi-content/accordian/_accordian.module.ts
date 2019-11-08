import {NgModule} from '@angular/core';
import {SharedModule} from '../../../../shared/_shared.module';
import {AccordionExample} from './accordian-example.component';
import {AccordionComponent} from './accordian.component';
import {AccordionItem} from './accordian-item.component';

// without 'exports : [AccordionExample]' there will be an error as the parent template
// as it uses <accordion-example></accordion-example> so we need to make it available
// outside of this module
@NgModule({
  imports: [SharedModule],
  exports: [AccordionExample],
  declarations: [AccordionExample, AccordionItem, AccordionComponent]
})
export class AccordionModule {
}
