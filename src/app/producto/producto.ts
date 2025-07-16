
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto, ProductoService } from '../productoService';
import { MaterialModules } from '../material';
import { ConstruirDTO } from '../ConstruirDTO';
import { Router } from 'express';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModules],
  templateUrl: './producto.html',
  providers: [ProductoService]
})
export class ProductosComponent {
  cargando = true;
  productos: Producto[] = [];
  nuevoProducto: ConstruirDTO = {
    codigoSerie: '',
    
    cantidad: 0,
  };
  error = '';

  constructor(private productoService: ProductoService) {}

  async ngOnInit() {
    await this.cargarProductos();
  }

  async cargarProductos() {
    try {
      this.productos = await this.productoService.getProductos();
      this.cargando = false;
      console.log(this.productos);
    } catch (err) {
      this.error = 'Error al cargar productos';
      console.error(err);
    }
  }

  async fabricarProducto() {
    try {
      await this.productoService.fabricarProducto(this.nuevoProducto);
      this.nuevoProducto = {
         codigoSerie: '',
         cantidad: 0,
        };
      await this.cargarProductos();
    } catch (err) {
      this.error = 'Error al fabricar producto';
      console.error(err);
    }
  }


}
