import {Component, OnInit} from '@angular/core';
import {MrTestyServiceOne, MrTestyServiceTwo, RubbishService} from './injectables.service';
import {ExtLink} from "../../../shared/external-links.component";

@Component({
  selector: 'misc-app',
  templateUrl: './dependency.html'
})
export class DepInjectionComponent implements OnInit {
  protected links: ExtLink[];

  constructor(private ts1: MrTestyServiceOne, private ts2: MrTestyServiceTwo, rubbishService: RubbishService) {
  }

  ngOnInit(): void {
    this.links = [
      {
        href: 'https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f',
        title: 'Total Guide To Angular 6+ Dependency Injection'
      }, {
        href: 'http://angularfirst.com/the-ngmodule-forroot-convention',
        title: 'The NgModule forRoot() Convention'
      }, {
        href: 'https://blog.angular-university.io/angular2-ngmodule/',
        title: 'Search this article for forRoot()'
      }, {
        href: 'http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html',
        title: 'Dependency Injection'
      },{
        href: 'http://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html',
        title: 'InjectionToken (was OpaqueToken)'
      },{
        href: 'https://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html',
        title: 'Multi Providers'
      },{
        href: 'http://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html',
        title: 'BYPASSINGPROVIDERS IN ANGULAR 2'
      },{
        href: 'http://stackoverflow.com/questions/39828246/angular-2-how-to-isolate-service-provider-in-a-feature-module',
        title: 'Angular 2 how to isolate service provider in a feature module'
      },
    ]
  }
}
