// app.routes.ts
import { Routes } from '@angular/router';
import { App } from './app';
import { ProductosComponent } from './producto/producto';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: 'productos', component: ProductosComponent },
      { path: '', redirectTo: 'productos', pathMatch: 'full' }
      // otras rutas...
    ]

  }
];
