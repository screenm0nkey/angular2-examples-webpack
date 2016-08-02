import {About} from './about/about';
import {Home} from './home/home';
import {RepoBrowser} from './repo-browser/repo-browser';
import {RepoList} from './repo-list/repo-list';
import {RepoDetail} from './repo-detail/repo-detail';

export const routes = [
  { path: '', redirectTo: 'home', },
  { path: 'home', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'github', component: RepoBrowser, children: [
    { path: ':org', component: RepoList, children: [
      { path: ':repo', component: RepoDetail },
      { path: '', component: RepoDetail }
    ]},
    { path: '', component: RepoList}
  ]}
];


