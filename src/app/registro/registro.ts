
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  usuario = {
    nombre: '',
    correo: '',
    telefono: '',
    edad: null as number | null,
    password: '',
    confirmacion: ''
  };

  registrado = false;

  registrar(formulario: NgForm): void {
    if (formulario.invalid || this.usuario.password !== this.usuario.confirmacion) {
      return;
    }

    this.registrado = true;
    console.log('Datos del registro:', {
      ...this.usuario
    });
  }
}
