import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from "../../../shared/_shared.module";
import { DynamicMainComponent } from "./_main.component";
import { ChickensModule } from "../chickens/_chickens.module";
import { LinquistDirectivesModule } from '../directives-linquist/_linquist-directives.module';
import { CatItemComponent } from './pet-list-example/cat-item.component';
import { DogItemComponent } from './pet-list-example/dog-item.component';
import { MemberItemComponent } from './pet-list-example/member-item-container.component';
import { MembersListComponent } from './pet-list-example/members-list.component';

@NgModule({
  imports: [
    SharedModule, ChickensModule, LinquistDirectivesModule,
  ],
  declarations: [
    DynamicMainComponent,
    CatItemComponent,
    DogItemComponent,
    MemberItemComponent,
    MembersListComponent,
  ]
})
export class DynamicExamplesModule {
}

