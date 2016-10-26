import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../../shared/shared.module';
import {NgRxInTenMinsComponent} from './main';
import {PersonList} from './components/person-list';
import {PersonInput} from './components/person-input';
import {FilterSelect} from './components/filter-select';
import {people, filter} from "./reducers";

@NgModule({
  imports: [
    SharedModule,
    StoreModule.provideStore({people, filter})
  ],
  declarations: [
    NgRxInTenMinsComponent,
    PersonList, PersonInput, FilterSelect
  ]
})
export class NgrxInTenModule {
}
export {NgRxInTenMinsComponent}


