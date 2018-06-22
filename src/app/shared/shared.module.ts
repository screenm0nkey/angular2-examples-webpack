import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
/**
 FormsModule gives us template driven directives such as:
 • ngModel and
 • NgForm
 Whereas ReactiveFormsModule gives us directives like
 • formControl and
 • ngFormGroup
 */
import {
  MrTestyServiceOne,
  MrTestyServiceTwo
} from "../misc-examples/components/dependency-injection/services/more-services.service";

/**
 * http://angularfirst.com/the-ngmodule-forroot-convention
 * https://blog.angular-universit y.io/angular2-ngmodule
 * NgModule containing components and directives
 * ModuleWithProviders containing components, directives, and providers
 */
@NgModule({
  // Notice that we have only exported the modules without adding it to declarations or imports.
  // This would happen in the case where the component is not used internally inside the module
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  /**
   *  this provider will be available app wide and will instantiated more than once when used on a lazy-loaded module.
   *  look at console for "Created an instance of MrTestyServiceTwo"
   */
  providers: [MrTestyServiceTwo]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // this provider will be available app wide but will only be instantiated once
      // look at the console for "Created an instance of MrTestyServiceOne 1"
      providers: [MrTestyServiceOne]
    };
  }
}
