// src/app/services/producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ConstruirDTO } from './ConstruirDTO';

export interface Producto {
  id?: number;
  codigoSerie: string;
  fechaFabricacion: Date;
  planoUsado:{
    codigo: string;
    descripcion: string;
  }
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'lab/productos';

  constructor(private http: HttpClient) {}

  // Obtener lista de productos
  getProductos(): Promise<Producto[]> {
    return firstValueFrom(this.http.get<Producto[]>(this.apiUrl));
  }

  

  // Enviar solicitud para fabricar un producto
  fabricarProducto(construirDTO: ConstruirDTO): Promise<any> {
    return firstValueFrom(this.http.post(`${this.apiUrl}/fabricar`, construirDTO));
  }
}
