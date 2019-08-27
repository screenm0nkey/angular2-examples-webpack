import {ChangeDetectionStrategy, Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Subject, ReplaySubject} from 'rxjs';

export interface ExtLink {
  title: string;
  href: string;
}

@Injectable({providedIn: 'root'})
export class ExternalLinksService {
  links$: Subject<any[]> = new ReplaySubject<any[]>(1);

  constructor(private http: HttpClient) {
    this.formatLink = this.formatLink.bind(this);
    this.getLinks();
  }

  getLinks() {
    this.http
      .get('/assets/json/site-links.json')
      .pipe(map((res: any[]) => res.map(this.formatLink)))
      .subscribe((links: any[]) => {
        this.links$.next(links);
      });
  }

  formatLink(linkInfo: any[], index: number) {
    return {
      id: index,
      title: linkInfo[0],
      titleLc: linkInfo[0].toLowerCase(),
      href: linkInfo[1]
    }
  }
}

@Component({
  selector: 'external-links',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <input #search type="text" placeholder="Search" (input)='filterLinks(search.value)'>

    <section class="links">
      <a *ngFor='let item of links' href="{{item.href}}" target="_blank">[{{item.id}}] - {{item.title}}</a>
    </section>
  `
})
export class ExternalLinksComponent implements OnInit {

  private links: any[];
  private pristine: any[];

  constructor(private linker: ExternalLinksService) {
  }

  ngOnInit() {
    // this.linker.getLinks().subscribe((links: any[] = []) => {
    //   this.links = links;
    //   this.pristine = [...this.links];
    // })
  }

  filterLinks(value: string): void {
    value = value.toLowerCase();
    this.links = this.pristine.filter(link => link.titleLc.includes(value));
  }

}
