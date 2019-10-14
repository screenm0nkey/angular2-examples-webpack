import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, ReplaySubject, Subject} from 'rxjs';

type RawLink = [number, string, string, string];
type LinkMap = { [key: number]: ExtLink };

export interface ExtLink {
  id: number;
  title: string;
  titleLc: string;
  href: string;
  keywords?: string;
}

@Injectable({providedIn: 'root'})
export class ExternalLinksService {
  linksMap$: Subject<LinkMap> = new ReplaySubject<LinkMap>(1);
  links$: Subject<ExtLink[]> = new ReplaySubject<ExtLink[]>(1);

  constructor(private http: HttpClient) {
    this.formatLink = this.formatLink.bind(this);
    this.getLinks();
  }

  getLinks(): Observable<ExtLink[]> {
    const observable = this.http
      .get('/assets/json/ext-site-links.json')
      .pipe(map((res: RawLink[]) => res.map(this.formatLink)));

    observable.subscribe((links: ExtLink[]) => {
      this.linksMap$.next(this.createLinkMap(links));
      this.links$.next(links);
    });
    return observable;
  }

  getLink(id: number): Subject<ExtLink> {
    const link$: Subject<ExtLink> = new ReplaySubject<ExtLink>(1);
    this.linksMap$.subscribe((links: LinkMap) => {
      link$.next(links[id]);
    });
    return link$;
  }

  private formatLink(linkInfo: RawLink): ExtLink {
    return {
      id: linkInfo[0],
      title: linkInfo[1],
      titleLc: linkInfo[1].toLowerCase(),
      href: linkInfo[2],
      keywords : linkInfo[3] ? linkInfo[3].toLowerCase() : ''
    }
  }

  private createLinkMap(links: ExtLink[]): LinkMap {
    return links.reduce((acc: LinkMap, curr: ExtLink) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
}
