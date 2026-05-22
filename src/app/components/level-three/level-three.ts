import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SrsService } from '../../core/services/srs';
import { Flashcard } from '../../shared/models/models';

@Component({
  selector: 'app-level-three',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './level-three.html',
  styleUrl: './level-three.css'
})
export class LevelThreeComponent implements OnInit {

  tarjetaActual!: Flashcard;
  mostrarReverso: boolean = false;

  constructor(private srsService: SrsService) {}

  ngOnInit() {
    this.cargarNuevaTarjeta();
  }

  cargarNuevaTarjeta() {
    this.mostrarReverso = false;
    this.tarjetaActual = this.srsService.getRandomCard();
  }

  voltearTarjeta() {
    this.mostrarReverso = !this.mostrarReverso;
  }

  calificar(acierto: boolean) {
    if (acierto) {
      console.log(`Tarjeta [${this.tarjetaActual.coreano}] marcada como: ACERTADA. Se programa para mayor espacio de tiempo.`);
    } else {
      console.log(`Tarjeta [${this.tarjetaActual.coreano}] marcada como: FALLADA. Regresa a revisión inmediata.`);
    }
    this.cargarNuevaTarjeta();
  }
}