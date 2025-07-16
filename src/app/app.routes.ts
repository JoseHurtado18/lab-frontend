// app.routes.ts
import { Routes } from '@angular/router';
import { App } from './app';
import { ProductosComponent } from './producto/producto';
import { InventarioComponent } from './inventario/inventario';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: 'productos', component: ProductosComponent },
      { path: '', redirectTo: 'productos', pathMatch: 'full' },
      { path: 'inventario', component: InventarioComponent }, 
      // otras rutas...
    ]

  }
];
