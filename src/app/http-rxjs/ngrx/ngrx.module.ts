import {NgModule} from '@angular/core'
import {SharedModule} from "../../shared/shared.module";
import {NgrxMainComponent} from "./ngrx-main.component";
import {NgRxClock1} from "./ngrx-clock/example-clock-one";
import {NgrxTimeMachine} from "./ngrx-clock/ngrx-time-machine";
import {NgrxClockComponent} from "./ngrx-clock/ngrx-clock.component";
import {NgrxInTenMainComponent} from "./ngrx-in-ten/ngrx-in-ten-main-component";
import {PersonListComponent} from "./ngrx-in-ten/person-list.component";
import {PersonInputComponent} from "./ngrx-in-ten/person-input.component";
import {FilterSelectComponent} from "./ngrx-in-ten/filter-select.component";
import {NgrxQueueComponent} from "./ngrx-queue/app.component";
import {NgRxStarterApp} from "./ngrx-starter";

@NgModule({
  imports: [SharedModule],
  declarations: [
    NgrxMainComponent, NgRxClock1, NgrxTimeMachine, NgrxClockComponent,
    NgrxInTenMainComponent, PersonListComponent, PersonInputComponent, FilterSelectComponent,
    NgrxQueueComponent,
    NgRxStarterApp
  ]
})
export class NgrxModule {
}

export {NgrxMainComponent};

