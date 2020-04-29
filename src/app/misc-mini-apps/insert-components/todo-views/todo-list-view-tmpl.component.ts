import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'todo-list-view',
  template: `<ng-container [ngTemplateOutlet]="tmplRef" [ngTemplateOutletContext]="{data: data}"></ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() public tmplRef: TemplateRef<any>;
  @Input() public data: any;

  constructor() { }

  public ngOnInit() { }
}
