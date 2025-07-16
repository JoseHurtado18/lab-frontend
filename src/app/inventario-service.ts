// src/app/services/inventario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InventarioService {
  private baseUrl = 'lab/inventario'; // Ajusta si es otro host

  constructor(private http: HttpClient) {}

  getInventario() {
    return firstValueFrom(this.http.get<any[]>(this.baseUrl));
  }

  getInventarioPorId(id: number) {
    return firstValueFrom(this.http.get<any>(`${this.baseUrl}/${id}`));
  }

  enviarInventario(data: any) {
    return firstValueFrom(this.http.post(this.baseUrl + '/enviar', data));
  }
}
