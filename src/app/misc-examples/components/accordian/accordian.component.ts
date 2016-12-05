import {Component} from "@angular/core";

@Component({
  selector: 'accordian-component',
  template: require('./app.html')
})
export class AccordianComponent {
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
