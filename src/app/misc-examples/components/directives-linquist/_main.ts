import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
      <section collapse-it>
        <h4>Notes on structural directives?</h4>

        <p>
          There are three kinds of Angular directives <br>
           (1) components <br>
           (2) attribute directives <br>
           (3) structural directives
        </p>

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

        <p>
          The asterisk (*) is a convenience notation and the string is a
          microsyntax rather than the usual template expression. Angular
          desugars this notation into a marked-up
          <lgt>ng-template</lgt> that surrounds the host element and its
          descendents. Each structural directive does something different with
          that template.
        </p>

        <p>
          <strong><lgt>ng-container</lgt></strong><br>
          Host elements can only have one directive applied to them, so it's common to use an outer 
          element for one directive and an inner element for another i.e. outer element might have an 
          *ngIf and the inner might contain the *ngFor. The issue with this is the creation of additional html.
          In this case we can use <lgt>ng-container</lgt>
          <dlink id="87"></dlink>
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
export class DirectivesLinquistMain { }
