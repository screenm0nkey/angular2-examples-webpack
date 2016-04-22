import { SomeService, EngineService } from './some-service';
import {Inject} from "angular2/core";
import {Component} from "angular2/core";
import {provide} from "angular2/core";

/*
This shows different ways of inject the same Token.

NOTE: when using a string token we HAVE to use @Inject,
i.e. @Inject('whateverToken') public some3

The 'whateverToken' is defined in the bootstrap.ts as
"provide('whateverToken', {useClass : SomeService })"
* */

let AnyObjectCanBeTheKey = {};

@Component({
    selector: 'inject-component',
    providers : [
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
        @Inject(SomeService) public some2, // same as above.
        @Inject(AnyObjectCanBeTheKey) public some5,
        @Inject('sausages') public some3,
        @Inject('whateverToken') public some4, // see bootstrap.ts for how this is defined
        // injects a string
        @Inject('helloWorld') public helloWorld,
        @Inject(String) public aString,
        // injects a factory
        @Inject('EngineService') public factory
    )
    {
        some1.callMe('public some1 : SomeService');            // 1
        some2.callMe('@Inject(SomeService) public some2');     // 1
        some5.callMe("@Inject('AnyObjectCanBeTheKey') public some5"); // 2
        some3.callMe("@Inject('sausages') public some3");      // 3
        some4.callMe("@Inject('whateverToken') public some4"); // 4
        console.log("provide('helloWorld', {useValue : 'Hello World' }", helloWorld);
        console.log('@Inject(String) public aString', aString);
        factory().callMe("EngineService, { useFactory: () => {}")
    }
}





