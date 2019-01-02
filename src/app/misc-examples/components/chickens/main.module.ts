import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {MainComponent} from './main.component';
import {SayNameButtonComponent, ChickenComponent, HttpDataService} from './chicken.component';
import {DomAdapterComponent} from './dom-adapter.component';
import {SnippetComponent} from './snippet.component';
import {UISnippets} from './directives/snippet.directive';
import {Tooltip} from './directives/tooltip.directive';
import {Unless} from './directives/unless.directive';
import {PopupDirective} from './directives/popup.directive';
import {InjectableComponent, DynamicComponent} from './dynamic.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MainComponent,
    ChickenComponent,
    SayNameButtonComponent,
    Tooltip,
    Unless,
    DomAdapterComponent,
    SnippetComponent,
    UISnippets,
    PopupDirective,
    InjectableComponent,
    DynamicComponent
  ],
  providers: [HttpDataService],
  // You need to use entryComponents under @NgModule.
  // This is for dynamically added components that are added using ViewContainerRef.createComponent()
  entryComponents: [InjectableComponent]
})
export class ChickenModule {
}

export {MainComponent};
