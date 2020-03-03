import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged, filter,
  map,
  switchMap,
  shareReplay, tap
} from 'rxjs/operators';

type RepositorySearchResponse = { items: Repository[] };
type Repository = { owner: Owner };
type Organization = {};
type Owner = { organizations_url: string; type: string; };

@Component({
  selector: 'app-github-repositories',
  templateUrl: './practical-rxjs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepositoriesComponent implements OnInit {
  queries$ = new Subject<string>();
  selectedRepository$ = new Subject<Repository | undefined>();
  repositories$: Observable<Repository[]>;
  organizations$: Observable<Organization[]>;
  orgMap: { property?: Observable<Organization[]> }

  constructor(private http: HttpClient) {
  }

  static OwnerType = { User: 'User' };
  static GITHUB_URL = 'https://api.github.com/search/repositories';

  ngOnInit() {
    this.orgMap = {};
    this.repositories$ = this.queries$.pipe(
      map((query: string) => query ? query.trim() : ''),
      filter((query: string) => query.length >= 3),
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query: string) => this.fetchRepositories(query)),
      this.filterByOwnerType(GithubRepositoriesComponent.OwnerType.User),
      shareReplay(1)
    );

    this.organizations$ = this.selectedRepository$.pipe(
      map((repository) => repository && repository.owner.organizations_url),
      switchMap((url: string | false) => {
        return url ? this.fetchUserOrganizations(url) : of(undefined);
      }),
    );
  }

  filterByOwnerType(type: string) {
    const filterFn = (repository: Repository) => repository.owner.type === type;
    return map((repositories: Repository[]) => {
      return repositories.filter(filterFn);
    });
  }

  onTextChange(query: string) {
    this.queries$.next(query);
  }

  onRepositoryMouseEvent(repository: Repository | undefined) {
    this.selectedRepository$.next(repository);
  }

  private fetchRepositories(query: string): Observable<Repository[]> {
    const params = { q: query };
    return this.http
      .get<RepositorySearchResponse>(GithubRepositoriesComponent.GITHUB_URL, { params })
      .pipe(
        map((response: RepositorySearchResponse) => response.items)
      );
  }

  private fetchUserOrganizations(url: string): Observable<Organization[]> {
    if (this.orgMap[url]) {
      return this.orgMap[url];
    }
     
    return this.http
      .get<Organization[]>(url)
      .pipe(
        tap(res => {
          this.orgMap[url] = of(res);
          console.log(res)
        })
      );
  }
}