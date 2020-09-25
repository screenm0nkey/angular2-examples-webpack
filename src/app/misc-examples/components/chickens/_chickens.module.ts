import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/_shared.module';
import { ChickenComponent, SayNameButtonComponent } from './chicken.component';
import { UISnippets } from './directives/snippet.directive';
import { Tooltip } from './directives/tooltip.directive';
import { Unless } from './directives/unless.directive';
import { DomAdapterComponent } from './dom-adapter.component';
import { Dynamic01Component, MyInjectableComponent01 } from './dynamic-01.component';
import { Dynamic02Component, MyInjectableComponent02 } from "./dynamic-02.component";
import { Dynamic03Component, HighlightDirective, MyInjectableComponent03 } from "./dynamic-03.component";
import { HighlightComponent } from './highlight.component';
import { SnippetComponent } from './snippet.component';
import { ChickensMainComponent } from './_main.component';

@NgModule({
  imports: [SharedModule],
  exports: [
    Dynamic01Component, MyInjectableComponent01,
    Dynamic02Component, MyInjectableComponent02,
    Dynamic03Component, MyInjectableComponent03, HighlightDirective,
    DomAdapterComponent,
    HighlightComponent,
  ],
  declarations: [
    ChickensMainComponent,
    ChickenComponent,
    SayNameButtonComponent,
    Tooltip,
    Unless,
    DomAdapterComponent,
    SnippetComponent,
    UISnippets,
    Dynamic01Component, MyInjectableComponent01,
    Dynamic02Component, MyInjectableComponent02,
    Dynamic03Component, MyInjectableComponent03, HighlightDirective,
    HighlightComponent,
  ],
  // You need to use entryComponents under @NgModule.
  // This is for dynamically added components that are added using ViewContainerRef.createComponent()
  entryComponents: [MyInjectableComponent01]
})
export class ChickensModule {
}

export { ChickensMainComponent };

