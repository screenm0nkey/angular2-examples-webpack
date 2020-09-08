import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GithubHttp } from './github.http';

@Component({
  selector: 'repo-detail',
  styleUrls: ['../seed-component.css'],
  template: `
    <section class='repo-details'>
      <p class="path">seed-component/github/repo-detail.ts  (gold border)</p>
      <h4 *ngIf="repoDetails.full_name">{{ repoDetails.full_name }}</h4>
      <pre>this.repoDetails = {{ repoDetails | json }}</pre>
    </section>
  `
})
export class RepoDetail implements OnInit {
  public org: string;
  public repo: string;
  public repoDetails: any = {};

  constructor(public github: GithubHttp, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.org = this.route.snapshot.parent.params['org'];
      this.repo = params['repo'] || '';

      if (this.repo) {
        this.github
          .getRepoForOrg(this.org, this.repo)
          .subscribe(repoDetails => {
            this.repoDetails = repoDetails;
          });
      }
    });
  }
}
