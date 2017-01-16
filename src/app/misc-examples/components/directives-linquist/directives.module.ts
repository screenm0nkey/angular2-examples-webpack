import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {DirectivesLinquistMain} from './main';
import {Example01Component, FirstDirective} from './example-01';
import {Example02AppComponent,Example02BasicComponent,Example02Directive} from './example-02';
import {TrackAppComponent,TrackDirective,TrackingService, OnlineDirective, OnlineService} from './example-03';
import {BasicComponent4,Example4AppComponent} from './example-04';
import {Example5AppComponent} from './example-05';
import {Example6AppComponent, ThreeDirective} from './example-06';


@NgModule({
  imports: [SharedModule],
  declarations: [
    DirectivesLinquistMain,
    FirstDirective, Example01Component,
    Example02Directive, Example02BasicComponent, Example02AppComponent,
    TrackAppComponent,TrackDirective, OnlineDirective,
    BasicComponent4,Example4AppComponent,
    Example5AppComponent,
    Example6AppComponent, ThreeDirective
  ],
  providers : [TrackingService, OnlineService]
})
export class DirectivesLinquistModule {
}

export {DirectivesLinquistMain}
