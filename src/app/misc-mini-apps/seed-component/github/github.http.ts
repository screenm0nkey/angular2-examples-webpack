import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class GithubHttp {
  constructor(public http: HttpClient) {
  }

  getOrg(org: string): any {
    return this.makeRequest(`orgs/${org}`);
  }

  getReposForOrg(org: string) {
    return this.makeRequest(`orgs/${org}/repos`);
  }

  getRepoForOrg(org: string, repo: string) {
    return this.makeRequest(`repos/${org}/${repo}`);
  }

  public makeRequest(path: string) {
    let params = new HttpParams();
    params.set('per_page', '100');

    let url = `https://api.github.com/${path}`;
    return this.http.get(url, {params}).pipe(map(res => res));
  }
}
