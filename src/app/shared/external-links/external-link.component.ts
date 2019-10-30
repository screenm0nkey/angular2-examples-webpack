import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ExternalLinksService, ExtLink} from "./external-links.service";
import { Router } from '@angular/router';

@Component({
  selector: 'dlink',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
      <a *ngIf="link && link.type==='ext'" 
         class="link-type {{link.type}}" 
         href="{{link.href}}"
         target="_blank">
          [{{link.id}}] - {{link.title}}
      </a>
      
      <a *ngIf="link && link.type==='int'" 
         class="link-type {{link.type}}" 
         (click)="goto(link.href)">
          [{{link.id-1000}}] - {{link.title}}
      </a>
  `,
})
export class ExternalLinkComponent implements OnInit {
  @Input() id: number;
  private link: ExtLink;

  constructor(private router: Router, private linksService: ExternalLinksService) {
  }

  ngOnInit() {
    this.linksService.getLink(this.id).subscribe(link => this.link = link);
  }

  goto(path) {
    this.router.navigate([path], {});
  }
}
