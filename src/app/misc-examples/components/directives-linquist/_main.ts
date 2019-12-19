import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
      <section collapse-it>
        <h4>Notes on structural directives?</h4>

        <p>
          Structural directives are responsible for HTML layout. They shape or
          reshape the DOM's structure, typically by adding, removing, or
          manipulating elements.
        </p>

        <p>
          As with other directives, you apply a structural directive to a host
          element. The directive then does whatever it's supposed to do with
          that host element and its descendants.
        </p>

        <p class="highlight">
          Structural directives are easy to recognize. An asterisk (*) precedes
          the directive attribute name.
        </p>
      </section>

      <collapse-it>
        <linquist-example-01></linquist-example-01>
      </collapse-it>

      <collapse-it><linquist-example-02></linquist-example-02> </collapse-it>

      <collapse-it> <track-app></track-app></collapse-it>

      <collapse-it> <linquist-example-04></linquist-example-04></collapse-it>

      <collapse-it> <linquist-example-05></linquist-example-05></collapse-it>

      <collapse-it> <linquist-example-06></linquist-example-06></collapse-it>

      <collapse-it> <linquist-example-07></linquist-example-07></collapse-it>

      <collapse-it><linquist-example-08></linquist-example-08></collapse-it>
    </div>
  `
})
export class DirectivesLinquistMain {}
