import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Github {
	constructor(private http: Http) {}

	getOrg(org:string){
        debugger
		return this.makeRequest(`orgs/${org}`);
	}

	getReposForOrg(org:string){
		return this.makeRequest(`orgs/${org}/repos`);
	}

	getRepoForOrg(org:string, repo:string){
		return this.makeRequest(`repos/${org}/${repo}`);
	}

	private makeRequest(path: string){
		let params = new URLSearchParams();
		params.set('per_page', '100');

		let url = `https://api.github.com/${ path }`;
		var req$ = this.http.get(url, {search: params})
			.map((res) => res.json());

        req$.subscribe((res)=> console.log(100, res));
        return req$;
	}
}
