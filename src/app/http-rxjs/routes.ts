import {HttpExamples} from './searches/main';
import {EchonestAppComponent} from './echonest-app/echonest-app';
import {MainClocks} from './ngrx-clock/main';
import {MiscHttpExamples} from './misc-examples/main';
import {NgRxInTenMinsComponent} from './ngrx-in-ten/main';

export default [
    {path: '', redirectTo: 'http-examples', terminal: true},
    {path: 'http-examples', component: HttpExamples, useAsDefault: true},
    {path: 'misc-examples', component: MiscHttpExamples},
    {path: 'echonest-app', component: EchonestAppComponent},
    {path: 'ngrx', component: MainClocks},
    {path: 'ngrx-in-ten', component: NgRxInTenMinsComponent},
]

/*
import {HttpExamples} from './searches/main';
import {EchonestAppComponent} from './echonest-app/echonest-app';
import {MainClocks} from './ngrx-clock/main';
import {MiscHttpExamples} from './misc-examples/main';
import {NgRxInTenMinsComponent} from './ngrx-in-ten/main';

export default [
    {path: '', redirectTo: 'http-examples', terminal: true},
    {path: 'http-examples', component: HttpExamples, useAsDefault: true},
    {path: 'misc-examples', component: MiscHttpExamples},
    {path: 'echonest-app', component: EchonestAppComponent},
    {path: 'ngrx', component: MainClocks},
    {path: 'ngrx-in-ten', component: NgRxInTenMinsComponent},
]
*/


