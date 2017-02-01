import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {HttpExamples} from "./main";
import {WikipediaSuperSearch} from "./wikipedia-search-2";
import {JsonpWikipediaPromise, WikipediaObservable} from "./wikipedia-search-1";
import {EchonestSearch, Autosearch, ArtistCardRender} from "./echonest-search";
import {Auth0Component, AutosearchAuth} from "./auth0-authentication";
import {YoutubeBasicExample} from "./youtube-basic";
import {LocalRefSearch} from "./local-ref-search";
import {RedditExample} from "./reddit";
import {NgBookYoutubeExample, NgBookYoutubeSearch} from "./youtube-ng2-book";
import {YoutubeResultComponent} from "./youtube-helpers/youtube-result-component";
import {YoutubeService} from "./youtube-helpers/youtube-service";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HttpExamples,
    WikipediaSuperSearch,
    JsonpWikipediaPromise, WikipediaObservable,
    EchonestSearch, Autosearch, ArtistCardRender,
    Auth0Component, AutosearchAuth,
    YoutubeBasicExample,
    LocalRefSearch,
    RedditExample,
    NgBookYoutubeExample, NgBookYoutubeSearch,
    YoutubeResultComponent
  ],
  providers: [YoutubeService]
})
export class SearchesModule {
}

export {HttpExamples}
