import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/_shared.module';
import { NgRxShoppingAppComponent } from './app.component';


@NgModule({
  imports: [
    SharedModule,
  ],
  exports : [
    NgRxShoppingAppComponent
  ],
  declarations: [
    NgRxShoppingAppComponent,
  ]
})
export class NgRxShoppingModule { }
