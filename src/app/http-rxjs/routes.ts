import {HttpExamples} from './searches/main';
import {EchonestAppComponent} from './echonest-app/echonest-app';
import {MainClocks} from './ngrx-clock/main';
import {MiscHttpExamples} from './misc-examples/main';
import {NgRxInTenMinsComponent} from './ngrx-in-ten/main';
import {JohnLinquistExamples} from './john-linquist/main';

export default [
    {path: '', redirectTo: 'http-examples', pathMatch: 'full' },
    {path: 'http-examples', component: HttpExamples},
    {path: 'john-linquist', component: JohnLinquistExamples},
    {path: 'misc-examples', component: MiscHttpExamples},
    {path: 'echonest-app', component: EchonestAppComponent},
    {path: 'ngrx', component: MainClocks},
    {path: 'ngrx-in-ten', component: NgRxInTenMinsComponent},
]

