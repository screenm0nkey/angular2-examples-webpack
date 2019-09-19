import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ExternalLinksService, ExtLink} from "./external-links.service";
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'external-link',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
      <a href="{{(item$|async)?.href}}" target="_blank">[{{(item$|async)?.id}}] - {{(item$|async)?.title}}</a>
  `
})
export class ExternalLinkComponent implements OnInit {
  @Input() id: number;
  private item$: Subject<ExtLink>;

  constructor(private linksService: ExternalLinksService) {
  }

  ngOnInit() {
    this.item$ = this.linksService.getLink(this.id);
  }
}
