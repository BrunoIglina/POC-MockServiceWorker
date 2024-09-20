import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <h1>Lista de usuarios</h1>
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `,
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  ngOnInit() {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        this.users = data;
      });
  }
}
