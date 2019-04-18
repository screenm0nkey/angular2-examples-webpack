import {Component, Input, OnInit} from '@angular/core';

export interface ExtLink {
  title: string;
  href: string;
}

const linkData = {
  whatsNewInNg6: ['Whats new in Angular6']
};

export const externalLinks: { [key: string]: ExtLink } = Object.keys(linkData).reduce((prev, key): { [key: string]: ExtLink } => {
  prev[key] = {
    title: linkData[0],
    href: linkData[1]
  };
  return prev;
}, {});


@Component({
  selector: 'ext-link',
  styles:[':host { display: block; }'],
  template: `
    <a href='{{linkObj.href}}' target='_blank'>{{linkObj.title}}</a>
  `
})
export class ExternalLinkComponent {
  @Input() linkObj: ExtLink;
}
