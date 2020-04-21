import { NgModule } from '@angular/core';
import { SharedModule } from "../../../shared/_shared.module";
import { DynamicMainComponent } from "./_main.component";
import { ChickensModule } from "../chickens/_chickens.module";
import { LinquistDirectivesModule } from '../directives-linquist/_linquist-directives.module';
import { CatItemComponent } from './pet-list-example/cat-item.component';
import { DogItemComponent } from './pet-list-example/dog-item.component';
import { MemberItemComponent } from './pet-list-example/member-item-container.component';
import { MembersListComponent } from './pet-list-example/members-list.component';
export { DynamicMainComponent };

@NgModule({
  imports: [
    SharedModule, ChickensModule, LinquistDirectivesModule,
  ],
  declarations: [
    DynamicMainComponent,
    CatItemComponent,
    DogItemComponent,
    MemberItemComponent,
    MembersListComponent
  ],
  /*
  Normally, Angular generates a factory for each component that it finds referenced in a template. 
  In this case, the two components below are not referenced anywhere, as they are used only at runtime. 
  We have to tell Angular to generate the factories, and to do so, we need to add our components to 
  the entryComponents array in the NgModule.
  */
  entryComponents : [
    DogItemComponent,
    CatItemComponent,
  ]
})
export class DynamicExamplesModule {
}

