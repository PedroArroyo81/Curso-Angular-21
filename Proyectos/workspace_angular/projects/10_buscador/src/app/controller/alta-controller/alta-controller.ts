import { Component, signal } from '@angular/core';
import { Item } from '../../model/Item';
import { BuscadorService } from '../../service/buscador-service';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '../dialog/dialog';

@Component({
  selector: 'app-alta-controller',
  imports: [FormsModule],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController {
  item = signal<Item>({ "url": "", "tematica": "", "descripcion": "" });
  //item:Item={"url":"","tematica":"","descripcion":""}; //en caso de no haber utilizado signal
  constructor(private buscadorService: BuscadorService, private matDialog: MatDialog) { }

  error: boolean = false;

  guardar(form: any) {
    if (form.valid) {
      this.error = false;
      this.buscadorService.nuevoItem(this.item())
        .subscribe({
          next: data => this.matDialog.open(Dialog, {
            data: {
              titulo: "Aviso",
              mensaje: "Nuevo elemento almacenado"
            }
          }),
          error: err => this.matDialog.open(Dialog, {
            data: {
              titulo: "Aviso",
              mensaje: "No se pudo añadir, URL repetida"
            }
          })
        });
    } else {
      this.error = true;
      alert("El formulario no es válido");
    }
  }
}
