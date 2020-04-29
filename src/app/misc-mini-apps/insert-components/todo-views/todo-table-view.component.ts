import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'todo-table-view',
  template: `
    <div class="todo-views-container-wrapper" *ngIf="data.length > 0; else noContent">
      <div class="card-item" *ngFor="let dataItem of data">
        <ng-container *ngIf="tmplRef; else noCard" [ngTemplateOutlet]="tmplRef"
          [ngTemplateOutletContext]="{data: dataItem}">
        </ng-container>
      </div>
    </div>

    <ng-template #noContent>
      <div class="no-data">
        {{'taskCards.noData' | translate}}
      </div>
    </ng-template>

    <ng-template #noCard>
      <div class="no-data">
        {{'taskCards.noCardRef' | translate}}
      </div>
    </ng-template>
  `,
  styles: [`
    .todo-views-container-wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }
    
    .card-item {
      min-width: 280px;
      margin: 5px;
      flex-basis: 280px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
  @Input() public tmplRef: TemplateRef<any>;
  @Input() public data: any;
}
