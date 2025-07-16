// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-inventario',
//   imports: [],
//   templateUrl: './inventario.html',
//   styleUrl: './inventario.css'
// })
// export class Inventario {

// }


// src/app/inventario/inventario.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MaterialModules } from '../material';
import { InventarioService } from '../inventario-service';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // MaterialModules,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './inventario.html',
  styleUrls: ['./inventario.css']
})
export class InventarioComponent implements OnInit {
  inventario: any[] = [];
  cargando = false;
  error = '';
  nuevoEnvio = { id: null, cantidadDisponible: 0 };

  constructor(private inventarioService: InventarioService) {}

  ngOnInit() {
    this.cargarInventario();
  }

  async cargarInventario() {
    this.cargando = true;
    try {
      this.inventario = await this.inventarioService.getInventario();
    } catch (err) {
      this.error = 'Error al cargar el inventario';
    } finally {
      this.cargando = false;
    }
  }

  async enviarInventario() {
    try {
      await this.inventarioService.enviarInventario(this.nuevoEnvio);
      this.nuevoEnvio = { id: null, cantidadDisponible: 0 };
      await this.cargarInventario();
    } catch (err) {
      this.error = 'Error al enviar inventario';
    }
  }
}
