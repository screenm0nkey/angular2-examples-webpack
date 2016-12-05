import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {ChickensComponent} from './main.component';
import {ChickenComponent} from './chicken.component';
import {DomAdapterComponent} from './dom-adapter.component';
import {ChickensService} from './chicken.service';
import {SnippetComponent} from './snippet.component';
import {UISnippets} from './directives/snippet.directive';
import {Tooltip} from './directives/tooltip.directive';
import {Unless} from './directives/unless.directive';

@NgModule({
  imports: [SharedModule],
  declarations: [
    ChickensComponent,
    ChickenComponent,
    Tooltip,
    Unless,
    DomAdapterComponent,
    SnippetComponent,
    UISnippets
  ],
  providers: [ChickensService]
})
export class ChickenModule {
}

export {ChickensComponent}

