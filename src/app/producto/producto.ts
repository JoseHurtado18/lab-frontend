// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-producto',
//   imports: [],
//   templateUrl: './producto.html',
//   styleUrl: './producto.css'
// })
// export class Producto {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto.html',
  styleUrls: ['./producto.css']
})
export class Producto {
  productos: any[] = [];
  nuevoProducto = {
    codigo: '',
    nombre: '',
    cantidad: 0
  };
  error = '';
  cargando = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarProductos();
  }

  async cargarProductos() {
    this.cargando = true;
    try {
      this.productos = await firstValueFrom(this.http.get<any[]>('/lab/productos'));
    } catch (err) {
      this.error = 'Error al cargar productos';
      console.error(err);
    } finally {
      this.cargando = false;
    }
  }

  async fabricarProducto() {
    if (!this.nuevoProducto.codigo || !this.nuevoProducto.nombre || this.nuevoProducto.cantidad <= 0) {
      this.error = 'Todos los campos son requeridos';
      return;
    }

    try {
      await firstValueFrom(this.http.post('/lab/productos/fabricar', this.nuevoProducto));
      this.nuevoProducto = { codigo: '', nombre: '', cantidad: 0 };
      this.cargarProductos();
    } catch (err) {
      this.error = 'Error al fabricar producto';
      console.error(err);
    }
  }
}
