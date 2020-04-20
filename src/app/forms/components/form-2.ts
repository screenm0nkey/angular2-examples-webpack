import { Component, Directive } from '@angular/core';
import { NgForm } from '@angular/forms';

// expose directive to be used in template. this is what NgForm is doing.
@Directive({
  selector: '[nickFormDirective]',
  exportAs: 'ngNickForm'
})
export class NickForm {
  public count: number = 11;
}

@Component({
  selector: 'form-two',
  templateUrl: './form-2.html'
})
export class FormTwoComponent {
  firstname: string = 'Hello';
  lastname: string = 'World';
  employee: any = { first_name: 'kara' };
  formStr: string;

  logForm(form: NgForm, nick: NickForm) {
    this.formStr = form.value;
    console.log(this);
    console.log(form);
    console.log(nick);
  }
}
