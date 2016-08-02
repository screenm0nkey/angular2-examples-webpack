import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';
import {Github} from '../services/github';

@Component({
    selector: 'repo-detail',
    pipes: [],
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    template: `
        <h2>{{ repoDetails.full_name }}</h2>
        <pre>this.repoDetails = {{ repoDetails | json }}</pre>
    `
})
export class RepoDetail {
    private org:string;
    private repo:string;
    public repoDetails:any = {};

    constructor(public github:Github, private router:Router, private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.org = this.router.routerState.parent(this.route).snapshot.params['org'];
            this.repo = params['repo'] || '';
            console.log(this);
            if (this.repo) {
                this.github.getRepoForOrg(this.org, this.repo)
                    .subscribe(repoDetails => {
                        this.repoDetails = repoDetails;
                    });
            }
        });
    }
}
