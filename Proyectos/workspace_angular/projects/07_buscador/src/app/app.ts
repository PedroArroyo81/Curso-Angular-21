import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';
import { BuscadorService } from './services/buscador-service';
import { Resultado } from './model/resultado';
import { DatePipe } from '@angular/common';

@Component({
  imports: [FormsModule, DatePipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  constructor(private buscadorService: BuscadorService) {}

  ngOnInit(){
    this.buscadorService.tematicas().subscribe(data => this.tematicas = data)
  }

  tematicas = [];
  tematica = "";
  resultados: Resultado[] = [];

  buscar() {
    this.buscadorService.buscar(this.tematica).subscribe(data => this.resultados = data);
  }
}
