import { ComponentFactoryResolver, ComponentRef, Directive, Host, Inject, Input, Optional, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
// untilDestroyed - A neat way to unsubscribe from observables when the component destroyed
import { untilDestroyed } from 'ngx-take-until-destroy';
import { EMPTY, merge, Observable } from 'rxjs';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { ControlErrorComponent } from './control-error.component';
import { FORM_ERRORS } from './form-errors';
import { FormSubmitDirective } from './form-submit.directive';

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective {
  ref: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  @Input() customErrors = {};

  /**
   * First, we ask for Angular’s DI to provide us with a reference to the FormSubmitDirective directive. 
   * We mark this directive as Optional(), because we also want to support standalone controls that don’t exist within a form tag. 
   * In such a case, we’re using the EMPTY observable that doesn’t do anything and immediately completes.
   */
  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Optional() @Host() private form: FormSubmitDirective, // @Host will force the lookup to only go as far as this host component.
    @Inject(FORM_ERRORS) private errors,
    private controlDir: NgControl) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit() {
    // untilDestroyed - A neat way to unsubscribe from observables when the component destroyed
    const formChanges$ = merge(this.submit$, this.control.valueChanges);
    formChanges$.pipe(untilDestroyed(this))
      .subscribe(v => this.setFormErrors());
  }

  setFormErrors() {
    const controlErrors = this.control.errors;
    if (controlErrors) {
      const firstKey = Object.keys(controlErrors)[0];
      const getError = this.errors[firstKey];
      const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
      this.setError(text);
    } else {
      if (this.ref) {
        this.setError(null);
      }
    }
  }

  get control() {
    return this.controlDir.control;
  }

  // this creates a dynamic ControlErrorComponent component instance.
  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.container.createComponent(factory);
    }
    this.ref.instance.text = text;
  }

  ngOnDestroy() { }

}