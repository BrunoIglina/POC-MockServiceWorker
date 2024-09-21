import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environmetns/environment';  // Ajusta la ruta según tu estructura de carpetas

import { worker } from './mocks/browser';  // Asegúrate de ajustar la ruta si es necesario

if (environment.production) {
  enableProdMode();
}

worker.start().then(() => {
  bootstrapApplication(AppComponent);
});
