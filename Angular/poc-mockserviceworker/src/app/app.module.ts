import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component'; // Asegúrate de que esta ruta sea correcta

@Component({
  standalone: true,  // Asegúrate de que sea standalone
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, RouterOutlet, UsersComponent] // Importa UsersComponent aquí
})
export class AppComponent {
  title = 'poc-mockserviceworker';
}
