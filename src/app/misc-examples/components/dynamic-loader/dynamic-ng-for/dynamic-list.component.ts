import {Component, Input, OnInit} from '@angular/core';
import {DclWrapperComponent} from './dcl-wrapper.component';

@Component({
  selector: 'dynamic-list',
  template: `
        <ul>
            <li *ngFor="let item of items" dcl-wrapper [renderer]="renderer" [input]="item"></li>
        </ul>
    `,
  directives: [DclWrapperComponent]
})
export class DynamicListComponent implements OnInit {
  @Input() items: string[] = [];
  @Input() renderer: any;

  constructor() {
  }

  ngOnInit() {
  }

}
