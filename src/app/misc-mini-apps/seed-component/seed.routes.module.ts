import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeedComponent} from './seed.component';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';
import {RepoBrowser} from './github/repo-browser';
import {RepoList} from './github/repo-list';
import {RepoDetail} from './github/repo-detail';

const seedRoutes: Routes = [
  {
    path: '',
    component: SeedComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {
        path: 'github',
        component: RepoBrowser,
        children: [
          {path: '', component: RepoList},
          {
            path: ':org',
            component: RepoList,
            children: [
              {path: '', component: RepoDetail},
              {path: ':repo', component: RepoDetail}
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(seedRoutes)]
})
export class SeedRoutingModule {
}
