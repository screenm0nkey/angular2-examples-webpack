import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'todo-list-view',
  template: `
  <ng-container 
    [ngTemplateOutlet]="tmplRef" 
    [ngTemplateOutletContext]="{dataschmater: data}">
  </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() public tmplRef: TemplateRef<any>;
  @Input() public data: any;
}
