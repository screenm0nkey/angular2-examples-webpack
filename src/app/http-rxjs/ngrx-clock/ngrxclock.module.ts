import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MainClocks} from './main';
import {NgRxClockApp} from './example-clock-one';
import {NgRxClock2} from './example-clock-two';
import {Clock} from './clock';

// StoreModule.provideStore({queue, people, filter, tick, clock, peoplez}),
// assigned in the async.module as the store seemed to overwrite child store deps

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MainClocks, NgRxClockApp, NgRxClock2, Clock
  ]
})
export class NgrxClocksModule {
}
export {MainClocks}


