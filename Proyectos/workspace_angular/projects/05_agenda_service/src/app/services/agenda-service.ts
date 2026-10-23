import { Service } from '@angular/core';
import { Contacto } from '../model/contacto';

@Service()
export class AgendaService {
  agenda: Contacto[] = [];

  agregarContacto(contacto: Contacto): boolean{
     if (this.agenda.some((e) => e.getTelefono() === contacto.getTelefono())) {
      return false;
     }
    this.agenda.push(contacto);
    return true;
  }

  //devuelve lista de telefonos
  telefonos(): string[] {
    return this.agenda.map(c=> c.telefono)
  }
}
