import {Component} from '@angular/core';
import {Github} from '../services/github';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'repo-list',
    pipes: [],
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['./repo-list.css'],
    template: `
        <h4>Repo list</h4>
        <ul  style="border:solid 2px blue; float: left; width:30%">
            <li *ngFor="let repo of repos | async">
            <a [routerLink]="['/seed', 'github', repo.owner.login, repo.name]" [routerLinkActive]="['active']">
              {{ repo.name }}
            </a>
          </li>
        </ul>
        
        <div style="border:solid 2px red; float: left;max-width:400px; overflow: hidden">
            <router-outlet></router-outlet>
        </div>
    `,
})
export class RepoList {
    org:string;
    repos:Observable<any>;

    constructor(public github:Github, private route:ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.org = params['org'];
            console.log(this);
            if (this.org) {
                this.repos = this.github.getReposForOrg(this.org);
            }
        });
    }
}
