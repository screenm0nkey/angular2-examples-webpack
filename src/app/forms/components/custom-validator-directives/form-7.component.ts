import {Component} from '@angular/core';

@Component({
  selector: 'form-five',
  styles: [
    '.label{ color : red; width : 250px; display : inline-block; text-align:left; font-size:12px;} .ng-dirty.ng-invalid {border: 1px red solid;}'
  ],
  template: `
    <div class='comps'>
      <div class='custom'>
      <p class='file'>forms/components/custom-validator-directives/form-7.component.ts</p>
      <h4>Custom validateMyCounter directives for template driven forms</h4>

      <p>
      <a href='https:// hackernoon.com/what-is-forwardref-in-angular-and-why-we-need-it-6ecefb417d48' target='_blank'>
        What is forwardRef in Angular and why we need it with custom validators
      </a>
      </p>
      
      <form #form='ngForm' (ngSubmit)='logForm(form)'>
        <span class='label'>Required</span>
        <input type='text' name='name' ngModel required>
        <pre>&lt;input type='text' ngModel='name' required&gt;</pre>
      
        <span class='label'>Min Length = 3</span>
        <input type='text' name='street' ngModel minlength='3'>
        <pre>&lt;input type='text' ngModel='street' minlength='3'&gt;</pre>
      
        <span class='label'>Custom Email Validator </span>
        <input type='email' name='email' ngModel validateEmail placeholder='type email'>
        <pre>&lt;input type='email' ngModel='email1' validateEmail&gt;</pre>
      
      
        <span class='label'>Custom Email Validator with Dependencies</span>
        <input type='email' name='email2' ngModel validateEmailDeps placeholder='type email'>
        <pre>&lt;input type='email' ngModel='email2' validateEmailDeps&gt;</pre>
      
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  `
})
export class FormSevenComponent {
}
