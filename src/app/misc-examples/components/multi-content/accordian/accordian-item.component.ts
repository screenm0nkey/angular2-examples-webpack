import {Component, Input, OnDestroy, ViewEncapsulation, OnInit} from '@angular/core';
import {AccordionComponent} from './accordian.component';

@Component({
  selector: 'accordion-item, [accordion-item]',
  encapsulation: ViewEncapsulation.ShadowDom,
  inputs: ['isOpen'],
  template: `
      <div class='panel panel-default' [ngClass]="{'panel-open': isOpen}">
          <div class='panel-heading' (click)='toggleOpen($event)'>
              <h5 class='panel-title' style='background-color: white;'>
                  <a href tabindex='0'><span>{{heading}} !!!!</span></a>
              </h5>
          </div>
          <div class='panel-collapse' [hidden]='!isOpen'>
              <div class='panel-body'>
                  <highlight>Ho!</highlight>
                  <ng-content></ng-content>
              </div>
          </div>
      </div>`
})
export class AccordionItem implements OnDestroy, OnInit {
  private _isOpen: boolean = false;
  @Input() heading: string = '';

  // we're importing the component as a service
  constructor(private accordion: AccordionComponent) {
  }

  toggleOpen(event: Event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  ngOnInit(){
    this.accordion.addGroup(this);
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
