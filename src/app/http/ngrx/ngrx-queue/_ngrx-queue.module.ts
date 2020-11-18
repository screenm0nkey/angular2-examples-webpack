import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/_shared.module';
import { NgrxQueueComponent } from './ngrx-queue.component';
// the reducer and effects have to be defined at the same time as all the other reducers and effects
// EffectsModule.forRoot([UnitEffects])  StoreModule.forRoot({reducer})
export { UnitEffects } from './effects';
export { queueReducer } from './reducers';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        NgrxQueueComponent
    ],
    declarations: [
        NgrxQueueComponent
    ]
})
export class NgrxQueueModule {
}


