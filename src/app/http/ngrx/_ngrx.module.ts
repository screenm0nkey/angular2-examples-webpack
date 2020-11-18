import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from "../../shared/_shared.module";
import { ClockComponent } from "./clock-component";
import { NgRxClockOneComponent } from "./ngrx-clock-one.component";
import { NgrxClockTwoComponent } from "./ngrx-clock-two.component";
import { filterReducer } from './ngrx-in-ten/filter-reducer';
import { FilterSelectComponent } from "./ngrx-in-ten/filter-select.component";
import { NgrxInTenMainComponent } from "./ngrx-in-ten/ngrx-in-ten-main-component";
import { peopleReducer } from './ngrx-in-ten/people-reducer';
import { PersonInputComponent } from "./ngrx-in-ten/person-input.component";
import { PersonListComponent } from "./ngrx-in-ten/person-list.component";
import { NgrxPeopleComponent } from "./ngrx-people.component";
import { NgrxQueueModule, queueReducer, UnitEffects } from './ngrx-queue/_ngrx-queue.module';
import { NgrxWordsComponent } from "./ngrx-words.component";
import { clockReducer, peoplezReducer, tickReducer, unitReducer, wordsReducer } from "./reducers/_reducers.service";
import { StartStopRxStreamComponent } from "./stop-start-rx-stream-button.component";
import { NgrxContainerComponent } from "./_ngrx-container.component";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ShoppingReducer } from './shopping-cart/store/reducers/shopping.reducer';
import { NgRxShoppingModule } from './shopping-cart/_app.module';
import { ShoppingEffects } from './shopping-cart/store/effects/shopping.effects';

@NgModule({
  imports: [
    SharedModule,
    NgrxQueueModule,
    NgRxShoppingModule,
    // ngrx setup
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      UnitEffects,
      ShoppingEffects
    ]),
    StoreModule.forRoot({
      clockReducer,
      filterReducer,
      peopleReducer,
      peoplezReducer,
      tickReducer,
      unitReducer,
      wordsReducer,
      queueReducer,
      shopping: ShoppingReducer
    }),
  ],
  declarations: [
    NgrxContainerComponent,
    NgRxClockOneComponent,
    NgrxClockTwoComponent,
    NgrxInTenMainComponent,
    PersonListComponent,
    PersonInputComponent,
    FilterSelectComponent,
    NgrxWordsComponent,
    NgrxPeopleComponent,
    ClockComponent,
    StartStopRxStreamComponent
  ]
})
export class NgrxModule {
}

export { NgrxContainerComponent };

