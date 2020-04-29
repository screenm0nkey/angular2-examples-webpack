import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InsertAppComponent } from '@insertApp/app.component';
import { InsertsSharedModule } from '@insertApp/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TodoContainerModule } from './todo-container/_todo-container.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(
    httpClient,
    'http://localhost:1970/assets/i18n/',
    '-lang.json'
  );
}
@NgModule({
  imports: [
    InsertsSharedModule,
    TodoContainerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [InsertAppComponent],
})
export class InsertAppModule { }
