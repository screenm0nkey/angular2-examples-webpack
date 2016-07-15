import {FormOne} from './form-1';
import {FormTwo} from './form-2';
import {FormThree} from './form-3';
import {FormFour} from './form-4';
import {FormFive} from './form-5';
import {FormSix} from './form-6';
import {FormSeven} from './form-7';
import {FormEight} from './dynamic/form-8';

export default [
    { path: '', component: FormOne },
    { path: 'form-one', component: FormOne },
    { path: 'form-two', component: FormTwo },
    { path: 'form-three', component: FormThree },
    { path: 'form-four', component: FormFour },
    { path: 'form-five', component: FormFive },
    { path: 'form-six', component: FormSix },
    { path: 'form-seven', component: FormSeven },
    { path: 'form-eight', component: FormEight }

]