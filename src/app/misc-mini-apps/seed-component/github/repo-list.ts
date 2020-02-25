import {Component, OnInit} from '@angular/core';
import {GithubHttp} from './github.http';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'repo-list',
  styles: [`
    repo-list { float:left}
    .router-outlet {border:solid 5px orange; float: left; max-width:400px; overflow: hidden}
  `],
  template: `
    <section class='clearfix'>
      <p class='path'>seed-component/github/repo-list.ts</p>
      <h4>Repo list</h4>
      <ul>
        <li *ngFor='let repo of repos | async'>
          <a [routerLink]="[repo.name]" routerLinkActive="active">
            {{ repo.name }}
          </a>
        </li>
      </ul>
      <div class='router-outlet'>
          <router-outlet></router-outlet>
      </div>
    </section>
  `
})
export class RepoList implements OnInit {
  org: string;
  repos: Observable<any>;

  constructor(public github: GithubHttp, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.org = params['org'];
      if (this.org) {
        this.repos = this.github.getReposForOrg(this.org);
      }
    });
  }
}
