
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {
  formulario = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    apellidos: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    correo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    telefono: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    })
  });

  datosRegistrados: {
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
    password: string;
  } | null = null;

  enviarFormulario(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.datosRegistrados = this.formulario.getRawValue();

    console.log('Datos registrados:', this.datosRegistrados);
  }

  limpiarFormulario(): void {
    this.formulario.reset();
    this.datosRegistrados = null;
  }
}
