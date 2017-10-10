import {Component} from "@angular/core";

@Component({
  selector: 'accordian-component',
  template: `
    <p class="file">misc-examples/components/multi-content/accordian/accordian.component.ts</p>
    <h4>This example uses ng-content and the Native shadowDOM</h4>
    <h5>See the AccordionGroup component. It imports the Accordion Component as a service</h5>
    <p>
      <button type="button" class="btn btn-default" (click)="removeDynamic()">
        Remove last dynamic
      </button>
    </p>
    
    <accordion close-others="true">
      <accordion-group heading="This is the header Pete" isOpen="false">
        Note: The is isOpen here will always be a truthy as false will be passed in as a string
      </accordion-group>
    
      <accordion-group [heading]="group.heading" *ngFor="let group of groups">
        {{group.content}}
      </accordion-group>
    
      <accordion-group heading="Another group FormNick" [isOpen]="isOpen">
        More content
      </accordion-group>
    </accordion>
  `
})
export class AccordianExample {
  isOpen: boolean = false;

  groups: Array<any> = [
    {
      heading: 'Dynamic 1',
      content: 'I am dynamic!'
    },
    {
      heading: 'Dynamic 2',
      content: 'Dynamic as well'
    }
  ];

  removeDynamic() {
    this.groups.pop();
  }
}
