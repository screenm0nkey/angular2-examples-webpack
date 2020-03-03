import { NgModule } from '@angular/core';
import { RxJsExamplesComponent } from './_main.component';
import { SharedModule } from '../../shared/_shared.module';
import { CounterComponent } from './rx-counter';
import { PromiseExample } from './promise-example.component';
import { SubscribeExample } from './subscribe';
import { AutoSearch } from './automated-wiki-search';
import { ShareHttpRequest} from './sharing-http-requests.component';
import { UserComponent, UsersComponent } from './shared-components';
import { GithubRepositoriesComponent } from './practical-rxjs.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    RxJsExamplesComponent,
    CounterComponent,
    PromiseExample,
    SubscribeExample,
    AutoSearch,
    ShareHttpRequest,
    UserComponent,
    UsersComponent,
    GithubRepositoriesComponent
  ]
})
export class MiscHttpModule {
}

export { RxJsExamplesComponent as MiscHttpExamples };
