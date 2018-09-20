/*
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
/*
 * Services
 */
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'search',
  template: `
  <h1>Search</h1>
  <p>
    <input type='text' #newquery
      [value]='query'
      (keydown.enter)='submit(newquery.value)'>
    <button (click)='submit(newquery.value)'>Search</button>
  </p>
  
  <section>
    <div *ngIf='(results$ | async)?.length===0'>
        No tracks were found with the term '{{ query }}'
      </div>
  
    <div *ngIf='(results$ | async)?.length'>
        <h1>Results</h1>
        <div class='row'>
          <div class='col-sm-6 col-md-4' *ngFor='let t of results$ | async'>
            <div class='thumbnail'>
              <div class='content'>
                <img src='{{ t.album.images[0].url }}' class='img-responsive'>
                <div class='caption'>
                  <h3>
                    <a [routerLink]='['./artists', t.artists[0].id]'>
                      {{ t.artists[0].name }}
                    </a>
                  </h3>
                  <br>
                  <p>
                    <a [routerLink]='['tracks', t.id]'>
                      {{ t.name }}
                    </a>
                  </p>
                </div>
                <div class='attribution'>
                  <h4>
                    <a [routerLink]='['./albums', t.album.id]'>
                      {{ t.album.name }}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SearchComponent implements OnInit {
  query: string;
  results$: Observable<any[]>;

  constructor(
    private spotify: SpotifyService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.search = this.search.bind(this);
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
    });
  }

  // by the time ngOnInit is called the query property has been set in the constructor
  ngOnInit(): void {
    this.search();
  }

  submit(query: string): void {
    this.router
      .navigate(['httprx', 'spotify'], { queryParams: { query: query } })
      .then(this.search);
  }

  search(): void {
    this.results$ = this.query && this.spotify.searchTrack(this.query);
  }
}
