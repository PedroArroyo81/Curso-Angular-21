import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaisesService } from '../../services/paises-service';
import { Pais } from '../../model/pais';

@Component({
  selector: 'app-paises',
  imports: [CommonModule, FormsModule],
  templateUrl: './paises-component.html',
  styleUrl: './paises-component.css'
})
export class PaisesComponent implements OnInit {
  paises = signal<Pais[]>([]);
  //continente=signal<string>("-Continente-");
  continentes = signal<string[]>([]);
  constructor(private paisesService: PaisesService) { }
  ngOnInit(): void {
    this.paisesService.getContinentes().subscribe(data => this.continentes.set(data));
  }
  cargarPaises(event: any): void {
    this.paisesService.getPaisesContinente(event.target.value).subscribe(data => {
      this.paises.set(data);
    });
  }

}