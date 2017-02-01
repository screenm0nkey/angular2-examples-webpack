import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {SeedRoutingModule} from "./seed.routes.module";
import {SeedComponent} from "./seed.component";
import {Github} from "./github/shared/github";
import {About} from "./about/about";
import {Home} from "./home/home";
import {RepoBrowser} from "./github/repo-browser/repo-browser";
import {RepoList} from "./github/repo-list/repo-list";
import {RepoDetail} from "./github/repo-detail/repo-detail";

@NgModule({
  imports: [SharedModule, SeedRoutingModule],
  declarations: [SeedComponent, About, RepoBrowser, RepoList, RepoDetail, Home],
  providers: [Github]
})
export class SeedModule {
}
