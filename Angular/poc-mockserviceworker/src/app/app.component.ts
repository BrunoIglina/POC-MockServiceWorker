import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router'; 
import { UsersComponent } from './users/users.component';

@Component({
  standalone: true,  // Asegúrate de que sea standalone
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, RouterOutlet, UsersComponent] 
})
export class AppComponent {
  title = 'poc-mockserviceworker';
}
