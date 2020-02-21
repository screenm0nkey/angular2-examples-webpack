import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/_shared.module';
import { HttpExamples } from './main.component';
import { JsonpWikipediaPromise } from './promise-example.component';
import { WikipediaObservable } from './wikipedia-search-2';
import { MusicSearchDirective } from './song-search/echonest.directive';
import { MusicSearchComponent } from './song-search/echonest-search.component';
import { MusicSearchArtistCardComponent } from './song-search/echonest-artist-card.component';
import { Auth0Component, AutosearchAuth } from './auth0-authentication';
import { YoutubeBasicExample } from './youtube-basic';
import { LocalRefSearch } from './local-ref-search';
import { RedditExample } from './form-control-value-changes-example.component';
import { NgBookYoutubeExample, NgBookYoutubeSearch } from './youtube-ng2-book';
import { YoutubeResultComponent } from './youtube-helpers/youtube-result-component';
import { JohnLinquistWikiSearch } from './wikipedia-john-linquist';
import { ForkJoinComponent } from './forkjoin-search';
import { StarWarsComponent } from './star-wars';

@NgModule({
  imports: [SharedModule],
  declarations: [
    HttpExamples,
    JsonpWikipediaPromise,
    WikipediaObservable,
    JohnLinquistWikiSearch,
    MusicSearchComponent, MusicSearchDirective, MusicSearchArtistCardComponent,
    Auth0Component,
    AutosearchAuth,
    YoutubeBasicExample,
    LocalRefSearch,
    RedditExample,
    NgBookYoutubeExample,
    NgBookYoutubeSearch,
    YoutubeResultComponent,
    ForkJoinComponent,
    StarWarsComponent
  ],
  providers: []
})
export class SearchesModule {
}

export { HttpExamples };
