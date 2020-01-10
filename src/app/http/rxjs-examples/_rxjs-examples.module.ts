import {NgModule} from '@angular/core';
import {RxJsExamplesComponent} from './_rxjs-examples.component';
import {SharedModule} from '../../shared/_shared.module';
import {CounterComponent} from './rx-counter';
import {PromiseExample} from './promise';
import {SubscribeExample} from './subscribe';
import {AutoSearch} from './automated-wiki-search';

@NgModule({
  imports: [SharedModule],
  declarations: [
    RxJsExamplesComponent,
    CounterComponent,
    PromiseExample,
    SubscribeExample,
    AutoSearch
  ]
})
export class MiscHttpModule {
}

export {RxJsExamplesComponent as MiscHttpExamples};
