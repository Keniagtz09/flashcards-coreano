import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SrsService } from '../../core/services/srs';
import { Flashcard } from '../../shared/models/models';

@Component({
  selector: 'app-level-one',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './level-one.html',
  styleUrl: './level-one.css'
})
export class LevelOneComponent implements OnInit {
  
  tarjetaActual!: Flashcard;
  opciones: string[] = [];
  mensaje: string = '';
  respondido: boolean = false;

  constructor(private srsService: SrsService) {}

  ngOnInit() {
    this.cargarNuevaTarjeta();
  }

  cargarNuevaTarjeta() {
    this.respondido = false;
    this.mensaje = '';
    this.tarjetaActual = this.srsService.getRandomCard();
    this.opciones = this.srsService.getAlternativas(this.tarjetaActual.espanol);
  }

  verificarRespuesta(opcion: string) {
    if (this.respondido) return;
    
    this.respondido = true;
    if (opcion === this.tarjetaActual.espanol) {
      this.mensaje = '¡Correcto! ✨ 잘했어요 (Buen trabajo)';
    } else {
      this.mensaje = `Incorrecto 🙊 La respuesta era: ${this.tarjetaActual.espanol}`;
    }
  }
}