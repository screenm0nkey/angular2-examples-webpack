import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/_shared.module';
import { CustomDecoratorsComponent } from './custom-decorators.component';
import { CustomLogDecoratorComponent } from './example-log-decorator.component';
import { OnChangesDecoratorComponent, ExampleOnChangesDecoratorComponent } from './example-onchanges-decorator.component';
import { HelloComponent, AppComponent } from './example-runoutside-decorator.component';
import { MommyAppComponent, DaddyHelloComponent } from './example-unsubscribe-decorator.component';



@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    CustomDecoratorsComponent,
    CustomLogDecoratorComponent, OnChangesDecoratorComponent,
    ExampleOnChangesDecoratorComponent,
    HelloComponent, AppComponent,
    MommyAppComponent, DaddyHelloComponent
  ]
})
export class CustomDecoratorsModule { }
