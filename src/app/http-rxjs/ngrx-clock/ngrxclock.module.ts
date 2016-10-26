import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../../shared/shared.module';
import {MainClocks} from './main';
import {NgRxClockApp, tick} from './example-clock-one';
import {NgRxClock2} from './example-clock-two';
import {Clock} from './clock';
import {clock, people} from './reducers';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.provideStore({tick, clock, people})
  ],
  declarations: [
    MainClocks, NgRxClockApp, NgRxClock2, Clock
  ]
})
export class NgrxClocksModule {
}
export {MainClocks}


