import {Injectable} from "@angular/core";
import {Artist, EchonestRepo} from "./echonest.repo";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable()
export class EchonestService {
  private favourites: Artist[] = [];
  private artists: Artist[] = [];
  private artists$: BehaviorSubject<Artist[]> = new BehaviorSubject(this.artists);
  private favourites$: BehaviorSubject<Artist[]> = new BehaviorSubject(this.favourites);


  constructor(private repo: EchonestRepo) {
  }

  getArtists(): Observable<Artist[]> {
    return this.artists$.asObservable();
  }

  getFavourites(): Observable<Artist[]> {
    return this.favourites$.asObservable();
  }

  onArtistSelected(artist: Artist) {
    artist.favourited = !artist.favourited;
    const index = this.artists.indexOf(artist);
    this.artists = [
      ...this.artists.slice(0, index),
      artist = {...artist},
      ...this.artists.slice(index + 1)
    ];
    this.favourites = this.favourites.filter((a: Artist) => a.id !== artist.id);
    if (artist.favourited) {
      this.favourites.push(artist);
    }
    this.artists$.next(this.artists);
    this.favourites$.next(this.favourites);
  }

  fetchArtists(num: number): void {
    this.repo
      .get(num)
      .subscribe((artists: Artist[]) => {
        const ids = this.favourites.map((a: Artist) => a.id);
        this.artists = artists.map((a: Artist) => {
          if (ids.includes(a.id)) {
            a.favourited = true;
          }
          return a;
        });
        this.artists$.next(this.artists);
      })
  }
}
