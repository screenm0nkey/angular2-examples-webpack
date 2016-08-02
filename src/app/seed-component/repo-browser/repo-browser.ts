import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Github} from '../services/github';

@Component({
    selector: 'repo-browser',
    pipes: [],
    providers: [Github],
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h3>GitHub Browser</h3>
    <input type="text" #repoName placeholder="Search Github Orgs">
    <button (click)="searchForOrg(repoName.value)">Search Orgs</button>
    <router-outlet></router-outlet>
    `,
})
export class RepoBrowser {

    constructor(private router:Router, private github:Github) {
    }

    searchForOrg(orgName:string) {
        this.github.getOrg(orgName)
            .subscribe(({name}) => {
                console.log(name);
                this.router.navigate(['/seed', 'github', orgName]);
            });
    }

}
