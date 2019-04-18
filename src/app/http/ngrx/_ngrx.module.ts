import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {SharedModule} from "../../shared/shared.module";
import {NgrxMainComponent} from "./ngrx-main.component";
import {NgRxClockOneComponent} from "./ngrx-clock-one.component";
import {NgrxClockTwoComponent} from "./ngrx-clock-two.component";
import {NgrxInTenMainComponent} from "./ngrx-in-ten/ngrx-in-ten-main-component";
import {PersonListComponent} from "./ngrx-in-ten/person-list.component";
import {PersonInputComponent} from "./ngrx-in-ten/person-input.component";
import {FilterSelectComponent} from "./ngrx-in-ten/filter-select.component";
import {NgrxQueueComponent} from "./ngrx-queue/ngrx-queue.component";
import {NgrxWordsComponent} from "./ngrx-words.component";
import {UnitEffects} from "./ngrx-queue/effects";
import {NgrxPeopleComponent} from "./ngrx-people.component";
import {ClockComponent} from "./clock-component";
import {StartStopRxStreamComponent} from "./stop-start-rx-stream-button.component";
import {
  clockReducer,
  filterReducer,
  peopleReducer,
  peoplezReducer,
  queueReducer,
  tickReducer,
  unitReducer,
  wordsReducer
} from "./reducers/_reducers.service";

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forRoot({
      clockReducer,
      filterReducer,
      peopleReducer,
      peoplezReducer,
      queueReducer,
      tickReducer,
      unitReducer,
      wordsReducer
    }),
    EffectsModule.forRoot([UnitEffects])
  ],
  declarations: [
    NgrxMainComponent,
    NgRxClockOneComponent,
    NgrxClockTwoComponent,
    NgrxInTenMainComponent,
    PersonListComponent,
    PersonInputComponent,
    FilterSelectComponent,
    NgrxQueueComponent,
    NgrxWordsComponent,
    NgrxPeopleComponent,
    ClockComponent,
    StartStopRxStreamComponent
  ]
})
export class NgrxModule {
}

export {NgrxMainComponent};

