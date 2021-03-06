import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/_shared.module';
import {SeedRoutingModule} from './seed.routes.module';
import {SeedComponent} from './seed.component';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';
import {RepoBrowser} from './github/repo-browser';
import {RepoList} from './github/repo-list';
import {RepoDetail} from './github/repo-detail';

@NgModule({
  imports: [SharedModule, SeedRoutingModule],
  declarations: [SeedComponent, AboutComponent, RepoBrowser, RepoList, RepoDetail, HomeComponent],
  providers: []
})
export class SeedModule {
}
