import { Component, Inject, InjectionToken, Injector, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
class SomeService {
  static counter: number = 0;
  callMe(s: String) {
    console.log(`%cSomeService instance-id=${++SomeService.counter}`,"color:green",s);
  }
}

const AnyObjectCanBeTheKey = {};
const SOME_TOKEN = new InjectionToken<string>("SomeToken");
// notice that they both have the same description but are still valid
const TOKEN_A = new InjectionToken<string>("UserConfig");
const TOKEN_B = new InjectionToken<string>("UserConfig");

@Component({
  selector: "tokens-example",
  providers: [
    SomeService, // this is shorthand for provide(SomeService, {useClass : SomeService}),
    { provide: SOME_TOKEN, useValue: "dependency one", multi: true },
    { provide: SOME_TOKEN, useValue: "dependency two", multi: true },
    { provide: "helloWorld", useValue: "Hello World!!!" },
    { provide: String, useValue: "come-on!" },
    { provide: TOKEN_A, useValue: "TOKEN_A" },
    { provide: TOKEN_B, useValue: "TOKEN_B" },
    { provide: "sausages", useClass: SomeService },
    { provide: AnyObjectCanBeTheKey, useClass: SomeService },
    { provide: "MrHooty", useExisting: TOKEN_B }
  ],
  template: `
    <collapse-it>
      <p class="file">
        misc-examples/components/dependency-injection/token-examples.component.ts
      </p>
      <h4>Notes on Tokens and InjectionTokens</h4>
      <p>
        Since Angular version 4.x OpaqueToken is considered deprecated in favour
        of InjectionToken.
      </p>
      <div class="links">
        <dlink [id]="10"></dlink>
      </div>
      <p>
        InjectionToken does pretty much the same thing as OpaqueToken (in fact,
        it derives from it). However, it allows to attach type info on the token
        via TypeScript generics, plus, it adds a little bit of sugar that makes
        the developer’s life a bit more pleasant when creating factory providers
        that come with their owndependencies.
      </p>

      <p>
        We get a service from a dependency injector by giving it a token.
        In the example below Angular asks the injector for the service
        associated with the token called "LoggerService" and assigns the
        returned value to the loggerFactory parameter.
      </p>

      <code>constructor(loggerFactory: LoggerService)</code>
      <p>
        The simple "class" Provider is the most typical by far.
        The example below takes a token and a definition object. The token is
        usually a class but it doesn't have to be. in the example below The “LoggerService” is the token, the “DateLoggerService” is the
        Definition Object or Factory
      </p>

      <code>
        <cur> provide: LoggerService, useClass: DateLoggerService</cur>
      </code>

      <p>
        In the example below we set the "useValue" property to a fixed value that the provider can return as the dependency value.
        Use this technique to provide runtime configuration constants such as
        web-site base addresses and feature flags. We often use a value provider
        in a unit test to replace a production service with a fake or mock.
      </p>

      <code>providers: [<cur>provide: 'URL', useValue: 'https://swapi.co/api'</cur>]</code>

  
    </collapse-it>
  `
})
export class TokenExamplesComponent {
  constructor(
    @Inject(AnyObjectCanBeTheKey) public some5,
    @Inject("helloWorld") public helloWorld,
    @Inject(String) public aString,
    @Inject(SOME_TOKEN) public multiDependency,
    @Inject(TOKEN_A) public dino1,
    @Inject(TOKEN_B) public dino2,
    @Inject("MrHooty") public MrHooty,
  ) {
    console.log(
      '%cprovide(SOME_TOKEN, {useValue: "dependency one", multi: true})',
      "color:red",
      multiDependency
    );
    console.log(
      '%cString provide("helloWorld", {useValue : "Hello World" }',
      "color:pink",
      helloWorld
    );
    console.log(
      "%cString @Inject(String) public aString",
      "color:pink",
      aString
    );
    console.log(
      '%c{provide : TOKEN_B, useValue : "DINO"}',
      "color:red",
      dino1,
      dino2
    );
    console.log(
      "%c{provide: 'MrHooty', useExisting: TOKEN_B}",
      "color:red",
      MrHooty
    );
  }
}
