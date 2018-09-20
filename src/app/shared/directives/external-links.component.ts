import {Component, Input, OnInit} from '@angular/core';

interface ExtLink {
  title: string;
  href: string;
}

const linkData = {
  whatsNewInNg6: ['Whats new in Angular6']
};

export const externalLinks : {[key:string]:ExtLink} = Object.keys(linkData).reduce((prev, key): {[key:string]:ExtLink} => {
  prev[key] = {
    title: linkData[0],
    href: linkData[1]
  };
  return prev;
}, {});


@Component({
  selector: 'ext-links',
  template: `
    <a href='http:// angularfirst.com/the-ngmodule-forroot-convention/' target='_blank'>
      The NgModule <code>forRoot()</code> Convention
    </a>
  `
})
export class ExternalLinksComponent implements OnInit {
  @Input() id: string;
  
  ngOnInit(){}
}
