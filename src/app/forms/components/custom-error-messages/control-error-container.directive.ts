import { Directive, ViewContainerRef } from '@angular/core';

/**
 * This directive is optional and is used like "@Optional() controlErrorContainer: ControlErrorContainerDirective".
 * It is used to access the element which contains the form input.
 * When the child form input generates a dynamic error message, it appends it to this container.
 */
@Directive({
  selector: '[controlErrorContainer]'
})
export class ControlErrorContainerDirective {

  constructor(public vcr: ViewContainerRef) { }

}