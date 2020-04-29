import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/_shared.module';
import { ChickenComponent, SayNameButtonComponent } from './chicken.component';
import { UISnippets } from './directives/snippet.directive';
import { Tooltip } from './directives/tooltip.directive';
import { Unless } from './directives/unless.directive';
import { DomAdapterComponent } from './dom-adapter.component';
import { Dynamic01Component, InjectableComponent } from './dynamic-01.component';
import { Dynamic02Component } from "./dynamic-02.component";
import { SnippetComponent } from './snippet.component';
import { ChickensMainComponent } from './_main.component';
import { CustomDecorator } from './custom-decorator.component';

@NgModule({
  imports: [SharedModule],
  exports: [
    ChickensMainComponent,
    ChickenComponent,
    SayNameButtonComponent,
    Tooltip,
    Unless,
    DomAdapterComponent,
    SnippetComponent,
    UISnippets,
    InjectableComponent,
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
    InjectableComponent,
    Dynamic01Component,
    Dynamic02Component,
    CustomDecorator
  ],
  // You need to use entryComponents under @NgModule.
  // This is for dynamically added components that are added using ViewContainerRef.createComponent()
  entryComponents: [InjectableComponent]
})
export class ChickensModule {
}

export { ChickensMainComponent };

