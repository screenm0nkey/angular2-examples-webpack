import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { NgRxInTenMinsComponent } from "./main";
import { PersonList } from "./components/person-list";
import { PersonInput } from "./components/person-input";
import { FilterSelect } from "./components/filter-select";

// StoreModule.provideStore({queue, people, filter, tick, clock, peoplez}),
// assigned in the async.module as the store seemed to overwrite child store deps

@NgModule({
  imports: [SharedModule],
  declarations: [NgRxInTenMinsComponent, PersonList, PersonInput, FilterSelect]
})
export class NgrxInTenModule {}

export { NgRxInTenMinsComponent };
