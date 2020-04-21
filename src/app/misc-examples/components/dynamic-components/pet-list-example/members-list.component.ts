import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { MembersService } from './members.service';
import Pet from './pets.model';

@Component({
  selector: 'app-members-list',
  template: `
    <h4>List of Members:</h4>
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
