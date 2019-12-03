import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {ChickensMainComponent} from './_main.component';
import {ChickenComponent, SayNameButtonComponent} from './chicken.component';
import {DomAdapterComponent} from './dom-adapter.component';
import {SnippetComponent} from './snippet.component';
import {UISnippets} from './directives/snippet.directive';
import {Tooltip} from './directives/tooltip.directive';
import {Unless} from './directives/unless.directive';
import {PopupDirective} from './directives/popup.directive';
import {Dynamic01Component, InjectableComponent} from './dynamic-01.component';
import {Dynamic02Component} from "./dynamic-02.component";

@NgModule({
  imports: [SharedModule],
  exports: [
    Dynamic01Component,
    Dynamic02Component
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
    PopupDirective,
    InjectableComponent,
    Dynamic01Component,
    Dynamic02Component
  ],
  // You need to use entryComponents under @NgModule.
  // This is for dynamically added components that are added using ViewContainerRef.createComponent()
  entryComponents: [InjectableComponent]
})
export class ChickensModule {
}

export {ChickensMainComponent};
