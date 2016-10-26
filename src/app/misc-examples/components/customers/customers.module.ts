import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {CustomersComponent} from './customers.main.component';
import {CustomerDetailComponent} from './customer-detail.component';
import {FilterTextComponent} from './filter-textbox.component';
import {CapitalizePipe} from './capitalize.pipe';
import {Sorter} from './services/sorter.service';
import {SortByDirective} from './directives/sortby.directive';
import {DataService} from './services/data.service';
import {XLargeDirective} from './directives/x-large.directive';

@NgModule({
  imports: [SharedModule],
  declarations: [
    CustomersComponent,
    CustomerDetailComponent,
    CapitalizePipe,
    FilterTextComponent,
    SortByDirective,
    XLargeDirective
  ],
  providers: [DataService, Sorter]
})
export class CustomersModule {
}

export {
  CustomersComponent,
  CustomerDetailComponent
}
