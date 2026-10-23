import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ValidadorUso } from './validador/validador_uso';

@Component({
  imports: [RouterOutlet, ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  miForm: FormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^(\+34|0034|34)?[67]\d{8}$/)]),
    uso_profesional: new FormControl('', []),
    instagram: new FormControl('', []),
  });

  constructor() { }
  error:boolean = false;

  ngOnInit(): void {
    this.miForm.get("uso_profesional").valueChanges.subscribe(p => {
      if (p) {
        this.miForm.get("instagram").setValidators([Validators.required, ValidadorUso]);
      } else {
        this.miForm.get("instagram").clearValidators();
      }
      this.miForm.get("instagram").updateValueAndValidity();
    });

  }

  enviar() {
    this.error = this.miForm.invalid;
    if (this.error) {
      console.log("Formulario no válido!");
      return;
    }
    console.log("Formulario correctamente validado!");
  }
}
