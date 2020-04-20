import {Component, OnInit} from '@angular/core';
import {GithubHttp} from './github.http';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'repo-list',
  styleUrls: ['../seed-component.css'],
  template: `
    <section class='clearfix repo-list'>
      <p class='path'>seed-component/github/repo-list.ts (border lime)</p>
      <h4>Repo List for {{org}}</h4>
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
