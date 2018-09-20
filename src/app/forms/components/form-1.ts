import { Component } from '@angular/core';

@Component({
  selector: 'form-one',
  templateUrl: './form-1.html'
})
export class FormOneComponent {
  gender: string = 'Female';
  javascript: boolean = false;
  angular: boolean = true;
  csharp: boolean = false;
  name: string = 'Two way bound';
}
