import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <form (submit)="getUser()">
      <label for="id">ID:</label>
      <input id="id" [(ngModel)]="userId" name="id" required />

      <label for="name">Name:</label>
      <input id="name" [(ngModel)]="userName" name="name" required />

      <button type="submit">Get User</button>
    </form>

    <div *ngIf="response">
      <h3>Response:</h3>
      <pre>{{ response | json }}</pre>
    </div>
  `,
})
export class UsersComponent {
  userId: number | undefined;
  userName: string = '';
  response: any;

  async getUser() {
    try {
      const res = await fetch(`http://localhost:4200/api/users`, {
        method: 'POST', // Usamos POST para enviar los datos en el cuerpo
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: this.userId,
          userName: this.userName,
        }),
      });
      this.response = await res.json();
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }
}
