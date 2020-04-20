import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GithubHttp} from './github.http';

@Component({
  selector: 'repo-browser',
  styleUrls: ['../seed-component.css'],
  template: `
    <div class="repo-browser">
      <p class='path'>seed-component/github/repo-browser.ts (deeppink border)</p>
      <h4>GitHub Browser</h4>
    
      <input type='text' #repoName placeholder='Search Github'>&nbsp;
      <button (click)='searchForOrg(repoName.value)'>Search Orgs</button>
    
      <router-outlet></router-outlet>
    </div>
  `
})
export class RepoBrowser {
  constructor(public router: Router, public github: GithubHttp) {
  }

  searchForOrg(orgName: string) {
    this.github.getOrg(orgName).subscribe(({name}) => {
      this.router.navigate(['mini-apps', 'seed-app', 'github', orgName]);
    });
  }
}
