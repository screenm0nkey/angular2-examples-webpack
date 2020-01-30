import { Component, Input } from '@angular/core';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: {
        abbreviation: string;
        name: string;
    };
    orderTotal: number;
}

@Component({
    selector: 'user',
    template: `{{user?.firstName}}`
})
export class UserComponent {
    @Input() user: User;
}

@Component({
    selector: 'users-list',
    template: `
      <span *ngFor="let user of users">{{ user.firstName }}, </span>
    `
})
export class UsersComponent {
    @Input() users: User[];
}
