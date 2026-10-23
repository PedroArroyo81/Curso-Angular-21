import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Contacto } from '../../model/contacto';
import { FormsModule } from '@angular/forms';
import { AgendaService } from '../../services/agenda-service';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule],
  templateUrl: './agenda.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './agenda.css',
})
export class Agenda {
  constructor(private agendaService: AgendaService){};

  contacto = new Contacto();
  agenda: Contacto[] = [];
  show: boolean = false;
  textoBtn = 'Ver histórico';

  guardar(): void {
    if (!this.agendaService.agregarContacto(this.contacto)) {
         alert('El teléfono ya existe');
      return;
    }
    this.agenda.push(this.contacto);
    this.contacto = new Contacto();
  }

  verHistorico(): void {
    this.show = !this.show;
    if (this.show) {
      this.textoBtn = 'Ocultar';
    } else {
      this.textoBtn = 'Ver histórico';
    }
    console.log(this.agendaService.telefonos());
  }

}
