import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {forkJoin, Observable, ReplaySubject, Subject} from 'rxjs';

type RawLink = [number, string, string, string];
type LinkMap = { [key: number]: ExtLink };

export interface ExtLink {
  type: string;
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

  constructor(public http: HttpClient) {
    this.formatLink = this.formatLink.bind(this);
    this.getLinks();
  }

  getLinks(): Observable<ExtLink[]> {
    const ext$: Observable<any> = this.http.get('/assets/json/ext-site-links.json');
    const int$: Observable<any> = this.http.get('/assets/json/int-site-links.json');
    const observable = this.joinLinks(int$, ext$);

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

  public joinLinks(int$: Observable<RawLink[]>, ext$: Observable<RawLink[]>): Observable<ExtLink[]> {
    return forkJoin(int$, ext$).pipe(map((res: [RawLink[], RawLink[]]) => {
      const extLinks: ExtLink[] = res[1].map(link => this.formatLink(link, 'ext'));
      const intLinks: ExtLink[] = res[0].map(link => this.formatLink(link, 'int'));
      return intLinks.concat(extLinks);
    }));
  }

  public formatLink(linkInfo: RawLink, type: string): ExtLink {
    return {
      type,
      id: linkInfo[0],
      title: linkInfo[1],
      titleLc: linkInfo[1].toLowerCase(),
      href: linkInfo[2],
      keywords: linkInfo[3] ? linkInfo[3].toLowerCase() : '',
    }
  }

  public createLinkMap(links: ExtLink[]): LinkMap {
    return links.reduce((acc: LinkMap, curr: ExtLink) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
}
