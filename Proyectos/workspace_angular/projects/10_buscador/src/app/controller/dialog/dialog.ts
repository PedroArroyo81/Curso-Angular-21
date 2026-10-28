import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogModule } from '@angular/material/dialog';

@Component({
  imports: [MatDialogModule],
  selector: 'app-dialog',
  styleUrl: './dialog.css',
  templateUrl: './dialog.html',
})
export class Dialog {
  constructor(private dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string, mensaje: string }
  ) { }
  cerrar() {
    this.dialogRef.close();
  }
}
