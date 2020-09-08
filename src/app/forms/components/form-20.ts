import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'form-twenty',
  templateUrl: './form-20.html',
  styles: ['label {display:block; margin : 0;margin-top:16px;}']
})
export class FormTipsComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;

  ngOnDestroy() { }

  ngOnInit() {
    // must always add the value when disabling an input.
    const email = new FormControl({ disabled: true, value: 'nick' });

    let name = new FormControl();

    const updateOnBlur = new FormControl(null, {
      validators: this.myvalidator.bind(this),
      updateOn: 'blur'
    });

    this.registerForm = new FormGroup({
      email,
      name,
      updateOnBlur
    });

    // name = this.registerForm.get('name');
    name.patchValue('value', { onlySelf: true, emitEvent: false })
    name.enable({ emitEvent: false });
    // name.disable({ emitEvent: false });

    name.valueChanges.pipe(
      debounceTime(300),
      untilDestroyed(this)
    ).subscribe((inputValue: string) => {
      console.log(inputValue)
      return name.setErrors(Validators.minLength(4)(name));
    })

    this.registerForm.addControl('house', new FormControl())
  }

  myvalidator(control: FormControl): boolean {
    console.log(control);
    return true;
  }

  addControl() {

  }

  submit() {
    // value will only output fields which are not disabled
    console.log(this.registerForm.value);
    // getRawValue outputs everything.
    console.log(this.registerForm.getRawValue());
  }



}
