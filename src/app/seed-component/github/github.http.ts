import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class GithubHttp {
  constructor(private http: HttpClient) {}

  getOrg(org: string) : any {
    return this.makeRequest(`orgs/${org}`);
  }

  getReposForOrg(org: string) {
    return this.makeRequest(`orgs/${org}/repos`);
  }

  getRepoForOrg(org: string, repo: string) {
    return this.makeRequest(`repos/${org}/${repo}`);
  }

  private makeRequest(path: string) {
    let params = new HttpParams();
    params.set("per_page", "100");

    let url = `https://api.github.com/${path}`;
    return this.http.get(url, { params }).map(res => res);
  }
}
