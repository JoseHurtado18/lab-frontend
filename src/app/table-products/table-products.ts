import { Component, inject, OnInit } from '@angular/core';
import { ProductosService } from '../productos-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-products',
  imports: [CommonModule],
  templateUrl: './table-products.html',
  styleUrl: './table-products.css',
})
export class TableProducts implements OnInit{
  productosService = inject(ProductosService);
  productos: any[] = [];

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe((data) => {
      this.productos = data;
    });
  }
}
