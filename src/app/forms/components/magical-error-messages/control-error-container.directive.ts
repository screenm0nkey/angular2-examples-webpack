import { Directive, ViewContainerRef } from '@angular/core';

/**
 * This is used @Optional() controlErrorContainer: ControlErrorContainerDirective to access the element which contains the form input
 * It then generates a dynamic error message and appends it to this container
 */
@Directive({
  selector: '[controlErrorContainer]'
})
export class ControlErrorContainerDirective {

  constructor(public vcr: ViewContainerRef) { }

}