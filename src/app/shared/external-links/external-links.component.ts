import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ExternalLinksService, ExtLink} from "./external-links.service";

@Component({
  selector: 'external-links',
  styles: ['external-link {display:block; }'],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
      <input #search type="text" placeholder="Search" (input)='filterLinks(search.value)'>

      <section class="links">
          <dlink *ngFor='let item of links' [id]="item.id"></dlink>
      </section>
  `
})
export class ExternalLinksComponent implements OnInit {
  public links: ExtLink[];
  public pristine: ExtLink[];

  constructor(public linksService: ExternalLinksService) {
  }

  ngOnInit() {
    this.linksService.links$.subscribe((links: ExtLink[] = []) => {
      this.links = links;
      this.pristine = [...this.links];
    });
  }

  filterLinks(value: string): void {
    value = value.toLowerCase();
    this.links = this.pristine.filter(link => {
      const title = link.titleLc.includes(value);
      const url = link.href.includes(value);
      const keywords = link.keywords.includes(value);
      return title || url || keywords;
    });
  }

}
