import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {JohnLinquistExamples} from './main';
import {JohnLinquistWikiSearch} from './wikipedia-john-linquist';
import {StarWarsComponent} from './star-wars';
import {ForkJoinComponent}  from './forkjoin-search'

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    JohnLinquistExamples,
    JohnLinquistWikiSearch,
    StarWarsComponent,
    ForkJoinComponent
  ]
})
export class JohnLinquistModule {
}
export {JohnLinquistExamples}
