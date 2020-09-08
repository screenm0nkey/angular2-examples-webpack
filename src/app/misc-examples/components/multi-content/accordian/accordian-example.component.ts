import { Component } from '@angular/core';

@Component({
  selector: 'accordion-example',
  template: `
      <collapse-it>
          <p class="path">misc-examples/components/multi-content/accordian/accordian-example.component.ts</p>
          <h4>Nested Content Projection using <code>ViewEncapsulation.ShadowDom</code> and importing a parent Component as a service</h4>
          
          <dlink [id]="79"></dlink>
          
          <p>See the AccordionGroup component. It imports the Accordion Component as a service</p>

          <div class="example">
              <p>
                  <button type='button' class='btn btn-default' (click)='removeDynamic()'>Remove last dynamic</button>
              </p>
              <accordion close-others='true'>
                  <div accordion-item heading='Static HTML Heading. This is using the Accordian Group directive' isOpen='false'>
                      Note: The is isOpen here will always be a truthy as false will be passed in as a string
                  </div>

                  <accordion-item [heading]='group.heading' *ngFor='let group of groups'>
                      {{group.content}}
                  </accordion-item>

                  <accordion-item heading='Static HTML Heading 2' [isOpen]='isOpen'>
                      More content
                  </accordion-item>
              </accordion>
          </div>
      </collapse-it>
  `
})
export class AccordionExample {
  isOpen: boolean = false;

  groups: Array<any> = [
    {
      heading: 'Dynamic Heading 1',
      content: 'I am dynamic!'
    },
    {
      heading: 'Dynamic Heading 2',
      content: 'Dynamic as well'
    }
  ];

  removeDynamic() {
    this.groups.pop();
  }
}
