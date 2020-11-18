import { NgModule } from '@angular/core';
import { InsertsSharedModule } from '@standaloneApp/shared/shared.module';
import { ListComponent } from './todo-list-view.component';
import { CardsComponent } from './todo-table-view.component';
import { CardsTableComponent } from './todo-views-container.component';

@NgModule({
  imports: [InsertsSharedModule],
  declarations: [CardsTableComponent, ListComponent, CardsComponent],
  exports: [CardsTableComponent]
})
export class TodoViewsModule { }
