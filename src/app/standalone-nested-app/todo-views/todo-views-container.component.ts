import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'todo-views-container',
  template: `
    <div class="mx-auto right mb-15" style="border: solid 4px lime;">
      <button 
        class="btn mr-10" 
        (click)="showCards()" 
        [ngClass]="{'btn-info': typeToShow === 'list'}"
      >{{'todo-list-section.show-table' | translate}}
      </button>
       
      <button 
        class="btn" 
        (click)="showTable()" 
        [ngClass]="{'btn-info': typeToShow === 'table'}"
        >{{'todo-list-section.show-list' | translate}}
      </button>
    </div>

    <ng-container *ngIf="typeToShow === 'table'">
      <todo-list-view 
        [tmplRef]="tableRef" 
        [data]="data">
      </todo-list-view>
    </ng-container>

    <ng-container *ngIf="typeToShow === 'list'">
      <todo-table-view 
        [tmplRef]="listRef" 
        [data]="data">
      </todo-table-view>
    </ng-container>
  `,
})
export class CardsTableComponent implements OnInit {
  @Input() public data: any;
  @Input() public listRef: TemplateRef<any>;
  @Input() public tableRef: TemplateRef<any>;

  private preferedShowModeKey: string;

  public get typeToShow(): string {
    return window.localStorage.getItem(this.preferedShowModeKey) || 'table';
  }

  public set typeToShow(showMode: string) {
    window.localStorage.setItem(this.preferedShowModeKey, showMode);
  }

  public ngOnInit() {
    this.preferedShowModeKey = 'typeToShow'
  }

  public showCards() {
    this.typeToShow = 'list';
  }

  public showTable() {
    this.typeToShow = 'table';
  }
}
