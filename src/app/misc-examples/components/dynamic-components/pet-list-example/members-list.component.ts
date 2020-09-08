import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { MembersService } from './members.service';
import Pet from './pets.model';

@Component({
  selector: 'app-members-list',
  template: `
    <span class="path">misc-examples/components/dynamic-components/pet-list-example/members-list.component.ts</span>
    <h4>Create dynamic Component instances and pass in @Input values. NOT using @ViewChild</h4>
    <app-member-item-container 
      *ngFor="let member of members" 
      [member]="member">
    </app-member-item-container>
  `,
})
export class MembersListComponent implements OnInit {
  members: Pet[];

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.members = this.membersService.members;
  }
}
