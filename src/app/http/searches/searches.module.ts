import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {HttpExamples} from './main';
import {WikipediaSuperSearch} from './wikipedia-super-search';
import {JsonpWikipediaPromise} from './wikipedia-search-1';
import {WikipediaObservable} from './wikipedia-search-2';
import {EchonestDirective} from './echonest/echonest.directive';
import {EchonestSearchComponent} from './echonest/echonest-search.component';
import {EchonestArtistCardComponent} from './echonest/echonest-artist-card.component';
import {Auth0Component, AutosearchAuth} from './auth0-authentication';
import {YoutubeBasicExample} from './youtube-basic';
import {LocalRefSearch} from './local-ref-search';
import {RedditExample} from './reddit';
import {NgBookYoutubeExample, NgBookYoutubeSearch} from './youtube-ng2-book';
import {YoutubeResultComponent} from './youtube-helpers/youtube-result-component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    HttpExamples,
    WikipediaSuperSearch,
    JsonpWikipediaPromise,
    WikipediaObservable,
    EchonestSearchComponent, EchonestDirective, EchonestArtistCardComponent,
    Auth0Component,
    AutosearchAuth,
    YoutubeBasicExample,
    LocalRefSearch,
    RedditExample,
    NgBookYoutubeExample,
    NgBookYoutubeSearch,
    YoutubeResultComponent
  ],
  providers: []
})
export class SearchesModule {
}

export {HttpExamples};
