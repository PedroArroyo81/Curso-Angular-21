import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Operacion } from '../../model/operacion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './calculadora.css',
})
export class Calculadora {
  num1: number;
  num2: number;
  resultado: string;
  historicoOperaciones: Operacion[] = [];
  show: boolean = false;

  sumar(): void {
    const suma = this.num1 + this.num2;
    this.resultado = `La suma de ambos números es: ${suma}`;
    this.historicoOperaciones.push(new Operacion(`${this.num1} + ${this.num2} = `, suma));
  }

  multiplicar(): void {
    const multi = this.num1 * this.num2;
    this.resultado = `La multiplicación de ambos números es: ${multi}`;
    this.historicoOperaciones.push(new Operacion(`${this.num1} * ${this.num2} = `, multi));
  }

  verHistorico(): void {
    this.show = !this.show;
  }
}
