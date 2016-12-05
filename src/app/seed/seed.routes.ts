import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeedComponent} from './seed.component';
import {About} from './about/about';
import {Home} from './home/home';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';

const routes: Routes = [
  {
    path: 'seed',
    component: SeedComponent,
    children: [
      {path: '', redirectTo: 'about'},
      {path: 'home', component: Home},
      {path: 'about', component: About},
      {
        path: 'github', component: RepoBrowser,
        children: [
          {path: '', component: RepoList}, {
            path: ':org', component: RepoList,
            children: [
              {path: '', component: RepoDetail},
              {path: ':repo', component: RepoDetail}
            ]
          }]
      }
    ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
