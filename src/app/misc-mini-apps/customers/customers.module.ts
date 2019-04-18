import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CustomersComponent} from './customer-app.component';
import {CustomerDetailComponent} from './customer-detail.component';
import {FilterTextComponent} from './filter-textbox.component';
import {SortByDirective} from './directives/sortby.directive';
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
  providers: []
})
export class CustomersModule {
}

export {CustomersComponent, CustomerDetailComponent};
