import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ValidadorUso(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (!value) {
        return null; // no acua si está vacío, eso se controla con Validators.required
    }
    if (value.includes("@")) {
        return null;
    }
    return { errorInstagram: "Debe contener @" }
}