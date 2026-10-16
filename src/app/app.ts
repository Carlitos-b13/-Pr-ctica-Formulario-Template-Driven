
import { Component } from '@angular/core';
import { FormularioReactivo } from './formulario-reactivo/formulario-reactivo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioReactivo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
