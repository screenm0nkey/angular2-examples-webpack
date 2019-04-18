import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {sharedPipes} from './pipes';
import {ExternalLinkComponent} from './directives/external-links.component';
/**
 FormsModule gives us template driven directives such as:
 • ngModel and
 • NgForm
 Whereas ReactiveFormsModule gives us directives like
 • formControl and
 • ngFormGroup
 */

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
    HttpClientJsonpModule,
    ExternalLinkComponent,
    ...sharedPipes
  ],
  declarations: [
    ...sharedPipes,
    ExternalLinkComponent
  ]
})
export class SharedModule {
  /**
   * The forRoot() example below is deprecated in favour of 'providedIn'
   * If we ever used SomeModule.forRoot() to prevent creation of additional instances of the service
   * by the lazy loaded modules we can simply use providedIn: 'root' instead.
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [/*MrTestyServiceOne*/]
    };
  }
}
