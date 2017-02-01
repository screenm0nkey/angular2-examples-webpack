import {Component, ViewEncapsulation, OnDestroy, Input} from "@angular/core";


@Component({
  selector: 'accordion, [accordion]',
  encapsulation: ViewEncapsulation.Native,
  host: {
    // below will add the 'panel-group' class to the host element
    // we can have dynamic classes by using "[class.panel-group]": "someComponentProperty",
    'class': 'panel-group'
  },
  template: '<ng-content></ng-content>'
})
export class Accordion {
  private groups: Array<AccordionGroup> = [];

  addGroup(group: AccordionGroup): void {
    this.groups.push(group);
  }

  closeOthers(openGroup: AccordionGroup): void {
    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  removeGroup(group: AccordionGroup): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}


@Component({
  selector: 'accordion-group, [accordion-group]',
  encapsulation: ViewEncapsulation.Native,
  inputs: ['isOpen'],
  template: `
    <div class="panel panel-default" [ngClass]="{'panel-open': isOpen}">
        <div class="panel-heading" (click)="toggleOpen($event)">
            <h5 class="panel-title" style="background-color: #2e6da4;">
                <a href tabindex="0"><span>{{heading}} !!!!</span></a>
            </h5>
        </div>
        <div class="panel-collapse" [hidden]="!isOpen">
            <div class="panel-body">
                <strong>Ho!</strong>
                <ng-content></ng-content>
            </div>
        </div>
    </div>`
})
export class AccordionGroup implements OnDestroy {
  private _isOpen: boolean = false;
  @Input() heading: string = '';

  // we're importing the component as a service
  constructor(private accordion: Accordion) {
    this.accordion.addGroup(this);
  }

  toggleOpen(event: Event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    this.accordion.removeGroup(this);
  }

  public get isOpen(): boolean {
    return this._isOpen;
  }

  public set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
}
