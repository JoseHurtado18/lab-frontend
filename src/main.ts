import 'zone.js'; 

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ProductoService } from './app/productoService';

bootstrapApplication(App, {

  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    ProductoService],
}
).catch((err) => console.error(err));
