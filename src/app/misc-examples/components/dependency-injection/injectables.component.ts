import {Component, Inject, InjectionToken, Injector} from '@angular/core';
import {
  ConsoleWriter,
  EngineService,
  loggerFactory,
  LoggerService,
  SomeService,
  someTokensFactory
} from './injectables.service';

/**
 The 'whateverToken' is defined in the bootstrap.ts as 'provide('whateverToken', {useClass : SomeService })'
 */

const AnyObjectCanBeTheKey = {};
// http://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html
const SOME_TOKEN = new InjectionToken<string>('SomeToken');
// notice that they both have the same description but are still valid
const TOKEN_A = new InjectionToken<string>('UserConfig');
const TOKEN_B = new InjectionToken<string>('UserConfig');

@Component({
  selector: 'inject-component',
  providers: [
    SomeService,
    EngineService,
    ConsoleWriter,
    {provide: SOME_TOKEN, useValue: 'dependency one', multi: true},
    {provide: SOME_TOKEN, useValue: 'dependency two', multi: true},
    {provide: 'helloWorld', useValue: 'Hello World!!!'},
    {provide: String, useValue: 'come-on!'},
    {provide: TOKEN_A, useValue: 'TOKEN_A'},
    {provide: TOKEN_B, useValue: 'TOKEN_B'},
    {provide: 'sausages', useClass: SomeService},
    {provide: AnyObjectCanBeTheKey, useClass: SomeService},
    {provide: 'MrHooty', useExisting: TOKEN_B},
    // https://egghead.io/lessons/angular-pass-dependencies-to-a-factory-provider-in-angular
    {provide: LoggerService, useFactory: loggerFactory, deps: [ConsoleWriter]},
    {provide: 'jeffFactory', useFactory: someTokensFactory, deps: [SOME_TOKEN]}
  ],
  template: `
    <p class='file'>misc-examples/components/dependency-injection/injectables.component.ts</p>
    <h4>InjectionToken (was Opaque Token)</h4>
    <p>Since Angular version 4.x OpaqueToken is considered deprecated in favour of InjectionToken.</p>
    <div class='links'>
      <a
        href='https://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html#injectiontoken-since-angular-4x'
        target='_blank'>Opaque Tokens</a>
    </div>
    <p>
      InjectionToken does pretty much the same thing as OpaqueToken (in fact, it derives from it). However, it allows
      to attach type info on the token via TypeScript generics, plus, it adds a little bit of sugar that makes the
      developer’s life a bit more pleasant when creating factory providers that come with their own dependencies.
    </p>
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
              @Inject('EngineService') public engineFactory1, // injects a factory. notice that we have imported the service
              @Inject('EngineService') public engineFactory2,
              @Inject(SOME_TOKEN) public multiDependency,
              @Inject(TOKEN_A) public dino1,
              @Inject(TOKEN_B) public dino2,
              @Inject('MrHooty') public MrHooty,
              public loggerFactory: LoggerService,
              @Inject('jeffFactory') public jeffFactory) {
    this.someService();
    this.engineService();
    this.manuallyInject();
    console.log('%cprovide(SOME_TOKEN, {useValue: "dependency one", multi: true})', 'color:red', multiDependency);
    console.log('%cString provide("helloWorld", {useValue : "Hello World" }', 'color:pink', helloWorld);
    console.log('%cString @Inject(String) public aString', 'color:pink', aString);
    console.log('%c@Inject("jeffFactory") public jeffFactory', 'color:mediumorchid', jeffFactory);
    console.log('%c{provide : TOKEN_B, useValue : "DINO"}', 'color:red', dino1, dino2);
    console.log('%c{provide: \'MrHooty\', useExisting: TOKEN_B}', 'color:red', MrHooty);
    loggerFactory.log('public loggerFactory: LoggerService')
  }

  someService() {
    this.some1.callMe('public some1 : SomeService');
    this.some2.callMe('@Inject(SomeService) public some2');
    this.some3.callMe('@Inject("sausages") public some3');
    this.some4.callMe('@Inject("whateverToken") public some4');
    this.some5.callMe('@Inject("AnyObjectCanBeTheKey") public some5');
  }

  engineService() {
    // inject factory
    this.engineFactory1().callMe('EngineService, { useFactory: () => {}');
    this.engineFactory2().callMe('EngineService, { useFactory: () => {}');
  }

  manuallyInject() {
    // notice that SOME_TOKEN is already declared as a token but this becomes a child token
    // so you wont see any values provided above.
    const injector: any = Injector.create([
      {provide: SOME_TOKEN, useValue: 'BMW one', multi: true},
      {provide: SOME_TOKEN, useValue: 'BMW two', multi: true}
    ]);
    const dependencies = injector.get(SOME_TOKEN);
    console.log('%cInjector.create() SOME_TOKEN', 'color:mediumorchid', dependencies);
  }
}
