import {Component, ViewEncapsulation} from '@angular/core';
import {AccordionItem} from './accordian-item.component';

@Component({
  selector: 'accordion, [accordion]',
  encapsulation: ViewEncapsulation.Emulated,
  host: {
    // below will add the 'panel-group' class to the host element
    // we can also have dynamic classes by using '[class.panel-group]': 'someComponentProperty',
    class: 'panel-group'
  },
  template: '<ng-content></ng-content>'
})
export class AccordionComponent {
  private groups: Array<AccordionItem> = [];

  addGroup(group: AccordionItem): void {
    this.groups.push(group);
  }

  closeOthers(openGroup: AccordionItem): void {
    this.groups.forEach((group: AccordionItem) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  removeGroup(group: AccordionItem): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
