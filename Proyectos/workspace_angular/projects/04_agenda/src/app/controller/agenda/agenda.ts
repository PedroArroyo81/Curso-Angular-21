import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Contacto } from '../../model/contacto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule],
  templateUrl: './agenda.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './agenda.css',
})
export class Agenda {
  contacto = new Contacto();
  historico: Contacto[] = [];
  show: boolean = false;
  textoBtn = 'Ver histórico';

  guardar(): void {
    if (this.historico.some((e) => e.getTelefono() === this.contacto.getTelefono())) {
      alert('El teléfono ya existe');
      return;
    }
    this.historico.push(
      new Contacto(this.contacto.getNombre(), this.contacto.getTelefono(), this.contacto.getEdad()),
    );
    this.contacto = new Contacto();
  }

  verHistorico(): void {
    this.show = !this.show;
    if (this.show) {
      this.textoBtn = 'Ocultar';
    } else {
      this.textoBtn = 'Ver histórico';
    }
  }
}
