import {Component, Inject, OpaqueToken} from "@angular/core";
import {EngineService, SomeService} from "./services/some-service";

/*
 This shows different ways of dependency-injection the same Token.

 NOTE: when using a string token we HAVE to use @Inject,
 i.e. @Inject('whateverToken') public some3

 The 'whateverToken' is defined in the bootstrap.ts as
 "provide('whateverToken', {useClass : SomeService })"
 * */

let AnyObjectCanBeTheKey = {};

//http://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html
const SOME_TOKEN: OpaqueToken = new OpaqueToken('SomeToken');
const TOKEN_A: OpaqueToken = new OpaqueToken('UserConfig');
const TOKEN_B: OpaqueToken = new OpaqueToken('UserConfig');

@Component({
  selector: 'inject-component',
  providers: [
    SomeService, EngineService,
    {provide: SOME_TOKEN, useValue: 'dependency one', multi: true},
    {provide: SOME_TOKEN, useValue: 'dependency two', multi: true},
    {provide: AnyObjectCanBeTheKey, useClass: SomeService},
    {provide: 'sausages', useClass: SomeService},
    {provide: 'helloWorld', useValue: 'Hello World!!!'}, //dependency-injection a string
    {provide: String, useValue: 'come-on!'}, //dependency-injection a string
    {provide: TOKEN_A, useValue: 'TREX'}, // see thoughtram opaque-tokens-in-angular-2
    {provide: TOKEN_B, useValue: 'DINO'}
  ],
  template: `
    <p class="file">misc-examples/components/dependency-injection/injecting-token.ts</p>
    <div class="links">
      <a href="http://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html" target="_blank">Opaque Tokens</a>
    </div>
  `
})
export class InjectComponent {
  constructor(public some1: SomeService, // defined in bootstrap.ts
              @Inject(SomeService) public some2, // longhand version of line above
              @Inject('sausages') public some3,
              @Inject('whateverToken') public some4, // see bootstrap.ts for how this is defined
              @Inject(AnyObjectCanBeTheKey) public some5,
              @Inject('helloWorld') public helloWorld, // injects a string
              @Inject(String) public aString,
              @Inject('EngineService') public engineFactory1, //injects a factory. notice that we have imported the service
              @Inject('EngineService') public engineFactory2,
              @Inject(SOME_TOKEN) public multiDependency,
              @Inject(TOKEN_A) public dino1,
              @Inject(TOKEN_B) public dino2) {
    //inject SomeService
    some1.callMe('public some1 : SomeService');
    some2.callMe('@Inject(SomeService) public some2');
    some3.callMe("@Inject('sausages') public some3");
    some4.callMe("@Inject('whateverToken') public some4");
    some5.callMe("@Inject('AnyObjectCanBeTheKey') public some5");

    //inject factory
    engineFactory1().callMe("EngineService, { useFactory: () => {}");
    engineFactory2().callMe("EngineService, { useFactory: () => {}");

    // inject string
    console.log("%cString provide('helloWorld', {useValue : 'Hello World' }",'color:pink', helloWorld);
    console.log('%cString @Inject(String) public aString','color:pink', aString);

    console.log('%cprovide(SOME_TOKEN, {useValue: "dependency one", multi: true})','color:red', multiDependency);
    console.log("%c{provide : TOKEN_B, useValue : 'DINO'}",'color:red', dino1, dino2)
  }
}





