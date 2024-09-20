import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router'; // Importar el RouterModule

@Component({
  standalone: true,  // Asegúrate de que sea standalone
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, RouterOutlet] // Agregar el RouterModule aquí
})
export class AppComponent {
  title = 'poc-mockserviceworker';
}
