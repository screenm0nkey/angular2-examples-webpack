import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {DirectivesLinquistMain} from './main';
import {Example01AppComponent, FirstDirective} from './example-01';
import {Example02AppComponent, Example02BasicComponent, Example02Directive} from './example-02';
import {Example03AppComponent, OnlineDirective, OnlineService, TrackDirective, TrackingService} from './example-03';
import {BasicComponent4, Example04AppComponent} from './example-04';
import {Example05AppComponent} from './example-05';
import {Example06AppComponent, ThreeDirective} from './example-06';
import {Example07AppComponent, HooperDirective} from './example-07';
import {Example08AppComponent, SurroundDirective, TemplateService, TemplateStorageComponent} from './example-08';

@NgModule({
  imports: [SharedModule],
  declarations: [
    DirectivesLinquistMain,
    FirstDirective,
    Example01AppComponent,
    Example02Directive,
    Example02BasicComponent,
    Example02AppComponent,
    Example03AppComponent,
    TrackDirective,
    OnlineDirective,
    BasicComponent4,
    Example04AppComponent,
    Example05AppComponent,
    Example06AppComponent,
    ThreeDirective,
    Example07AppComponent,
    HooperDirective,
    Example08AppComponent,
    SurroundDirective,
    TemplateStorageComponent
  ],
  providers: [TrackingService, OnlineService, TemplateService]
})
export class DirectivesLinquistModule {
}

export {DirectivesLinquistMain};
