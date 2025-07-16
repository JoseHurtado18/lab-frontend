import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MaterialModules } from './material';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, MaterialModules
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'lab-frontend';
}
