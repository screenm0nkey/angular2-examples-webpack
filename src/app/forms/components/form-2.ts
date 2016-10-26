import {Component, Directive} from '@angular/core';
import {NgForm} from '@angular/forms';

// expose directive to be used in template. this is what NgForm is doing.
@Directive({
  selector: '[formnick]',
  exportAs: 'ngNickForm'
})
export class FormTwoDirective {
  public count: Number = 11;

  public call() {
    console.log('NICK');
  }
}

@Component({
  selector: 'form-two',
  template: require('./form-2.html')
})
export class FormTwoComponent {
  firstname: string = 'Hello';
  lastname: string = 'World';
  employee: any = {'first_name': 'kara'};
  formStr: string = '';

  logForm(form: NgForm, nick: FormTwoDirective) {
    this.formStr = JSON.stringify(form.value);
    console.log(this);
    console.log(form);
    console.log(nick);
    nick.call();
  }
}
