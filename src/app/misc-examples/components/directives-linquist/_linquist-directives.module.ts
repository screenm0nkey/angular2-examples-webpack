import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/_shared.module';
import { DirectivesLinquistMain } from './main.component';
import { Example01AppComponent, FirstDirective } from './example-01';
import { Example02AppComponent, Example02BasicComponent, Example02Directive } from './example-02';
import { Example03AppComponent, OnlineDirective, TrackDirective } from './example-03';
import { BasicComponent4, Example04AppComponent } from './example-04';
import { Example05AppComponent } from './example-05';
import { Example06AppComponent, ThreeDirective } from './example-06';
import { Example07AppComponent, HooperDirective } from './example-07';
import { Example08AppComponent, SurroundDirective, TemplateStorageComponent } from './example-08';
import { StructuralDirectivesModule } from '../structural-directives/_templates.module';
import { ChickensModule } from '../chickens/_chickens.module';
import { InputBindingModule } from '../input-binding/_input-binding.module';

@NgModule({
  imports: [SharedModule, ChickensModule, InputBindingModule],
  exports: [
    BasicComponent4, Example04AppComponent,
    Example06AppComponent, ThreeDirective,
    Example07AppComponent, HooperDirective,
    Example08AppComponent, SurroundDirective, TemplateStorageComponent,
  ],
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
    TemplateStorageComponent,
  ],
  providers: []
})
export class LinquistDirectivesModule {
}

export { DirectivesLinquistMain };
