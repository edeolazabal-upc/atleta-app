import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Atleta} from './model/atleta'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atleta-app';

  nombre: string = ''
  peso: number = 0
  estatura :   number = 0
  atleta: Atleta | null = null
  imcResultado: string = ''

  crearAtleta() {
    this.atleta = new Atleta(this.nombre, this.peso, this.estatura)

  }
  calcularIMC() {
    if (this.atleta) {
      this.imcResultado = this.atleta.calcularIMC()
    }
  }
}
