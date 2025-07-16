// app.routes.ts
import { Routes } from '@angular/router';
import { App } from './app';
import { Producto } from './producto/producto';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: 'productos', component: Producto },
      // otras rutas...
    ]

  }
];
