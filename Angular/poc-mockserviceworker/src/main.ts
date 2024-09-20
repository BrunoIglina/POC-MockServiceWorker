import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { environment } from './environmetns/environment';
import { worker } from './mocks/browser';  // Asegúrate de que la ruta sea correcta

if (!environment.production) {
  worker.start(); // Inicia el Mock Service Worker en modo desarrollo
}

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
