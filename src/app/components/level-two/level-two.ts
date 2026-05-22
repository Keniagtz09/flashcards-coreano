import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SrsService } from '../../core/services/srs';
import { Flashcard } from '../../shared/models/models';

@Component({
  selector: 'app-level-two',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './level-two.html',
  styleUrl: './level-two.css'
})
export class LevelTwoComponent implements OnInit {

  tarjetaActual!: Flashcard;
  respuestaUsuario: string = '';
  mensaje: string = '';
  respondido: boolean = false;

  constructor(private srsService: SrsService) {}

  ngOnInit() {
    this.cargarNuevaTarjeta();
  }

  cargarNuevaTarjeta() {
    this.respondido = false;
    this.mensaje = '';
    this.respuestaUsuario = '';
    this.tarjetaActual = this.srsService.getRandomCard();
  }

  verificarEscritura() {
    if (!this.respuestaUsuario.trim()) return;

    this.respondido = true;
    
    // Limpieza básica de cadenas para comparar de forma justa
    const respuestaLimpia = this.respuestaUsuario.trim().toLowerCase();
    const correctaLimpia = this.tarjetaActual.espanol.toLowerCase();

    if (respuestaLimpia === correctaLimpia || correctaLimpia.includes(respuestaLimpia) && respuestaLimpia.length > 2) {
      this.mensaje = '¡Correcto! ✍️ Perfecto, ortografía exacta.';
    } else {
      this.mensaje = `Incorrecto 📝 La respuesta exacta era: ${this.tarjetaActual.espanol}`;
    }
  }
}