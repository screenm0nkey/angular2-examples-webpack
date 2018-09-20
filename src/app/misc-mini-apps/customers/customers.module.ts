import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CustomersComponent} from './customer-app.component';
import {CustomerDetailComponent} from './customer-detail.component';
import {FilterTextComponent} from './filter-textbox.component';
import {Sorter} from './services/sorter.service';
import {SortByDirective} from './directives/sortby.directive';
import {CustomersDataService} from './services/data.service';
import {XLargeDirective} from './directives/x-large.directive';

@NgModule({
  imports: [SharedModule],
  declarations: [
    CustomersComponent,
    CustomerDetailComponent,
    FilterTextComponent,
    SortByDirective,
    XLargeDirective
  ],
  providers: [CustomersDataService, Sorter]
})
export class CustomersModule {
}

export {CustomersComponent, CustomerDetailComponent};
