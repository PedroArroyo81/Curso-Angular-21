import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  nombre: string;
  edad: number;
  mensaje: string;

  mostrar(): void {
    if (this.edad > 18) {
      this.mensaje = this.nombre + ' eres mayor de edad.';
    } else {
      this.mensaje = this.nombre + ' eres menor de edad.';
    }
  }
}
