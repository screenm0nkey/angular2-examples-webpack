import { Component } from '@angular/core';

@Component({
  styles: ['section {padding:10px; background-color:#afafaf; margin-bottom:10px; border:2px solid white}'],
  template: `
    <h4>Guide to FormArray</h4>
    <p>All examples below taken from <dlink id="40"></dlink></p>

    <p>A <code>FormArray</code> is responsible for managing a collection of <code>AbstractControl</code>, which can be a <code>FormGroup</code>, a <code>FormControl</code>, or another <code>FormArray</code>.</p>

    <p>Just like a <code>FormGroup</code>, which groups <code>AbstractControl</code> objects in an object, a <code>FormArray</code> does the same but in an array. Angular exposes specific APIs to help you manage this collection</p>


    <section>
      <form-twelve></form-twelve>
    </section>
    
    <section>
      <form-sixteen></form-sixteen>
    </section>

    <section>
      <form-thirteen></form-thirteen>
    </section>

    <section>
      <form-fourteen></form-fourteen>
    </section>

    <section>
      <form-fifteen></form-fifteen>
    </section>
  `
})
export class GuideToFormArrayComponent {

}
