import {provide, Inject, Component, OpaqueToken} from "@angular/core";
import { SomeService} from './some-service';







/*
This shows different ways of inject the same Token.

NOTE: when using a string token we HAVE to use @Inject,
i.e. @Inject('whateverToken') public some3

The 'whateverToken' is defined in the bootstrap.ts as
"provide('whateverToken', {useClass : SomeService })"
* */

let AnyObjectCanBeTheKey = {};
const SOME_TOKEN: OpaqueToken = new OpaqueToken('SomeToken');

@Component({
    selector: 'inject-component',
    providers : [
        provide(SOME_TOKEN, {useValue: 'dependency one', multi: true}),
        provide(SOME_TOKEN, {useValue: 'dependency two', multi: true}),
        provide(AnyObjectCanBeTheKey, {useClass : SomeService }),
        provide('sausages', {useClass : SomeService }),
        provide('helloWorld', {useValue : 'Hello World!!!' }), //inject a string
        provide(String, {useValue : 'come-on!' }) //inject a string
    ],
    styles : [`
        h4 { background-color : green; display : inline-block;}
        a { color : white; padding:4px; display: block; }
    `],
    template : `
            <a target="_blank" href="http://www.sitepoint.com/angular-2-components-providers-classes-factories-values">
                Dependency Injection (see console)
            </a>
        `
})
export class InjectComponent {
    constructor(
        public some1 : SomeService, // defined in bootstrap.ts
        @Inject(SomeService) public some2, // longhand version of line above
        @Inject(AnyObjectCanBeTheKey) public some5,
        @Inject('sausages') public some3,
        @Inject('whateverToken') public some4, // see bootstrap.ts for how this is defined
        // injects a string
        @Inject('helloWorld') public helloWorld,
        @Inject(String) public aString,
        // injects a factory
        @Inject('EngineService') public engineFactory1, // notice that we have imported the service
        @Inject('EngineService') public engineFactory2,
        @Inject(SOME_TOKEN) public multiDependency
    )
    {
        some1.callMe('public some1 : SomeService');
        some2.callMe('@Inject(SomeService) public some2');
        some5.callMe("@Inject('AnyObjectCanBeTheKey') public some5");
        some3.callMe("@Inject('sausages') public some3");
        some4.callMe("@Inject('whateverToken') public some4");
        console.log("provide('helloWorld', {useValue : 'Hello World' }", helloWorld);
        console.log('@Inject(String) public aString', aString);
        engineFactory1().callMe("EngineService, { useFactory: () => {}");
        engineFactory2().callMe("EngineService, { useFactory: () => {}");
        console.log('provide(SOME_TOKEN, {useValue: "dependency one", multi: true})', multiDependency)
    }
}





