import {Injectable} from "@angular/core";
import {Artist, EchonestRepo} from "./echonest.repo";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class EchonestService {
  public artists$: BehaviorSubject<Artist[]> = new BehaviorSubject([]);
  private artists: Artist[];

  constructor(private repo: EchonestRepo) {
  }

  onArtistSelected(artist: Artist) {
    this.artists = this.artists
      .map((a: Artist) => {
        a.id === artist.id && (a.favourited = !artist.favourited);
        return a;
      });
    this.artists$.next(this.artists);
  }

  fetchArtists(num: number): void {
    this.repo
      .get(num)
      .subscribe((artists: Artist[]) => {
        this.artists = artists;
        this.artists$.next(this.artists);
      })
  }
}
