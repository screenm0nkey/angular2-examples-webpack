import { Component } from '@angular/core';

@Component({
  styles: [
    '.label{ color : red; width : 250px; display : inline-block; text-align:left; font-size:12px;} .ng-dirty.ng-invalid {border: 1px red solid;}'
  ],
  template: `
    <div class='comps'>
      <div class='custom'>
      <p class="path">forms/components/custom-validator-directives/form-7.component.ts</p>
      <h4>Custom validateMyCounter directives for template driven forms</h4>

      <p>
          <dlink [id]="53"></dlink>
      </p>
      
      <form #form='ngForm' (ngSubmit)='logForm(form)'>
        <span class='label'>Required</span>
        <input type='text' name='name' ngModel required>
        <code><lgt>input type='text' ngModel='name' required</lgt></code>
        <hr>
      
        <span class='label'>Min Length = 3</span>
        <input type='text' name='street' ngModel minlength='3'>
        <code><lgt>input type='text' ngModel='street' minlength='3'</lgt></code>
        <hr>
      
        <p>All built-in validators are already added to the NG_VALIDATORS token.
        Angular has an internal mechanism to execute validators on a form control.
        It maintains a multi provider for a dependency token called NG_VALIDATORS.
        </p>
        <span class='label'>Custom Email Validator </span>
        <input type='email' name='email' ngModel validateEmail placeholder='type email'>
        <code><lgt>input type='email' ngModel='email1' validateEmail</lgt></code>
        <hr>
      
        <span class='label'>Custom Email Validator with Dependencies</span>
        <input type='email' name='email2' ngModel validateEmailDeps placeholder='type email'>
        <code><lgt>input type='email' ngModel='email2' validateEmailDeps</lgt></code>
      
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  `
})
export class FormSevenComponent {
  logForm(form) {
    console.log(form);
  }
}
